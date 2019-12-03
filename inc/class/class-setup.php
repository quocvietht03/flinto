<?php
/**
 * @package Flintotheme
 * @version 1.0.0
 *
 */

if(! class_exists('Flintotheme_Setup')) {

    class Flintotheme_Setup {

        /**
         * @since 1.0.0
         */
        function __construct() {

            $this->hooks();
        }

        /**
         * @since 1.0.0
         */
        public function hooks() {
            add_action('admin_menu', array($this, 'register_submenu_page_setup'));
        }

        /**
         * @since 1.0.0
         */
        public function register_submenu_page_setup() {
            list( $page_title, $menu_title, $capability, $menu_slug, $function ) = apply_filters( 'flintotheme_submenu_param_theme_setup', array(
                __('Theme Setup', 'flintotheme'),
                __('Theme Setup', 'flintotheme'),
                __('edit_theme_options', 'flintotheme'),
                __('theme___setup', 'flintotheme'),
                array( $this, 'theme_setup_callback' ),
            ) );

            add_theme_page($page_title, $menu_title, $capability, $menu_slug, $function);
        }

        /**
         * @since 1.0.0
         */
        public function theme_setup_callback() {
            ?>
            <div class="wrap">
                <h2><?php _e('Theme Setup', 'flintotheme'); ?></h2>
                <?php get_template_part( 'templates/admin/content', 'setup' ); ?>
            </div>
            <?php
        }
    }

    return new Flintotheme_Setup();
}
