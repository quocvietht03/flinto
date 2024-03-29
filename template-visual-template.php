<?php
/**
 * The template for displaying visual template pages.
 *
 * Template Name: Visual Template
 *
 * @package flintotheme
 */

get_header(); ?>
<div id="main-content">
	<div class="<?php do_action('flintotheme_container_class') ?>">
		<div id="primary" class="content-area">
			<main id="main" class="site-main" role="main">

				<?php while ( have_posts() ) : the_post();
					the_content();
				endwhile; // End of the loop. ?>

			</main><!-- #main -->
		</div><!-- #primary -->
	</div>
</div>
<?php
get_footer();
