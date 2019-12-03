<?php
/**
 * @since       1.0.0
 * Term Meta Main Class
 * 
 * @package     Flintotheme
 * @author      Bearsthemes
 * @version     1.0.0 
 */
if(! class_exists( 'Carbon_Fields\Carbon_Fields' ) ) return;
use Carbon_Fields\Field;
use Carbon_Fields\Container;

class Flintotheme_Term_Meta {
    
    public function __construct() {
        \Carbon_Fields\Carbon_Fields::boot();
        
        $this->inc();
        $this->hooks();
    }

    public function inc() {
        
    }

    public function hooks() {
        add_action( 'carbon_fields_register_fields', array($this, 'background_fields') );
    }

    public function background_fields() {
        Container::make( 'term_meta', __( 'Background Image Heading Bar', 'flintotheme' ) )
            ->where( 'term_taxonomy', 'IN', apply_filters( 'flintotheme_term_meta_background_fields_support_category', array('category') ) )
            ->add_fields( array(
                // background typpe
                Field::make( 'select', 'heading_bar_custom_background_type', 'Heading - Background Type' )
                    ->add_options( array(
                        '' => __('Global', 'flintotheme'),
                        'color' => __('Color', 'flintotheme'),
                        'image' => __('Image', 'flintotheme'),
                        'video' => __('Video', 'flintotheme'),
                    ) )
                    ->set_default_value( '' )
                    ->set_help_text( __('Select a type for heading bar background type.', 'flintotheme') ),
                
                // background color
                Field::make( 'color', 'heading_bar_custom_background_color', __('Heading - Background Color', 'flintotheme') )
                    ->set_conditional_logic( array(
                        'relation' => 'AND', // Optional, defaults to "AND"
                        array(
                            'field' => 'heading_bar_custom_background_type',
                            'value' => 'color', 
                            'compare' => '=',
                        )
                    ) )
                    ->set_palette( array( '#333', '#fafafa', '#6d01ff' ) )
                    ->set_alpha_enabled( true )
                    ->set_help_text( __('Select a color for override heading bar background color.', 'flintotheme') ),

                // background image
                Field::make( 'image', 'heading_bar_custom_background_image', __('Heading - Background Image', 'flintotheme') )
                    ->set_conditional_logic( array(
                        'relation' => 'AND', // Optional, defaults to "AND"
                        array(
                            'field' => 'heading_bar_custom_background_type',
                            'value' => 'image', 
                            'compare' => '=',
                        )
                    ) )
                    ->set_value_type( 'url' )
                    ->set_help_text( __('Select image for override heading bar background image.', 'flintotheme') ),
                
                // background video
                Field::make( 'text', 'heading_bar_custom_background_video', __('Heading - Background Video', 'flintotheme') )
                    ->set_conditional_logic( array(
                        'relation' => 'AND', // Optional, defaults to "AND"
                        array(
                            'field' => 'heading_bar_custom_background_type',
                            'value' => 'video', 
                            'compare' => '=',
                        )
                    ) )
                    ->set_attribute( 'placeholder', 'https://www.youtube.com/watch?v=luCYT7Qx1oA' )
                    ->set_help_text( __('Entenr a video url for override heading bar background video.', 'flintotheme') ),
                
                // background typpe
                Field::make( 'select', 'heading_bar_custom_background_overlay_color_display', 'Heading - Background Overlay' )
                    ->add_options( array(
                        '' => __('Global', 'flintotheme'),
                        'true' => __('Yes', 'flintotheme'),
                        'false' => __('No', 'flintotheme'),
                    ) )
                    ->set_default_value( '' )
                    ->set_help_text( __('On / Off background overlay.', 'flintotheme') ),
                
                // overlay background color
                Field::make( 'color', 'heading_bar_custom_background_overlay_color', __('Heading - Overlay B-Color', 'flintotheme') )
                    ->set_conditional_logic( array(
                        'relation' => 'AND', // Optional, defaults to "AND"
                        array(
                            'field' => 'heading_bar_custom_background_overlay_color_display',
                            'value' => 'true', 
                            'compare' => '=',
                        )
                    ) )
                    ->set_palette( array( 'rgba(1,1,1,.6)', 'rgba(255,255,255,.6)' ) )
                    ->set_alpha_enabled( true )
                    ->set_help_text( __('Select a color for heading bar overlay background color.', 'flintotheme') ),
            ) );
    }

}

return new Flintotheme_Term_Meta();