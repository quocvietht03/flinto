<?php 
/**
 * Newsletter Lightbox
 */

if(! class_exists('Flintotheme_Delipress_Newsletter_Lightbox')) {
    class Flintotheme_Delipress_Newsletter_Lightbox{
        
        function __construct() {
            // Carbon_Fields exist
            if( ! class_exists( 'Carbon_Fields\Carbon_Fields' ) ) return;

            $this->hooks();
        }

        public function hooks() {
            add_action( 'carbon_fields_register_fields', array( $this, 'register_submenu_page_settings' ) );
            add_action( 'wp_footer', array( $this, 'newsletter_lightbox_html' ) );
            add_action( 'flintotheme_delipress_newsletter_lightbox_form', array($this, 'newsletter_lightbox_form_html') );
        }

        public function register_submenu_page_settings() {
            Carbon_Fields\Container::make( 'theme_options', __('Newsletter Lightbox', 'flintotheme') )
                ->set_page_parent( 'themes.php' )
                ->set_page_file( 'delipress-newsletter-lightbox' )
                ->add_tab( __('General Settings', 'flintotheme' ), array(
                        
                    Carbon_Fields\Field::make( 'html', 'dnl_general_descriptions_text' )
                        ->set_html( sprintf('<p>%s</p>', __('Newsletter general settings, edit heading text and content for lightbox newsletter.', 'flintotheme')) ),
                    
                    Carbon_Fields\Field::make( 'select', 'dnl_general_newsletter_lightbox', __('Newsletter Lightbox', 'flintotheme') )
                        ->add_options( array(
                            'disable' => __( 'Disable', 'flintotheme' ),
                            'enable' => __( 'Enable', 'flintotheme' ),
                        ) )
                        ->set_default_value( 'disable' )
                        ->set_help_text( __('On/Off Newsletter lightbox.', 'flintotheme') ),
                    
                    Carbon_Fields\Field::make( 'select', 'dnl_list_id', __('Delipress List', 'flintotheme') )
                        ->set_required(true)
                        ->add_options( flintotheme_get_delipress_list_opts( array( '' => __('- Select delipress list -', 'flintotheme') ) ) ),

                    Carbon_Fields\Field::make( 'select', 'dnl_show_by', __('Newsletter Lightbox Show By', 'flintotheme') )
                        ->add_options( array(
                            'after_how_many_seconds' => __( 'After how many seconds', 'flintotheme' ),
                            // 'scroll_down' => __( 'Scroll down', 'flintotheme' ),
                        ) )
                        ->set_default_value( 'after_how_many_seconds' )
                        ->set_width( 50 )
                        ->set_help_text( __('Select type for show newsletter lightbox.', 'flintotheme') ),
                            
                    Carbon_Fields\Field::make( 'text', 'dnl_after_seconds_to_show', __('Seconds (s)', 'flintotheme') )
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'dnl_show_by',
                                'value' => 'after_how_many_seconds',
                            )
                        ) )
                        ->set_width( 50 )
                        ->set_attribute( 'type', 'number' )
                        ->set_attribute( 'min', 1 )
                        ->set_default_value( 5 )
                        ->set_help_text( __('Enter number delay to show Newsletter Lightbox.', 'flintotheme') ),

                    Carbon_Fields\Field::make( 'text', 'dnl_after_scrolldown_to_show', __('Percen of page scroll down to show (%)', 'flintotheme') )
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'dnl_show_by',
                                'value' => 'scroll_down',
                            )
                        ) )
                        ->set_width( 50 )
                        ->set_attribute( 'type', 'number' )
                        ->set_attribute( 'min', 0 )
                        ->set_default_value( 30 )
                        ->set_help_text( __('Enter number scrolldown percen of page to show Newsletter Lightbox.', 'flintotheme') ),

                    Carbon_Fields\Field::make( 'select', 'dnl_layout', __('Select layout', 'flintotheme') )
                        ->add_options( array(
                            '' => __( 'Default — 2 Columns Form & Image', 'flintotheme' ),
                        ) )
                        ->set_default_value( '' )
                        ->set_width( 50 )
                        ->set_help_text( __('Select a layout for Newsletter lightbox.', 'flintotheme') ),

                    Carbon_Fields\Field::make( 'image', 'dnl_layout_photo', 'Photo' )
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'dnl_layout',
                                'value' => '',
                            )
                        ) )
                        ->set_width( 50 )
                        ->set_value_type( 'url' ),

                    Carbon_Fields\Field::make( 'text', 'dnl_heading_text', __('Newsletter Heading Text', 'flintotheme'))
                        ->set_default_value( __('Subscribe to our newsletters', 'flintotheme') )
                        ->set_help_text( __('Enter your heading text.', 'flintotheme') ),

                    Carbon_Fields\Field::make( 'rich_text', 'dnl_content_text', __('Newsletter Content', 'flintotheme') )
                        ->set_default_value( __('Join our newsletter to stay on top of current information and events.', 'flintotheme') )
                        ->set_help_text( __('Enter your content.', 'flintotheme') ),
                        
                    Carbon_Fields\Field::make( 'textarea', 'dnl_success_message', __('Success Message', 'flintotheme') )
                        ->set_rows( 4 )
                        ->set_width( 50 )
                        ->set_default_value( __('You Have Successfully Subscribed to the Newsletter', 'flintotheme') ),
                    
                    Carbon_Fields\Field::make( 'textarea', 'dnl_error_message', __('Error Message', 'flintotheme') )
                        ->set_rows( 4 )
                        ->set_width( 50 )
                        ->set_default_value( __('Unsuccessful, please try again another time!', 'flintotheme') ),
                ));
        }

        public function newsletter_lightbox_html() {
            $dnl_general_newsletter_lightbox = carbon_get_theme_option( 'dnl_general_newsletter_lightbox' );

            if( $dnl_general_newsletter_lightbox == 'enable' )
                get_template_part( 'templates/newsletter-lightbox/content' );
        }

        public function newsletter_lightbox_form_html($layout) {
            $dp_list_id = carbon_get_theme_option( 'dnl_list_id' );
            if(empty($dp_list_id)) return __('Please select a Delipress List ID!', 'flintotheme');

            $dnl_success_message = carbon_get_theme_option( 'dnl_success_message' );
            $dnl_error_message = carbon_get_theme_option( 'dnl_error_message' );
            ?>
            <div class="theme-extends-widget-delipress-custom-form _layout-mini">
                <div class="delipress-custom-form dnl-newsletter-lightbox-form">
                    <form class="dp-custom-form" method="POST" data-theme-extends-delipress-custom-form="">
                        <label class="email-field"><input type="email" name="dp_email" placeholder="<?php esc_attr_e( 'Your email', 'flintotheme' ) ?>" required=""></label>
                        <input type="hidden" name="dp_list_id" value="<?php echo esc_attr($dp_list_id); ?>">
                        <button type="submit" class="btn-submit"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
                    </form>
                    <div class="delipress-message-success">
                        <div class="message-entry">
                            <span class="__message-icon"><i class="fa fa-check" aria-hidden="true"></i></span>
                            <span class="__message-text"><?php echo "{$dnl_success_message}"; ?></span>
                        </div>
                    </div>
                    <div class="delipress-message-error">
                        <div class="message-entry">
                            <span class="__message-icon"><i class="fa fa-frown-o" aria-hidden="true"></i></span>
                            <span class="__message-text"><?php echo "{$dnl_error_message}"; ?></span>
                        </div>
                    </div>
                </div>
            </div>
            <?php
        }
    }

    return new Flintotheme_Delipress_Newsletter_Lightbox();
}