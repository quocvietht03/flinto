<?php
use Carbon_Fields\Widget;
use Carbon_Fields\Field;

/**
 * Delipress custom form
 *
 * @author   Bearsthemes
 * @category Widgets
 * @version  1.0.0
 * @extends  Flintotheme_Widget_Abstract
 */
class Flintotheme_Widget_Delipress_Custom_Form extends Flintotheme_Widget_Abstract {

	// Register widget function. Must have the same name as the class
    function __construct() {
        $this->setup(
            'theme_widget_delipress_custom_form',
            __('Theme Widget - Delipress Custom Form', 'flintotheme'),
            __('Displays Delipress form', 'flintotheme'),
            array(
                Field::make( 'text', 'title', __('Title', 'flintotheme') )
                    ->set_default_value( __('Newsletter sign-up', 'flintotheme') ),
                Field::make( 'select', 'dp_list_id', __('Delipress List', 'flintotheme') )
                    ->set_required(true)
                    ->add_options( flintotheme_get_delipress_list_opts( array( '' => __('- Select delipress list -', 'flintotheme') ) ) ),
                Field::make( 'image', 'dp_image_icon', __('Icon', 'flintotheme') )
                    ->set_value_type( 'url' )
                    ->set_type( array( 'image' ) ),
                Field::make( 'text', 'form_heading_text', __('Form Heading Text', 'flintotheme') )
                    ->set_default_value( __('Subcribe to our weekly newsletter', 'flintotheme') ),
                Field::make( 'rich_text', 'form_des_text', __('Form Descriptions Text', 'flintotheme') )
                    ->set_default_value( __('Amazing deals, updates & freebies in your inbox', 'flintotheme') ),
                Field::make( 'text', 'form_button_submit_text', __('Form Buttom Submit Text', 'flintotheme') )
                    ->set_default_value( __('Subscribe', 'flintotheme') ),
                Field::make( 'textarea', 'form_success_message', __('Success Message', 'flintotheme') )
                    ->set_rows( 4 )
                    ->set_default_value( __('You Have Successfully Subscribed to the Newsletter', 'flintotheme') ),
                Field::make( 'textarea', 'form_error_message', __('Error Message', 'flintotheme') )
                    ->set_rows( 4 )
                    ->set_default_value( __('Unsuccessful, please try again another time!', 'flintotheme') ),
                Field::make( 'text', 'class_custom_design', __('Classes custom design', 'flintotheme') )
                    ->set_default_value(''),
        ) );
    }

    /**
     * @since 1.0.0 
     */
    public function _template($temp = 'simple') {
        $template = array(
            'simple' => implode('', array(
                '<div class="delipress-custom-form">',
                    '<div class="_icon">',
                        '{{image_icon}}',
                    '</div>',
                    '<div class="delipress-entry">',
                        '<div class="dp-title">{{title}}</div>',
                        '<div class="dp-des">{{descriptions}}</div>',
                        '<form class="dp-custom-form" method="POST" data-theme-extends-delipress-custom-form>',
                            '<label class="email-field"><input type="email" name="dp_email" placeholder="'. esc_attr__('Your email', 'flintotheme') .'" required /></label>',
                            '<input type="hidden" name="dp_list_id" value="{{dp_list_id}}">',
                            '<button type="submit" class="btn-submit">{{button_submit_text}}</button>',
                        '</form>',
                    '</div>',
                    '<div class="delipress-message-success">',
                        '<div class="success-entry">
                            <img src="'. esc_url( get_template_directory_uri() . '/assets/images/svg-icons/checked.svg' ) .'" alt="'. esc_attr__('Subscribed success', 'flintotheme') .'">
                            <p>{{message_subscribed_success}}</p>
                        </div>',
                    '</div>',
                    '<div class="delipress-message-error">',
                        '<div class="error-entry">
                            <img src="'. esc_url( get_template_directory_uri() . '/assets/images/svg-icons/sad.svg' ) .'" alt="'. esc_attr__('Subscribed error', 'flintotheme') .'">
                            <p>{{message_subscribed_error}}</p>
                        </div>',
                    '</div>',
                '</div>',
            ))
        );

        return $template[$temp];
    }

    // Called when rendering the widget in the front-end
    function front_end( $args, $instance ) {
        echo ! empty($instance['title']) ? implode('', array($args['before_title'], $instance['title'], $args['after_title'])) : '';

        $image_icon_src = get_template_directory_uri() . '/assets/images/svg-icons/email.svg';
        if( !empty($instance['dp_image_icon']) ) {
            $image_icon_src = $instance['dp_image_icon'];
        }

        $layout = 'simple';
        $replace_variables = array(
            '{{image_icon}}' => '<img src="'. esc_url( $image_icon_src ) .'" alt="'. esc_attr__('newsletter email', 'flintotheme') .'">',
            '{{title}}' => $instance['form_heading_text'],
            '{{descriptions}}' => $instance['form_des_text'],
            '{{button_submit_text}}' => $instance['form_button_submit_text'],
            '{{message_subscribed_success}}' => $instance['form_success_message'],
            '{{dp_list_id}}' => $instance['dp_list_id'],
            '{{message_subscribed_error}}' => $instance['form_error_message'],
        );

        $custom_design_name_attr = '';
        $custom_design_selector_attr = '';
        if(! empty($instance['class_custom_design'])) {
            $_root_classes = '#page .theme-extends-widget-delipress-custom-form.' . $instance['class_custom_design'];
            $custom_design_selector = wp_json_encode( array(
                array(
                    'name' => __('Delipress custom form wrap', 'flintotheme'),
                    'selector' => $_root_classes . ' .__inner',
                ),
                array(
                    'name' => __('Delipress custom form - Icon', 'flintotheme'),
                    'selector' => $_root_classes . ' .__inner ._icon > img',
                ),
                array(
                    'name' => __('Delipress custom form - Title', 'flintotheme'),
                    'selector' => $_root_classes . ' .__inner .delipress-entry .dp-title',
                ),
                array(
                    'name' => __('Delipress custom form - Descriptions', 'flintotheme'),
                    'selector' => $_root_classes . ' .__inner .delipress-entry .dp-des',
                ),
                array(
                    'name' => __('Delipress custom form - Button', 'flintotheme'),
                    'selector' => $_root_classes . ' .__inner .delipress-entry .btn-submit',
                ),
                array(
                    'name' => __('Delipress custom form - Button (:hover)', 'flintotheme'),
                    'selector' => $_root_classes . ' .__inner .delipress-entry .btn-submit:hover',
                ),
            ) );

            $custom_design_name_attr = 'data-design-name="'. __('Delipress Custom Form', 'flintotheme') .'"';
            $custom_design_selector_attr = 'data-design-selector=\''. $custom_design_selector .'\'';
        }
        ?>
        <div 
            class="theme-extends-widget-delipress-custom-form <?php echo esc_attr($instance['class_custom_design']); ?> _layout-<?php echo esc_attr($layout); ?>"
            <?php echo apply_filters( 'flintotheme_widget_delipress_custom_form_design_name_attr', $custom_design_name_attr ); ?> 
            <?php echo apply_filters( 'flintotheme_widget_delipress_custom_form_selector_attr', $custom_design_selector_attr ); ?>>
            <div class="__inner">
                <?php echo str_replace( array_keys($replace_variables), array_values($replace_variables), $this->_template( $layout ) ); ?>
            </div>
        </div>
        <?php
    }
}
