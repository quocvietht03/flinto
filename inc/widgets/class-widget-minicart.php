<?php
use Carbon_Fields\Widget;
use Carbon_Fields\Field;

/**
 * Product search
 *
 * @author   Bearsthemes
 * @category Widgets
 * @version  1.0.0
 * @extends  Flintotheme_Widget_Abstract
 */
class Flintotheme_Widget_Mini_Cart extends Flintotheme_Widget_Abstract {

	// Register widget function. Must have the same name as the class
    function __construct() {
        $this->setup(
            'theme_widget_mini_cart',
            __('Theme Widget - Mini Cart', 'flintotheme'),
            __('Displays a mini cart', 'flintotheme'),
            array(
                Field::make( 'text', 'title', __('Title', 'flintotheme') )
                    ->set_default_value( __('My Cart', 'flintotheme') ),
                Field::make( 'select', 'layout', __( 'Layout', 'flintotheme' ) )
                    ->add_options( flintotheme_widget_mini_cart_layout_options() )
                    ->set_default_value( 'default' ),
                Field::make( 'text', 'class_custom_design', __('Classes custom design', 'flintotheme') )
                    ->set_default_value( '' ),
        ) );
    }

    // Called when rendering the widget in the front-end
    function front_end( $args, $instance ) {
        echo ! empty($instance['title']) ? implode('', array($args['before_title'], $instance['title'], $args['after_title'])) : '';
        $classes = implode( ' ', array(
            'theme-extends-widget-mini-cart',
            $instance['class_custom_design'],
            '_layout-' . $instance['layout'],
        ) );

        $custom_design_name_attr = '';
        $custom_design_selector_attr = '';
        if(! empty($instance['class_custom_design'])) {
            $_root_classes = '#page .theme-extends-widget-mini-cart.' . $instance['class_custom_design'];
            $custom_design_selector = array(
                array(
                    'name' => __('Mini cart wrap', 'flintotheme'),
                    'selector' => $_root_classes
                ),
                array(
                    'name' => __('Mini cart content', 'flintotheme'),
                    'selector' => $_root_classes . ' .icon-entry',
                )
            );

            if( in_array( $instance['layout'], array( 'default', 'bag_only_icon', 'cart_only_icon' ) ) ) {
                array_push( $custom_design_selector, array(
                    'name' => __( 'SVG Icon Cart', 'flintotheme' ),
                    'selector' => $_root_classes . ' .icon-entry svg',
                ) );
            }

            $custom_design_name_attr = 'data-design-name="'. __('Mini Cart', 'flintotheme') .'"';
            $custom_design_selector_attr = 'data-design-selector=\''. wp_json_encode( $custom_design_selector ) .'\'';
        }

        $cart_entry_html = call_user_func( 'flintotheme_woo_widget_minicart_layout_' . $instance['layout'] );
        ?>
        <div 
            class="<?php echo esc_attr( $classes ); ?>"
            <?php echo "{$custom_design_name_attr}" ?>
            <?php echo "{$custom_design_selector_attr}" ?>>
            <div class="__inner">
                <?php
                    echo apply_filters( 'flintotheme_widget_mini_cart_html_inner_output', $cart_entry_html, $instance );
                ?>
            </div>
        </div>
        <?php
    }
}
