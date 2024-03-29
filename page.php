<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package flintotheme
 */

get_header(); ?>
<div id="main-content">
	<div class="<?php do_action('flintotheme_container_class') ?>">
		<div class="row">
			<div id="primary" class="content-area <?php do_action('flintotheme_content_class'); ?>">
				<main id="main" class="site-main" role="main">

					<?php while ( have_posts() ) : the_post();

						do_action( 'flintotheme_page_before' );

						get_template_part( 'content', 'page' );

						/**
						 * Functions hooked in to flintotheme_page_after action
						 *
						 */
						do_action( 'flintotheme_page_after' );

					endwhile; // End of the loop. ?>

				</main><!-- #main -->
			</div><!-- #primary -->

			<?php do_action( 'flintotheme_sidebar' );?>
		</div><!-- .row -->
	</div><!-- .container -->
</div>
<?php
get_footer();
