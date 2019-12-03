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

if ( ! class_exists( 'Flintotheme_Jetpack_Portfolio_Customizer' ) ) :
  class Flintotheme_Jetpack_Portfolio_Customizer {

    /**
	 * Setup class.
	 *
	 * @since 1.0.0
	 */
    function __construct() {
		add_action( 'customize_register',              array( $this, 'customize_register' ), 11 );
		add_filter( 'flintotheme_setting_default_values',    array( $this, 'jetpack_portfolio_default_settings' ), 11 );
		add_filter( 'flintotheme_theme_customize_object_localize_script',    array( $this, 'jetpack_portfolio_customize_object_localize_script' ), 11 );
	}

	/**
	 * Woo get settings
	 * @since 1.0.0
	 */
	static public function get_settings() {
		return flintotheme_get_option_type_json('flintotheme_jetpack_portfolio_settings', 'flintotheme_jetpack_portfolio_settings_default');
	}

	/**
	 * Woo filter return default setting
	 * @since 1.0.0
	 */
	static public function jetpack_portfolio_default_settings($data) {
		$data['flintotheme_jetpack_portfolio_settings'] = wp_json_encode(flintotheme_jetpack_portfolio_settings_default());
		return $data;
	}

	/**
	 * Woo return object localize scrip
	 * @since 1.0.0
	 */
	static public function jetpack_portfolio_customize_object_localize_script($data) {
		$flintotheme_jetpack_portfolio_settings = Flintotheme_Jetpack_Portfolio_Customizer::get_settings();
		$flintotheme_jetpack_portfolio_settings['archive_layou_allow_grid_col_settings'] = flintotheme_jetpack_portfolio_archive_layout_allow_furygrid();
		$data['flintotheme_jetpack_portfolio_settings'] = $flintotheme_jetpack_portfolio_settings;

		return $data;
	}

	/**
	 * Custom register
	 * @since 1.0.0
	 */
    static public function customize_register( $wp_customize ) {
		require_once dirname( __FILE__ ) . '/class-jetpack-portfolio-control.php';

      	{
        /**
         * WooCommerce
         */

		$wp_customize->add_setting( 'flintotheme_jetpack_portfolio_settings', array(
			'default' => '',
			// 'transport' => 'postMessage',
		), array( 'sanitize_callback' => '__return_false' ) );

        /* WooCommerce section */
		$wp_customize->add_section('flintotheme_jetpack_portfolio_section', array(
	        'title'    => __('Portfolio', 'flintotheme'),
	        'description' => __( '', 'flintotheme' ),
	        'priority' => 29,
		));

		if(class_exists('Flintotheme_jetpack_portfolio_Control')) {
			$wp_customize->add_control( new Flintotheme_Jetpack_Portfolio_Control( $wp_customize, 'flintotheme_jetpack_portfolio_control', array(
				'section'  => 'flintotheme_jetpack_portfolio_section',
				'priority' => 10,
				'settings' => array(
					'jetpack_portfolio_settings' => 'flintotheme_jetpack_portfolio_settings',
				),
			) ) );
		}
      }
    }

  }
endif;

return new Flintotheme_Jetpack_Portfolio_Customizer();
