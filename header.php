<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package flintotheme
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php do_action( 'flintotheme_before_site' ); ?>

<div id="page" class="hfeed site">
	<?php do_action( 'flintotheme_before_header' ); ?>

	<header id="masthead" class="site-header" <?php do_action('flintotheme_header_attributes'); ?> role="banner">
		<div class="col-full">

			<?php
			/**
			 * Functions hooked into flintotheme_header action
			 *
			 * @hooked flintotheme_header_builder                       - 10
			 */
			do_action( 'flintotheme_header' ); ?>

		</div>
	</header><!-- #masthead -->

	<?php
	/**
	 * Functions hooked in to flintotheme_before_content
	 *
	 */
	do_action( 'flintotheme_before_content' ); ?>

	<div id="content" class="site-content" tabindex="-1">
		<div class="col-full">
			<?php
			/**
			 * Functions hooked in to flintotheme_content_top
			 *
			 * @hooked flintotheme_heading_bar_func - 10
			 */
			do_action( 'flintotheme_content_top' );
			?>
