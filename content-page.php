<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package flintotheme
 */

?>

<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php
	/**
	 * Functions hooked in to flintotheme_page add_action
	 *
	 * @hooked flintotheme_page_header          - 10
	 * @hooked flintotheme_page_content         - 20
	 */
	do_action( 'flintotheme_page' );
	?>
</div><!-- #post-## -->
