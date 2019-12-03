<?php
/**
 * The template for displaying all single posts.
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

					do_action( 'flintotheme_single_post_before' );

					do_action( 'flintotheme_single_post' );

					do_action( 'flintotheme_single_post_after' );

				endwhile; // End of the loop. ?>

				</main><!-- #main -->
			</div><!-- #primary -->

			<?php do_action( 'flintotheme_sidebar' ); ?>
		</div><!-- .row -->
	</div><!-- .container -->
</div>
<?php
get_footer();
