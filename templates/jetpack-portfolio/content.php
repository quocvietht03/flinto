<?php 
$global_portfolio_settings = flintotheme_get_option_type_json('flintotheme_jetpack_portfolio_settings', 'flintotheme_jetpack_portfolio_settings_default');
ob_start();
?>
<div class="furygrid-item">
    <article id="post-<?php the_ID(); ?>" <?php post_class('portfolio-archive-layout-'. $global_portfolio_settings['archive_layout'] .'-item'); ?>>
        <div class="post__inner layout-portfolio">
            <?php 
            /**
             * Hooks flintotheme_jetpack_portfolio_archive_entry_hooks
             * 
             * @see flintotheme_jetpack_portfolio_archive_entry_content - 20
             */
            do_action('flintotheme_jetpack_portfolio_archive_entry_hooks');
            ?>
        </div> <!-- .layout-post -->
    </article>
    <?php 
        /**
         * Hooks
         * @see flintotheme_archive_post_grid_template - 20 
         */
        echo apply_filters( sprintf('flintotheme_jetpack_portfolio_archive_layout_%s', $global_portfolio_settings['archive_layout'] ), ob_get_clean() ); 
    ?>
</div>