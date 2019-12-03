<?php 
/**
 * Flintotheme Jetpack portfolio class
 * 
 */

if(! class_exists('Flintotheme_Jetpack_Portfolio') ) {
    class Flintotheme_Jetpack_Portfolio {
        function __construct() {
            $this->hooks();
        }
        
        public function hooks() {
            add_action( 'wp_enqueue_scripts', array( $this, 'scripts' ), 10 );
            add_action( 'carbon_fields_register_fields', array($this, 'register_jetpack_portfolio_custom_meta_box') );
            
            Flintotheme_Jetpack_Portfolio_Add_Meta_Boxed();
        }

        public function register_jetpack_portfolio_custom_meta_box() {
            $info_project_fields = apply_filters( 'flintotheme_jetpack_portfolio_client_info_meta_fields', array(
                Carbon_Fields\Field::make( 'image', 'project_client_brand', __('Client Brand', 'flintotheme') ),
                Carbon_Fields\Field::make( 'text', 'project_client_name', __('Client Name', 'flintotheme')),
                Carbon_Fields\Field::make( 'text', 'project_client_website', __('Client Website', 'flintotheme')),
            ) );
            
            {
                $project_section_entry_complex_fields = apply_filters( 'project_section_entry_complex_fields_filter', array(
                    Carbon_Fields\Field::make( 'text', 'title', __('Title', 'flintotheme'))
                        ->set_help_text( __('Name is a section not showing on frontend.', 'flintotheme') ),
                    Carbon_Fields\Field::make( 'select', 'type', __('Section Type', 'flintotheme') )
                        ->add_options( array(
                            'single_image' => __('Single Image', 'flintotheme'),
                            'text_block' => __('Text Block', 'flintotheme'),
                            'image_gallery_grid' => __('Image Gallery Grid', 'flintotheme'),
                            'video' => __('Video', 'flintotheme'),
                        ) )
                        ->set_default_value('single_image'),
                    Carbon_Fields\Field::make( 'image', 'image', __('Image', 'flintotheme'))
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'type',
                                'value' => 'single_image',
                            )
                        ) ),
                    Carbon_Fields\Field::make( 'media_gallery', 'image_gallery' )
                        ->set_type( array( 'image' ) )
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'type',
                                'value' => 'image_gallery_grid',
                            )
                        ) ),
                    Carbon_Fields\Field::make( 'select', 'grid_columns', __('Grid Columns', 'flintotheme') )
                        ->add_options( array(
                            1 => 1,
                            2 => 2,
                            3 => 3,
                            4 => 4,
                            5 => 5,
                            6 => 6,
                        ) )
                        ->set_default_value(4)
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'type',
                                'value' => 'image_gallery_grid',
                            )
                        ) ),
                    Carbon_Fields\Field::make( 'select', 'video_type', __('Video Type', 'flintotheme') )
                        ->add_options( array(
                            'video_html5' => __('HTML5 Video', 'flintotheme'),
                            'youtube_vimeo' => __('Youtube or Vimeo', 'flintotheme'),
                        ) )
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'type',
                                'value' => 'video',
                            )
                        ) )
                        ->set_default_value('youtube_vimeo'),
                    Carbon_Fields\Field::make( 'oembed', 'video_youtube_vimeo_data', __('Video Link', 'flintotheme') )
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'type',
                                'value' => 'video',
                            ),
                            array(
                                'field' => 'video_type',
                                'value' => 'youtube_vimeo',
                            ),
                        ) )
                        ->set_default_value('https://vimeo.com/67300322'),
                    Carbon_Fields\Field::make( 'text', 'video_html5_data', __('Video Link', 'flintotheme') )
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'type',
                                'value' => 'video',
                            ),
                            array(
                                'field' => 'video_type',
                                'value' => 'video_html5',
                            ),
                        ) )
                        ->set_width(80),
                    Carbon_Fields\Field::make( 'select', 'html5_video_format', __('Video Format', 'flintotheme') )
                        ->add_options( apply_filters( 'flintotheme_jetpack_porfolio_html5_video_type', array(
                            'video/mp4' => 'mp4',
                            'video/ogg' => 'ogg',
                            'video/webm' => 'webm',
                        ) ) )
                        ->set_default_value('video/mp4')
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'type',
                                'value' => 'video',
                            ),
                            array(
                                'field' => 'video_type',
                                'value' => 'video_html5',
                            ),
                        ) )
                        ->set_width(20),
                    Carbon_Fields\Field::make( 'image', 'video_poster', __('Poster', 'flintotheme') )
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'type',
                                'value' => 'video',
                            )
                        ) )
                        ->set_value_type( 'url' ),
                    Carbon_Fields\Field::make( 'rich_text', 'text_content', __('Content', 'flintotheme'))
                        ->set_rows( 8 )        
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'type',
                                'value' => 'text_block',
                            )
                        ) ),
                    Carbon_Fields\Field::make( 'rich_text', 'caption', __('Caption', 'flintotheme'))
                        ->set_rows( 8 )    
                        ->set_conditional_logic( array(
                            array(
                                'field' => 'type',
                                'value' => array('single_image', 'video'),
                                'compare' => 'IN',
                            ),
                        ) ),
                ) );
    
                $project_Section_Entry_fields = apply_filters( 'flintotheme_jetpack_portfolio_project_section_entry_meta_fields', array(
                    Carbon_Fields\Field::make( 'complex', 'project_section_entry_complex', __('Section(s)', 'flintotheme') )
                        ->set_layout('tabbed-vertical')
                        ->add_fields( $project_section_entry_complex_fields )
                        ->set_header_template('
                            <% if (title) { %>
                                Section Name — <%- title %>
                            <% } else { %>
                                <%- $_index %>
                            <% } %>
                        ')
                ) );
            }

            Carbon_Fields\Container::make( 'post_meta', __( 'Project Start/End date', 'flintotheme' ) )
                ->where( 'post_type', '=', 'jetpack-portfolio' )
                ->set_context('side')
                ->set_priority( 'high' )
                ->add_fields( array(
                    Carbon_Fields\Field::make( 'date', 'project_start_date', __('Project Start Date', 'flintotheme') )
                        ->set_attribute( 'placeholder', __('Date of project start', 'flintotheme') ),
                    Carbon_Fields\Field::make( 'date', 'project_end_date', __('Project End Date', 'flintotheme') )
                        ->set_attribute( 'placeholder', __('Date of project end', 'flintotheme') ),
                ) );

            Carbon_Fields\Container::make( 'post_meta', __( 'Portfolio Options - Info Project', 'flintotheme' ) )
                ->where( 'post_type', '=', 'jetpack-portfolio' )
                ->add_tab( __('Client Info', 'flintotheme'), $info_project_fields )
                ->add_tab( __('Project Section Entry', 'flintotheme'), $project_Section_Entry_fields );
        }

        public function scripts() {
            global $flintotheme_version;
            wp_enqueue_style( 'flintotheme-portfolio', get_template_directory_uri() . '/assets/css/flintotheme-portfolio.bundle.css', '', $flintotheme_version );
        }
    }
}

return new Flintotheme_Jetpack_Portfolio();