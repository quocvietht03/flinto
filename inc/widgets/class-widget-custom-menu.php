<?php
use Carbon_Fields\Widget;
use Carbon_Fields\Field;

/**
 * Custom menu
 *
 * @author   Bearsthemes
 * @category Widgets
 * @version  1.0.0
 * @extends  Flintotheme_Widget_Abstract
 */
class Flintotheme_Widget_Custom_Menu extends Flintotheme_Widget_Abstract {

	// Register widget function. Must have the same name as the class
    function __construct() {
        $this->setup(
            'theme_widget_custom_menu',
            __('Theme Widget - Custom Menu', 'flintotheme'),
            __('Custom menu widget', 'flintotheme'),
            array(
                Field::make( 'text', 'title', __('Title', 'flintotheme') )->set_default_value( __('Custom Menu', 'flintotheme') ) ,
                Field::make( 'select', 'menu', __('Menu', 'flintotheme') )
                    ->add_options( 'flintotheme_widget_get_list_menu_options' )
                    ->set_default_value(''),
                Field::make( 'select', 'menu_style', __('Style', 'flintotheme') )
                    ->add_options( array(
                        'horizontal' => __('Horizontal', 'flintotheme'),
                        'vertical' => __('Vertical', 'flintotheme'),
                    ) )
                    ->set_default_value('vertical'),
                Field::make( 'text', 'class_custom_design', __('Classes custom design', 'flintotheme') )
                    ->set_default_value(''),
        ) );
    }

    // Called when rendering the widget in the front-end
    function front_end( $args, $instance ) {
        echo ! empty($instance['title']) ? implode('', array($args['before_title'], $instance['title'], $args['after_title'])) : '';
        if( empty($instance['menu']) ) return;

        $args = array(
            'menu' => $instance['menu'],
            'container_class' => 'menu widget-custom-menu',
        );

        $custom_design_name_attr = '';
        $custom_design_selector_attr = '';
        if(! empty($instance['class_custom_design'])) {
            $_root_classes = '#page .theme-extends-widget-custom-menu.' . $instance['class_custom_design'];
            $custom_design_selector = wp_json_encode( array(
                array(
                    'name' => __('Menu item - link', 'flintotheme'),
                    'selector' => $_root_classes . ' .menu ul.menu li.menu-item > a',
                ),
                array(
                    'name' => __('Menu item - link (:hover)', 'flintotheme'),
                    'selector' => $_root_classes . ' .menu ul.menu li.menu-item > a:hover',
                )
            ) );

            $custom_design_name_attr = 'data-design-name="'. __('Custom Menu', 'flintotheme') .'"';
            $custom_design_selector_attr = 'data-design-selector=\''. $custom_design_selector .'\'';
        }
        ?>
        <div 
            class="theme-extends-widget-custom-menu <?php echo esc_attr($instance['class_custom_design']); ?> _layout-default"
            <?php echo apply_filters( 'flintotheme_widget_custom_menu_design_name_attr', $custom_design_name_attr ); ?> 
            <?php echo apply_filters( 'flintotheme_widget_custom_menu_design_selector_attr', $custom_design_selector_attr ); ?>>
            <div class="menu-wrap menu-style-<?php echo esc_attr( $instance['menu_style'] ) ?>">
                <?php wp_nav_menu( $args ) ?>
            </div>
        </div>
        <?php
    }
}
