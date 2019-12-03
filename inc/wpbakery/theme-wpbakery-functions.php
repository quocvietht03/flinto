<?php
/**
 * WPBakery function
 */

if(! function_exists('flintotheme_bevc_element_custom_attr')) {
    /**
     * @since 1.0.0
     */
    function flintotheme_bevc_element_custom_attr($element_name = null, $attr = null) {
        if( empty($element_name) ) return;
        echo apply_filters( 'flintotheme_bevc_element_'. $element_name .'_attr', '', $attr, $element_name );
    }
}

if(! function_exists('flintotheme_bevc_element_filter_nav_custom_attr')) {
    /**
     * @since 1.0.0
     */
    function flintotheme_bevc_element_filter_nav_custom_attr($element_name = null, $attr = null) {
        if( empty($element_name) ) return;
        echo apply_filters( 'flintotheme_bevc_element_filter_nav_'. $element_name .'_attr', '', $attr, $element_name );
    }
}

if(! function_exists('flintotheme_bevc_element_bevc_feature_boxes_attr_designer')) {
    /**
     * @since 1.0.0
     * Element feature box designer attr - bevc
     */
    function flintotheme_bevc_element_bevc_feature_boxes_attr_designer($output, $attr, $name) {
        $root_class = '#page .bevc_custom_element.bevc_feature_boxes';
        if($attr['el_class']){
          $root_class = '#page .bevc_custom_element.bevc_feature_boxes.'.implode( '.', explode( ' ', $attr['el_class'] ) );
        }
        $design_selector = apply_filters( __FUNCTION__ . '_filter', array(
            array(
                'name' => __('Feature boxes wrap', 'flintotheme'),
                'selector' => $root_class.' .vc-custom-inner-wrap',
            ),
            array(
                'name' => __('Feature boxes title', 'flintotheme'),
                'selector' => $root_class.' .vc-custom-inner-wrap .feature-boxes-entry .heading-text',
            ),
            array(
                'name' => __('Feature boxes content', 'flintotheme'),
                'selector' => $root_class.' .vc-custom-inner-wrap .feature-boxes-entry .content-text',
            ),
        ) );

        return implode(' ', array(
            'data-design-name=\''. __('Feature Boxes', 'flintotheme') .'\'',
            'data-design-selector=\''. wp_json_encode( $design_selector ) .'\'',
        ));
    }
}

if(! function_exists('flintotheme_bevc_element_bevc_testimonial_slide2_attr_designer')) {
    /**
     * @since 1.0.0
     * Element testimonial slide2 designer attr - bevc
     */
    function flintotheme_bevc_element_bevc_testimonial_slide2_attr_designer($output, $attr, $name) {
        $design_selector = apply_filters( __FUNCTION__ . '_filter', array(
            array(
                'name' => __('Testimonial Slide 2 - Content text', 'flintotheme'),
                'selector' => '#page .bevc_custom_element.bevc_testimonial_slide2 .slick-carousel.entry-slide .item .entry-content',
            ),
            array(
                'name' => __('Testimonial Slide 2 - Name', 'flintotheme'),
                'selector' => '#page .bevc_custom_element.bevc_testimonial_slide2 .slick-carousel.entry-slide .item .name',
            ),
            array(
                'name' => __('Testimonial Slide 2 - Position', 'flintotheme'),
                'selector' => '#page .bevc_custom_element.bevc_testimonial_slide2 .slick-carousel.entry-slide .item .position',
            ),
        ) );

        return implode(' ', array(
            'data-design-name=\''. __('Testimonial Slide 2', 'flintotheme') .'\'',
            'data-design-selector=\''. wp_json_encode( $design_selector ) .'\'',
        ));
    }
}

if(! function_exists('flintotheme_bevc_element_bevc_testimonial_slide_attr_designer')) {
    /**
     * @since 1.0.0
     * Element testimonial slide designer attr - bevc
     */
    function flintotheme_bevc_element_bevc_testimonial_slide_attr_designer($output, $attr, $name) {
        $design_selector = apply_filters( __FUNCTION__ . '_filter', array(
            array(
                'name' => __('Testimonial Slide Item Wrap', 'flintotheme'),
                'selector' => '#page .bevc_custom_element.bevc_testimonial_slide  .item .__item-inner',
            ),
            array(
                'name' => __('Testimonial Slide - Name', 'flintotheme'),
                'selector' => '#page .bevc_custom_element.bevc_testimonial_slide  .item .__item-inner .name',
            ),
            array(
                'name' => __('Testimonial Slide - Position', 'flintotheme'),
                'selector' => '#page .bevc_custom_element.bevc_testimonial_slide  .item .__item-inner .position',
            ),
            array(
                'name' => __('Testimonial Slide - Content text', 'flintotheme'),
                'selector' => '#page .bevc_custom_element.bevc_testimonial_slide  .item .__item-inner .entry-content',
            ),
        ) );

        return implode(' ', array(
            'data-design-name=\''. __('Testimonial Slide', 'flintotheme') .'\'',
            'data-design-selector=\''. wp_json_encode( $design_selector ) .'\'',
        ));
    }
}

if(! function_exists('flintotheme_bevc_element_filter_nav_bevc_products_carousel_filter_attr_designer')) {
    /**
     * @since 1.0.0
     * Element products carousel filter nav designer attr - bevc
     */
    function flintotheme_bevc_element_filter_nav_bevc_products_carousel_filter_attr_designer($output, $attr, $name) {
        $design_selector = apply_filters( __FUNCTION__ . '_filter', array(
            array(
                'name' => __('Products Carousel Filter Nav Wrap', 'flintotheme'),
                'selector' => '#page .bevc_custom_element.bevc_products_carousel_filter .bevc-product-carousel-filter-wrap',
            ),
            array(
                'name' => __('Products Carousel Filter Item', 'flintotheme'),
                'selector' => '#page .bevc_custom_element.bevc_products_carousel_filter .bevc-product-carousel-filter-wrap a',
            ),
            array(
                'name' => __('Products Carousel Filter Item (:hover)', 'flintotheme'),
                'selector' => '#page .bevc_custom_element.bevc_products_carousel_filter .bevc-product-carousel-filter-wrap a:hover',
            ),
            array(
                'name' => __('Products Carousel Filter Item (:active)', 'flintotheme'),
                'selector' => '#page .bevc_custom_element.bevc_products_carousel_filter .bevc-product-carousel-filter-wrap a._fillter-current',
            ),
        ) );

        return implode(' ', array(
            'data-design-name=\''. __('Products Carousel Filter Nav', 'flintotheme') .'\'',
            'data-design-selector=\''. wp_json_encode( $design_selector ) .'\'',
        ));
    }
}

if(! function_exists('flintotheme_bevc_element_bevc_image_box_grid_item_attr_designer')) {
    /**
     * @since 1.0.0
     * Element Image box grid designer attr - bevc
     */
    function flintotheme_bevc_element_bevc_image_box_grid_item_attr_designer($output, $attr, $name) {
        $design_selector_by_layout = array(
            'default' => array(
                array(
                    'name' => __('Image Box Grid Wrap', 'flintotheme'),
                    'selector' => '#page .bevc_custom_element.bevc_image_box_grid_item.element-layout-default .vc-custom-inner-wrap',
                ),
                array(
                    'name' => __('Image Box Grid Title', 'flintotheme'),
                    'selector' => '#page .bevc_custom_element.bevc_image_box_grid_item.element-layout-default .vc-custom-inner-wrap .image-block-title',
                ),
                array(
                    'name' => __('Image Box Grid Content Text', 'flintotheme'),
                    'selector' => '#page .bevc_custom_element.bevc_image_box_grid_item.element-layout-default .vc-custom-inner-wrap .image-block-text',
                ),
            ),
            'title_floating' => array(
                array(
                    'name' => __('Image Box Grid Wrap', 'flintotheme'),
                    'selector' => '#page .bevc_custom_element.bevc_image_box_grid_item.element-layout-title_floating .vc-custom-inner-wrap',
                ),
                array(
                    'name' => __('Image Box Grid Entry Wrap', 'flintotheme'),
                    'selector' => '#page .bevc_custom_element.bevc_image_box_grid_item.element-layout-title_floating .vc-custom-inner-wrap .entry-wrap',
                ),
                array(
                    'name' => __('Image Box Grid Title', 'flintotheme'),
                    'selector' => '#page .bevc_custom_element.bevc_image_box_grid_item.element-layout-title_floating .vc-custom-inner-wrap .entry-wrap .image-block-title',
                ),
            ));

        $design_selector = apply_filters( __FUNCTION__ . '_filter_layout_' . $attr['layout'], $design_selector_by_layout[$attr['layout']] );
        return implode(' ', array(
            'data-design-name=\''. __('Image Box Grid', 'flintotheme') .'\'',
            'data-design-selector=\''. wp_json_encode( $design_selector ) .'\'',
        ));
    }
}
