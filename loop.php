<?php
/**
 * The loop template file.
 *
 * Included on pages like index.php, archive.php and search.php to display a loop of posts
 * Learn more: http://codex.wordpress.org/The_Loop
 *
 * @package flintotheme
 */

/**
 * Hooks
 * @see flintotheme_furygrid_blog_category_filter_bar - 18
 * @see flintotheme_furygrid_html_open - 20
 */
do_action( 'flintotheme_loop_before' );

while ( have_posts() ) : the_post();

	/**
	 * Functions hooked in to flintotheme_loop_post action.
	 *
	 * @hooked flintotheme_load_loop_post_template          - 20
	 */
	do_action( 'flintotheme_loop_post' );

endwhile;

/**
 * Functions hooked in to flintotheme_paging_nav action
 * @see flintotheme_furygrid_html_close - 20
 * @see flintotheme_paging_nav - 25
 */
do_action( 'flintotheme_loop_after' );
