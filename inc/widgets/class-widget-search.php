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
class Flintotheme_Widget_Search extends Flintotheme_Widget_Abstract {

	// Register widget function. Must have the same name as the class
    function __construct() {
        $this->setup(
            'theme_widget_search',
            __('Theme Widget - Search', 'flintotheme'),
            __('Displays search', 'flintotheme'),
            array(
                Field::make( 'text', 'title', __('Title', 'flintotheme') )
                    ->set_default_value( __('Search', 'flintotheme') ),
                Field::make( 'select', 'layout', __( 'Layout', 'flintotheme' ) )
                    ->add_options( apply_filters( 'flintotheme_widget_search_layout_filter', array(
                        'default' => __('Default', 'flintotheme')
                    ) ) )
                    ->set_default_value( 'default' ),
                Field::make( 'text', 'class_custom_design', __('Classes custom design', 'flintotheme') )
                    ->set_default_value( '' ),
        ) );
    }

    public function _render_layout_default($instance) {
        ob_start();
		$classes = array( 'theme-widget-custom-search-container' );
		?>
		<div class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>">
            <div class="icon-entry" data-theme-extends-trigger-ajax-custom-search data-toggle="tooltip" data-placement="bottom" title="<?php echo esc_attr('Search', 'flintotheme'); ?>">
                <div class="_icon-search"><?php echo flintotheme_search_icon_svg( 'search_basic' ); ?></div>
			</div>
        </div>
		<?php
        return ob_get_clean();
    }

    // Called when rendering the widget in the front-end
    function front_end( $args, $instance ) {
        echo ! empty($instance['title']) ? implode('', array($args['before_title'], $instance['title'], $args['after_title'])) : '';
        $classes = implode( ' ', array(
            'theme-extends-widget-search',
            $instance['class_custom_design'],
            '_layout-' . $instance['layout'],
        ) );

        $custom_design_name_attr = '';
        $custom_design_selector_attr = '';
        if(! empty($instance['class_custom_design'])) {
            $_root_classes = '#page .theme-extends-widget-search.' . $instance['class_custom_design'];
            $custom_design_selector = array(
                array(
                    'name' => __('Widget search wrap', 'flintotheme'),
                    'selector' => $_root_classes
                ),
                // array(
                //     'name' => __('Widget search content', 'flintotheme'),
                //     'selector' => $_root_classes . ' .icon-entry',
                // )
            );

            if( in_array( $instance['layout'], array( 'default' ) ) ) {
                array_push( $custom_design_selector, array(
                    'name' => __( 'SVG Icon Search', 'flintotheme' ),
                    'selector' => $_root_classes . ' .icon-entry svg',
                ) );
            }

            $custom_design_name_attr = 'data-design-name="'. __('Widget Search', 'flintotheme') .'"';
            $custom_design_selector_attr = 'data-design-selector=\''. wp_json_encode( $custom_design_selector ) .'\'';
        }

        $layouts = apply_filters( 'flintotheme_widget_custom_search_layout_filter', array(
            'default' => $this->_render_layout_default( $instance ),
        ), $instance );

        $content = $layouts[$instance['layout']];
        ?>
        <div 
            class="<?php echo esc_attr( $classes ); ?>"
            <?php echo "{$custom_design_name_attr}" ?>
            <?php echo "{$custom_design_selector_attr}" ?>>
            <div class="__inner">
                <?php
                    echo "{$content}";
                ?>
            </div>
        </div>
        <?php
    }
}
