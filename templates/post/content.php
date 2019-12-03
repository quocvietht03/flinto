<?php 
$blog_settings = flintotheme_get_option_type_json('flintotheme_blog_settings', 'flintotheme_blog_settings_default');
ob_start();
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('post-layout-'. $blog_settings['archive']['layout'] .'-item'); ?>>
  <div class="post__inner layout-post">
    <header class="entry-header">
      <?php
        flintotheme_posted_on();
        the_title( sprintf(
          '<h2 class="alpha entry-title" data-design-name="%s" data-design-selector="%s"><a href="%s" rel="bookmark">%s',
          __('Post title', 'flintotheme'),
          implode(' ', array( '#page', 'article .post__inner.layout-post', '.entry-header', '.entry-title > a' )),
          esc_url( get_permalink() ),
          apply_filters( 'flintotheme_post_title_layout_default_before', '' )
        ), '</a></h2>' );
      ?>
    </header> <!-- .entry-header -->
    <div class="row theme-extends-selector-sticky-meta-entry">
      <div class="col-lg-2 col-md-12">
        <?php flintotheme_post_meta(); ?>
      </div>
      <div class="col-lg-10 col-md-12">
        <div class="entry-content" >
        <?php
          /**
           * Functions hooked in to flintotheme_post_content_before action.
           *
           * @hooked flintotheme_post_thumbnail - 10
           */
          do_action( 'flintotheme_post_content_before' );
        ?>
        <div
          class="content-excerpt"
          data-design-name="<?php echo esc_attr('Post content', 'flintotheme') ?>"
          data-design-selector='<?php echo esc_attr( implode(' ', array( '#page', 'article .post__inner.layout-post', '.content-excerpt' )) ); ?>'>
          <?php the_excerpt(); ?>
        </div>
        <?php
          do_action( 'flintotheme_post_content_after' );

          wp_link_pages( array(
            'before' => '<div class="page-links">' . __( 'Pages:', 'flintotheme' ),
            'after'  => '</div>',
          ) );
        ?>
        </div><!-- .entry-content -->
      </div>
    </div>
  </div> <!-- .layout-post -->
</article>
<?php 
  /**
   * Hooks
   * @see flintotheme_archive_post_grid_template - 20 
   */
  echo apply_filters( sprintf('flintotheme_blog_archive_layout_%s', $blog_settings['archive']['layout'] ), ob_get_clean() ); 
?>