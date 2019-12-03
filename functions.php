<?php
/**
 * Flintotheme engine room
 * @author Bearsthemes
 * @package flintotheme
 */

{
	/**
	 * Conposer
	 */
	define('Carbon_Fields\URL', get_template_directory_uri() . '/vendor/htmlburger/carbon-fields'); /* Fix Carbon_Fields URL */
	if(file_exists( get_parent_theme_file_path('vendor/autoload.php') )) require get_parent_theme_file_path('vendor/autoload.php');
	if(file_exists( get_parent_theme_file_path('inc/theme-additional/theme-fix.php') )) require get_parent_theme_file_path('inc/theme-additional/theme-fix.php');
}

/**
 * Assign the Flintotheme version to a var
 */
$flintotheme_global     = wp_get_theme( 'flintotheme' );
$flintotheme_version    = $flintotheme_global['Version'];

if ( ! isset( $content_width ) ) $content_width = 900;

$flintotheme = (object) array(
	'version'    	=> $flintotheme_version,
	'main'       	=> require get_parent_theme_file_path('inc/class-theme-init.php'),
	'customizer' 	=> require get_parent_theme_file_path('inc/customizer/class-customizer.php'),
	'widgets' 		=> require get_parent_theme_file_path('inc/widgets/class-widgets.php'),
	'metabox'		=> require get_parent_theme_file_path('inc/class/class-custom-meta-box.php'),
	'term_meta'		=> require get_parent_theme_file_path('inc/class/class-term-meta.php'),
	'conf_required'	=> require get_parent_theme_file_path('inc/configuration-required.php'),
);

/**
 * Core
 * @since 1.0.0
 */
require get_parent_theme_file_path('inc/setup-helpers.php');
require get_parent_theme_file_path('inc/class/class-customize-builder-render.php');
require get_parent_theme_file_path('inc/class/class-header-render.php');
require get_parent_theme_file_path('inc/class/class-footer-render.php');
require get_parent_theme_file_path('inc/class/class-theme-extends-walker-nav-menu.php');
require get_parent_theme_file_path('inc/theme-functions.php');
require get_parent_theme_file_path('inc/theme-hooks.php');
require get_parent_theme_file_path('inc/template-functions.php');
require get_parent_theme_file_path('customize/flintotheme-functions.php');

if ( flintotheme_is_woocommerce_activated() ) {
	/**
	 * @since 1.0.0
	 * WooCommerce
	 *
	 */
	require get_parent_theme_file_path('inc/woocommerce/theme-woocommerce-functions.php');
	require get_parent_theme_file_path('inc/woocommerce/theme-woocommerce-template-hooks.php');
	require get_parent_theme_file_path('inc/woocommerce/theme-woocommerce-template-functions.php');

	$flintotheme->woocommerce = require get_parent_theme_file_path('inc/woocommerce/class-theme-woocommerce.php');
	$flintotheme->woocommerce_customizer = require get_parent_theme_file_path('inc/woocommerce/customizer/class-woocommerce-customizer.php');
}

if ( flintotheme_is_wpbakery_activated() ) {
	/**
	 * @since 1.0.0
	 * WPBakery (Visual Composer)
	 *
	 */
	require get_parent_theme_file_path('inc/wpbakery/theme-wpbakery-functions.php');
	require get_parent_theme_file_path('inc/wpbakery/theme-wpbakery-hooks.php');
	require get_parent_theme_file_path('inc/wpbakery/theme-wpbakery-template-functions.php');

	$flintotheme->wpbakery = require get_parent_theme_file_path('inc/wpbakery/class-theme-wpbakery.php');
}

if( flintotheme_is_delipress_activated() ) {
	/**
	 * @since 1.0.0
	 * Delipress
	 *
	 */
	$flintotheme->delipress_newsletter_lightbox = require get_parent_theme_file_path('inc/class/class-delipress-newsletter-lightbox.php');
}

if( class_exists('Jetpack') ) {
	/**
	 * @since 1.0.0
	 * Check custom post type jetpack-portfolio exist
	 *  
	 */

	if ( Jetpack::is_module_active( 'custom-content-types' ) && get_option( 'jetpack_portfolio' ) ) {
		require get_parent_theme_file_path('inc/jetpack-portfolio/theme-jetpack-portfolio-functions.php');
		require get_parent_theme_file_path('inc/jetpack-portfolio/theme-jetpack-portfolio-template-hooks.php');
		require get_parent_theme_file_path('inc/jetpack-portfolio/theme-jetpack-portfolio-template-functions.php');

		$flintotheme->jetpack_portfolio = require get_parent_theme_file_path('inc/jetpack-portfolio/class-theme-jetpack-portfolio.php');
		$flintotheme->jetpack_portfolio_customizer = require get_parent_theme_file_path('inc/jetpack-portfolio/customizer/class-jetpack-portfolio-customizer.php');
	}
}

if( class_exists('Bears_Lookbook') ) {
	/**
	 * @since 1.0.0
	 *  
	 */
	
	require get_parent_theme_file_path('inc/bears-lookbook/theme-bears-lookbook-functions.php');
	require get_parent_theme_file_path('inc/bears-lookbook/theme-bears-lookbook-hooks.php');
	require get_parent_theme_file_path('inc/bears-lookbook/theme-bears-lookbook-template-functions.php');

	$flintotheme->bears_lookbook = require get_parent_theme_file_path('inc/bears-lookbook/class-theme-bears-lookbook.php');
}

{
	/**
	 * Custom post team
	 * @since 1.0.2
	 *  
	 */
	if( file_exists( get_parent_theme_file_path('inc/theme-additional/team/class-theme-team.php') ) ) {
		$flintotheme->theme_support_team = require get_parent_theme_file_path('inc/theme-additional/team/class-theme-team.php');
	}
}