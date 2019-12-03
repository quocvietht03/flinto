<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package flintotheme
 */

?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php do_action( 'flintotheme_before_footer' ); ?>

	<footer id="colophon" class="site-footer" role="contentinfo" data-design-name="<?php esc_attr_e('Footer', 'flintotheme'); ?>" data-design-selector="#page .site-footer">
		<div class="col-full">
			<?php
			/**
			 * Functions hooked in to flintotheme_footer action
			 *
			 * @hooked flintotheme_footer_builder - 10
			 * @hooked flintotheme_credit         - 20
			 */
			do_action( 'flintotheme_footer' ); ?>
		</div><!-- .col-full -->
	</footer><!-- #colophon -->

	<?php do_action( 'flintotheme_after_footer' ); ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
