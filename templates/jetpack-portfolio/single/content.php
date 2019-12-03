<?php
global $post;
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('jetpack-portfolio-single-default-template'); ?> role="contentinfo">
  <div class="post__inner layout-petpack-portfolio">
    <?php 
    /**
     * Hooks flintotheme_single_jetpack_portfolio_top
     * 
     * @see  
     */
    do_action( 'flintotheme_single_jetpack_portfolio_top' ); 
    ?>
    <div id="theme_extends_jetpack_portfolio_single_entry_content">
      <?php
        /**
         * Hooks flintotheme_jetpack_portfolio_single_entry
         * 
         * @see 
         */
        do_action( 'flintotheme_jetpack_portfolio_single_entry' );
      ?>
    </div> <!-- .row -->
    <?php
    /**
  	 * Functions hooked in to flintotheme_single_jetpack_portfolio_bottom action
  	 *
  	 * @hooked flintotheme_post_nav               - 10
  	 * @hooked flintotheme_display_comments       - 20
  	 */
  	do_action( 'flintotheme_single_jetpack_portfolio_bottom' );
    ?>
  </div> <!-- .layout-post -->
</article>
