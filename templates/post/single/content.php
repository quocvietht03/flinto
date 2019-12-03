<?php
global $post;
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('post-single-default-template'); ?> role="contentinfo">
  <div class="post__inner layout-post">
    <?php 
    /**
     * Hooks
     * @see flintotheme_single_post_header_temp - 20 
     */
    do_action( 'flintotheme_single_post_top' ); 
    ?>
    <div id="theme_extends_post_single_entry_content" class="row">
      <?php
        $action_name = ( $post->post_type == 'post' ) ? 'flintotheme_post_single_entry' : 'flintotheme_no_post_single_entry';
        do_action( $action_name );
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
