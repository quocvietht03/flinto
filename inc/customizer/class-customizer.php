<?php
/**
 * Theme Customizer Class
 *
 * @author   Bearsthemes
 * @package  flintotheme
 * @since    1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Flintotheme_Customizer' ) ) :

	/**
	 * The Flintotheme Customizer class
	 */
	class Flintotheme_Customizer {

		/**
		 * Setup class.
		 *
		 * @since 1.0.0
		 */
		function __construct() {
			add_action( 'customize_register',              array( $this, 'customize_register' ), 10 );
			add_action( 'init',                            array( $this, 'default_theme_mod_values' ), 10 );

			add_action( 'customize_controls_enqueue_scripts', array( $this, 'scripts' ) );
			add_action( 'customize_preview_init', array( $this, 'scripts_customizer_live_preview' ) );

			add_action( 'customize_controls_print_footer_scripts', array( $this, 'print_header_configurator' ) );
			add_action( 'customize_controls_print_footer_scripts', array( $this, 'print_footer_configurator' ) );
		}

		/**
		 * Returns an array of the desired default flintotheme Options
		 *
		 * @return array
		 */
		public static function get_flintotheme_default_setting_values() {
			$global_settings = flintotheme_global_settings_default();
			$header_layout_default = apply_filters('flintotheme_header_builder_layout', flintotheme_header_builder_layout_default());
			$header_data_default = $header_layout_default[0];
			$designer_data_default = apply_filters('flintotheme_designer_data_default', flintotheme_designer_data_default());
			$heading_bar_background_data_default = apply_filters('flintotheme_heading_bar_background_data_default', flintotheme_heading_bar_background_data_default());
			$taxonomy_heading_bar = flintotheme_taxonomy_heading_bar_data_default();
			$footer_layout_default = apply_filters('flintotheme_footer_builder_layout', flintotheme_footer_builder_layout_default());
			$footer_data_default = $footer_layout_default[0];
			$blog_settings = flintotheme_blog_settings_default();

			return apply_filters( 'flintotheme_setting_default_values', $args = array(
				/* Global */
				'flintotheme_global_settings'					=> json_encode($global_settings),

				/* Header */
				'flintotheme_header_builder_layout' 			=> json_encode($header_layout_default),
				'flintotheme_header_builder_data' 			=> json_encode($header_data_default),

				/* Designer */
				'flintotheme_designer_settings'				=> json_encode($designer_data_default),
				'flintotheme_designer_google_fonts' 			=> '',

				/* Heading bar */
				'flintotheme_heading_bar_display'				=> 'true',
				'flintotheme_heading_bar_page_title_display'	=> 'true',
				'flintotheme_heading_bar_breadcrumb_display'	=> 'true',
				'flintotheme_heading_bar_content_align'		=> 'text-center',
				'flintotheme_heading_bar_background_settings'	=> json_encode($heading_bar_background_data_default),

				/* Taxonomy heading bar */
				'flintotheme_taxonomy_heading_bar_settings'	=> json_encode($taxonomy_heading_bar),

				/* Footer */
				'flintotheme_footer_builder_layout' 			=> json_encode($footer_layout_default),
				'flintotheme_footer_builder_data' 			=> json_encode($footer_data_default),

				/* Blog */
				'flintotheme_blog_settings'					=> json_encode($blog_settings),
			) );
		}

		/**
		 * Adds a value to each flintotheme setting if one isn't already present.
		 *
		 * @uses get_flintotheme_default_setting_values()
		 */
		public function default_theme_mod_values() {
			foreach ( self::get_flintotheme_default_setting_values() as $mod => $val ) {
				add_filter( 'theme_mod_' . $mod, array( $this, 'get_theme_mod_value' ), 10 );
			}
		}

		/**
		 * Get theme mod value.
		 *
		 * @param string $value
		 * @return string
		 */
		public function get_theme_mod_value( $value ) {
			$key = substr( current_filter(), 10 );

			$set_theme_mods = get_theme_mods();

			if ( isset( $set_theme_mods[ $key ] ) ) {
				return $value;
			}

			$values = $this->get_flintotheme_default_setting_values();

			return isset( $values[ $key ] ) ? $values[ $key ] : $value;
		}

		/**
		 * Enqueue styles and scripts.
		 *
		 * @since   1.0.0
		 * @return  void
		 */
		function scripts() {
			global $flintotheme_version;

			/* jquery ui style */
			wp_enqueue_style( 'jquery-ui', get_template_directory_uri() . '/assets/vendors/jquery-ui/jquery-ui.css', array(), '1.12.1', 'all', true );

			/* font icon */
			wp_enqueue_style( 'ionicons', get_template_directory_uri() . '/assets/vendors/ionicons/css/ionicons.min.css', '', '2.0.1' );

			/* vue & vuex */
			wp_enqueue_script( 'vue', get_template_directory_uri() . '/assets/vendors/vue/vue.min.js', array(), '2.4.4', true );
			wp_enqueue_script( 'vuex', get_template_directory_uri() . '/assets/vendors/vue/vuex.min.js', array('vue'), '2.4.0', true );

			/* element-ui */
			wp_enqueue_style( 'element-ui', get_template_directory_uri() . '/assets/vendors/element-ui/element-ui.css', array(), '1.4.6', 'all' );
			wp_enqueue_script( 'element-ui', get_template_directory_uri() . '/assets/vendors/element-ui/element-ui.js', array('vue'), '1.4.6', true );
			wp_enqueue_script( 'element-ui-en', get_template_directory_uri() . '/assets/vendors/element-ui/element-ui-en.js', array('element-ui'), '1.4.6',true );
			wp_add_inline_script( 'element-ui-en', 'ELEMENT.locale(ELEMENT.lang.en)' );

			/* Sortable & vuedraggable */
			wp_enqueue_script( 'Sortable', get_template_directory_uri() . '/assets/vendors/sortablejs/Sortable.min.js', array(), '1.6.1', true );

			/* theme customize script */
			wp_enqueue_script(
				'flintotheme-customize',
				get_template_directory_uri() . '/assets/dist/flintotheme-customize.bundle.js',
				array(
					'jquery',
					'jquery-ui-resizable',
					'jquery-ui-draggable',
					'vue',
					'vuex',
					'element-ui',
					'element-ui-en',
					'Sortable',
				),
				$flintotheme_version,
				true
			);

			/**
			 * data localize script
			 */
			$flintotheme_global_settings							= flintotheme_get_option_type_json('flintotheme_global_settings', 'flintotheme_global_settings_default');
			$flintotheme_header_builder_layout 					= get_theme_mod('flintotheme_header_builder_layout');
			$flintotheme_header_builder_data 						= get_theme_mod('flintotheme_header_builder_data');
			$flintotheme_designer_settings 						= get_theme_mod('flintotheme_designer_settings');
			$flintotheme_heading_bar_display 						= get_theme_mod('flintotheme_heading_bar_display');
			$flintotheme_heading_bar_page_title_display 			= get_theme_mod('flintotheme_heading_bar_page_title_display');
			$flintotheme_heading_bar_breadcrumb_display 			= get_theme_mod('flintotheme_heading_bar_breadcrumb_display');
			$flintotheme_heading_bar_content_align 				= get_theme_mod('flintotheme_heading_bar_content_align');
			$flintotheme_heading_bar_background_settings 			= get_theme_mod('flintotheme_heading_bar_background_settings');
			$flintotheme_data_taxonomy 							= flintotheme_build_data_taxonomy_list();
			$flintotheme_taxonomy_heading_bar_settings 			= get_theme_mod('flintotheme_taxonomy_heading_bar_settings');
			$flintotheme_taxonomy_heading_bar_settings_default 	= flintotheme_taxonomy_heading_bar_data_default();
			$flintotheme_footer_builder_layout 					= get_theme_mod('flintotheme_footer_builder_layout');
			$flintotheme_footer_builder_data 						= get_theme_mod('flintotheme_footer_builder_data');
			$flintotheme_blog_settings							= flintotheme_get_option_type_json('flintotheme_blog_settings', 'flintotheme_blog_settings_default');

			wp_localize_script( 'flintotheme-customize', 'theme_customize_object',  apply_filters('flintotheme_theme_customize_object_localize_script', array(
				'ajax_url' 									=> admin_url( 'admin-ajax.php' ),
				/* global */
				'flintotheme_global_settings'						=> $flintotheme_global_settings,
				/* header */
				'flintotheme_header_builder_layout' 				=> json_decode($flintotheme_header_builder_layout),
				'flintotheme_header_builder_data' 				=> json_decode($flintotheme_header_builder_data),
				'flintotheme_header_widget' 						=> apply_filters('flintotheme_header_widget', flintotheme_header_widget_default()),
				'flintotheme_header_wp_widget' 					=> apply_filters('flintotheme_header_wp_widget', flintotheme_get_list_wp_widget_element()),
				'flintotheme_header_widget_options' 				=> apply_filters('flintotheme_header_widget_options', flintotheme_header_widget_options()),
				/* designer */
				'flintotheme_designer_settings'					=> json_decode($flintotheme_designer_settings),
				/* heading bar */
				'flintotheme_heading_bar_display'					=> $flintotheme_heading_bar_display,
				'flintotheme_heading_bar_page_title_display'		=> $flintotheme_heading_bar_page_title_display,
				'flintotheme_heading_bar_breadcrumb_display'		=> $flintotheme_heading_bar_breadcrumb_display,
				'flintotheme_heading_bar_content_align'			=> $flintotheme_heading_bar_content_align,
				'flintotheme_heading_bar_background_settings'		=> json_decode($flintotheme_heading_bar_background_settings),
				/* taxonomy heading bar */
				'flintotheme_taxonomy_heading_bar_settings' 		=> json_decode($flintotheme_taxonomy_heading_bar_settings),
				'flintotheme_data_taxonomy'						=> $flintotheme_data_taxonomy,
				'flintotheme_taxonomy_settings_default'			=> $flintotheme_taxonomy_heading_bar_settings_default['default'],
				/* footer */
				'flintotheme_footer_builder_layout' 				=> json_decode($flintotheme_footer_builder_layout),
				'flintotheme_footer_builder_data' 				=> json_decode($flintotheme_footer_builder_data),
				/* blog */
				'flintotheme_blog_settings'						=> $flintotheme_blog_settings,
				/* language */
				'language' => array(),
			)));
		}

		/**
		 * Enqueue scripts customizer live preview
		 *
		 * @since   1.0.0
		 * @return  void
		 */
		function scripts_customizer_live_preview() {
			global $flintotheme_version;

			wp_enqueue_script( 'googleapis-webfont', implode('', array('https://cdnjs.cloud', 'flare.com/ajax/libs/webfont/1.6.28/webfontloader.js')), array(), '1.6.28', true );
			wp_enqueue_script( 'flintotheme-customize-live-preview', get_template_directory_uri() . '/assets/dist/flintotheme-customize-live-preview.bundle.js', array('jquery', 'customize-preview'), $flintotheme_version, true );
		}

		/**
		 * Add postMessage support for site title and description for the Theme Customizer along with several other settings.
		 *
		 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
		 * @since  1.0.0
		 */
		public function customize_register( $wp_customize ) {
			/* inc */
			$inc_dir = get_template_directory() . '/inc/customizer';
			require_once $inc_dir . '/global/class-global-control.php';
			require_once $inc_dir . '/designer/class-designer-control.php';
			require_once $inc_dir . '/header/class-header-builder-control.php';
			require_once $inc_dir . '/heading-bar/class-heading-bar-control.php';
			require_once $inc_dir . '/taxonomy-heading-bar/class-taxonomy-heading-bar-control.php';
			require_once $inc_dir . '/footer/class-footer-control.php';
			require_once $inc_dir . '/blog/class-blog-control.php';

			{
				/**
				 * Global
				 */

				/* Designer setting */
				$wp_customize->add_setting( 'flintotheme_global_settings', array(
					'default' => '',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* Global section */
				$wp_customize->add_section('flintotheme_global_section', array(
					'title'    => __('🌎 Global', 'flintotheme'),
					'description' => __( '', 'flintotheme' ),
					'priority' => 23,
				));

				/* Global control */
				if ( class_exists('Flintotheme_Global_Control') ) {
					$wp_customize->add_control( new Flintotheme_Global_Control( $wp_customize, 'flintotheme_global_control', array(
						'section'  => 'flintotheme_global_section',
						'priority' => 10,
						'settings' => array(
							'global_settings' => 'flintotheme_global_settings',
						),
					) ) );
				}
			}

			{
				/**
				 * Designer
				 */

				/* Designer section */
				$wp_customize->add_section('flintotheme_designer_section', array(
					'title'    => __('💡 Designer', 'flintotheme'),
					'description' => __( '', 'flintotheme' ),
					'priority' => 24,
				));

				/* Designer setting */
				$wp_customize->add_setting( 'flintotheme_designer_settings', array(
					'default' => '',
					'transport' => 'postMessage',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* google font */
				$wp_customize->add_setting( 'flintotheme_designer_google_fonts', array(
					'default' => '',
					'transport' => 'postMessage',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* Designer control */
				if ( class_exists('Flintotheme_Designer_Control') ) {
					$wp_customize->add_control( new Flintotheme_Designer_Control( $wp_customize, 'flintotheme_designer_control', array(
						'section'  => 'flintotheme_designer_section',
						'priority' => 10,
						'settings' => array(
							'designer_settings' => 'flintotheme_designer_settings',
							'designer_google_fonts' => 'flintotheme_designer_google_fonts',
						),
					) ) );
				}
			}

			{
				/**
				 * Header Settings
				 */

				/* Header section */
				$wp_customize->add_section('flintotheme_header_section', array(
					'title'    => __('⚡ Header', 'flintotheme'),
					'description' => __( 'Customize the look & feel of your website header.', 'flintotheme' ),
					'priority' => 25,
				));

				/* Header Setting */
				$wp_customize->add_setting( 'flintotheme_header_builder_layout', array(
					'default' => '',
					'transport' => 'postMessage',
				), array( 'sanitize_callback' => '__return_false' ) );

				$wp_customize->add_setting( 'flintotheme_header_builder_data', array(
					'default' => '',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* Header Action control */
				if ( class_exists( 'Flintotheme_Header_Builder_Control' ) ) {
					$wp_customize->add_control( new Flintotheme_Header_Builder_Control( $wp_customize, 'flintotheme_header_builder_control', array(
						'section'  => 'flintotheme_header_section',
						'priority' => 10,
						'settings' => array(
							'header_layout' => 'flintotheme_header_builder_layout',
							'header_data' => 'flintotheme_header_builder_data',
						),
					) ) );
				}
			}

			{
				/**
				 * Title-bar & Breadcrumbs
				 */

				/* Title-bar section */
				$wp_customize->add_section('flintotheme_heading_bar_section', array(
					'title'    => __('⚡ Heading Bar (Page, Single)', 'flintotheme'),
					'priority' => 26,
				));

				/* Heading bar display */
				$wp_customize->add_setting( 'flintotheme_heading_bar_display', array(
					'default' => '',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* Page title bar display */
				$wp_customize->add_setting( 'flintotheme_heading_bar_page_title_display', array(
					'default' => '',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* Title-bar display */
				$wp_customize->add_setting( 'flintotheme_heading_bar_breadcrumb_display', array(
					'default' => '',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* content align */
				$wp_customize->add_setting( 'flintotheme_heading_bar_content_align', array(
					'default' => '',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* background settings */
				$wp_customize->add_setting( 'flintotheme_heading_bar_background_settings', array(
					'default' => '',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* Title-bar control */
				if ( class_exists('Flintotheme_Heading_Bar_Control') ) {
					$wp_customize->add_control( new Flintotheme_Heading_Bar_Control( $wp_customize, 'flintotheme_heading_bar_control', array(
						'section'  => 'flintotheme_heading_bar_section',
						'priority' => 10,
						'settings' => array(
							'title_bar_display' 		=> 'flintotheme_heading_bar_display',
							'page_title_display' 		=> 'flintotheme_heading_bar_page_title_display',
							'breadcrumb_display' 		=> 'flintotheme_heading_bar_breadcrumb_display',
							'content_align' 			=> 'flintotheme_heading_bar_content_align',
							'background_setings'		=> 'flintotheme_heading_bar_background_settings',
						),
					) ) );
				}
			}

			{
				/**
				 * Taxonomy header bar
				 */

				/* Taxonomy Title-bar section */
				$wp_customize->add_section('flintotheme_taxonomy_heading_bar_section', array(
					'title'    => __('⚡ Taxonomy & Archive Heading Bar', 'flintotheme'),
					'priority' => 27,
				));

				/* background settings */
				$wp_customize->add_setting( 'flintotheme_taxonomy_heading_bar_settings', array(
					'default' => '',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* Taxonomy Title-bar control */
				if ( class_exists('Flintotheme_Taxonomy_Heading_Bar_Control') ) {
					$wp_customize->add_control( new Flintotheme_Taxonomy_Heading_Bar_Control( $wp_customize, 'flintotheme_taxonomy_heading_bar_control', array(
						'section'  => 'flintotheme_taxonomy_heading_bar_section',
						'priority' => 10,
						'settings' => array(
							'taxonomy_heading_bar_settings' => 'flintotheme_taxonomy_heading_bar_settings',
						),
					) ) );
				}
			}

			{
				/**
				 * Footer
				 */

				/* Footer section */
				$wp_customize->add_section('flintotheme_footer_section', array(
					'title'    => __('⚡ Footer', 'flintotheme'),
					'priority' => 28,
				));

				/* Footer Setting */
				$wp_customize->add_setting( 'flintotheme_footer_builder_layout', array(
					'default' => '',
					'transport' => 'postMessage',
				), array( 'sanitize_callback' => '__return_false' ) );

				$wp_customize->add_setting( 'flintotheme_footer_builder_data', array(
					'default' => '',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* Footer Action control */
				if ( class_exists( 'Flintotheme_Footer_Builder_Control' ) ) {
					$wp_customize->add_control( new Flintotheme_Footer_Builder_Control( $wp_customize, 'flintotheme_footer_builder_control', array(
						'section'  => 'flintotheme_footer_section',
						'priority' => 10,
						'settings' => array(
							'footer_layout' => 'flintotheme_footer_builder_layout',
							'footer_data' => 'flintotheme_footer_builder_data',
						),
					) ) );
				}
			}

			{
				/**
				 * Blog
				 */

				/* Blog section */
				$wp_customize->add_section('flintotheme_blog_section', array(
					'title'    => __('📝 Blog', 'flintotheme'),
					'priority' => 28,
				));

				$wp_customize->add_setting( 'flintotheme_blog_settings', array(
					'default' => '',
				), array( 'sanitize_callback' => '__return_false' ) );

				/* Blog Action control */
				if ( class_exists( 'Flintotheme_Blog_Control' ) ) {
					$wp_customize->add_control( new Flintotheme_Blog_Control( $wp_customize, 'flintotheme_blog_control', array(
						'section'  => 'flintotheme_blog_section',
						'priority' => 10,
						'settings' => array(
							'blog_settings' => 'flintotheme_blog_settings',
						),
					) ) );
				}
			}

		}

		/**
		 * Container for header configurator panel.
		 * @since 1.0.0
		 */
		public function print_header_configurator() {
			require __DIR__ . '/header/templates/header-configurator.php';
		}

		/**
		 * Container for footer configurator panel.
		 * @since 1.0.0
		 */
		public function print_footer_configurator() {
			require __DIR__ . '/footer/templates/footer-configurator.php';
		}
  	}

endif;

return new Flintotheme_Customizer();
