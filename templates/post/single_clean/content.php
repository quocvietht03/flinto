<?php
global $post;
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('post-single-clean-template'); ?> role="contentinfo">
  <div class="post__inner layout-post">
    <?php 
      /**
       * Functions hooked in to flintotheme_single_post_top
       * @see flintotheme_single_post_header_temp - 20 
       * 
       */
      do_action( 'flintotheme_single_post_top' ); 
    ?>
    <div id="theme_extends_post_single_entry_content" class="row">
      <?php
        /**
         * Functions hooked in to flintotheme_post_single_clean_entry
         * @see flintotheme_post_single_clean_entry_content
         */
        do_action( 'flintotheme_post_single_clean_entry' );
      ?>
    </div> <!-- .row -->
    <?php
      /**
       * Functions hooked in to flintotheme_single_post_bottom action
       *
       * @hooked flintotheme_post_nav               - 10
       * @hooked flintotheme_post_related_carousel  - 12
       * @hooked flintotheme_display_comments       - 20
       */
      do_action( 'flintotheme_single_post_bottom' );
    ?>
  </div> <!-- .layout-post -->
</article>
