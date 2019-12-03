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

if ( ! class_exists( 'Flintotheme_WooCommerce_Customizer' ) ) :
  class Flintotheme_WooCommerce_Customizer {

    /**
	 * Setup class.
	 *
	 * @since 1.0.0
	 */
    function __construct() {
		add_action( 'customize_register',              array( $this, 'customize_register' ), 11 );
		add_filter( 'flintotheme_setting_default_values',    array( $this, 'woocommerce_default_settings' ), 11 );
		add_filter( 'flintotheme_theme_customize_object_localize_script',    array( $this, 'woocommerce_customize_object_localize_script' ), 11 );
	}

	/**
	 * Woo get settings
	 * @since 1.0.0
	 */
	static public function get_settings() {
		return flintotheme_get_option_type_json('flintotheme_woocommerce_settings', 'flintotheme_woo_settings_default');
	}

	/**
	 * Woo filter return default setting
	 * @since 1.0.0
	 */
	static public function woocommerce_default_settings($data) {
		// $flintotheme_woocommerce_settings = flintotheme_woo_settings_default();
		$data['flintotheme_woocommerce_settings'] = wp_json_encode(flintotheme_woo_settings_default());
		return $data;
	}

	/**
	 * Woo return object localize scrip
	 * @since 1.0.0
	 */
	static public function woocommerce_customize_object_localize_script($data) {
		$flintotheme_woocommerce_settings = Flintotheme_WooCommerce_Customizer::get_settings();
		$data['flintotheme_woocommerce_settings'] = $flintotheme_woocommerce_settings;

		return $data;
	}

	/**
	 * Custom register
	 * @since 1.0.0
	 */
    static public function customize_register( $wp_customize ) {
		require_once dirname( __FILE__ ) . '/class-woocommerce-control.php';

      	{
        /**
         * WooCommerce
         */

		$wp_customize->add_setting( 'flintotheme_woocommerce_settings', array(
			'default' => '',
			// 'transport' => 'postMessage',
		), array( 'sanitize_callback' => '__return_false' ) );

        /* WooCommerce section */
		$wp_customize->add_section('flintotheme_woocommerce_shop_section', array(
	        'title'    => __('🛒 WooCommerce', 'flintotheme'),
	        'description' => __( '', 'flintotheme' ),
	        'priority' => 28,
		));

		if(class_exists('Flintotheme_WooCommerce_Control')) {
			$wp_customize->add_control( new Flintotheme_WooCommerce_Control( $wp_customize, 'flintotheme_woocommerce_control', array(
				'section'  => 'flintotheme_woocommerce_shop_section',
				'priority' => 10,
				'settings' => array(
					'woocommerce_settings' => 'flintotheme_woocommerce_settings',
				),
			) ) );
		}
      }
    }

  }
endif;

return new Flintotheme_WooCommerce_Customizer();
