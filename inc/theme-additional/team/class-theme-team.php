<?php
/**
 * @since 1.0.2
 * Register custom post type team - add on jetpack portfolio
 * 
 * @version 1.0.0
 */

class Flintotheme_Team_Class {

    function __construct() {
        $theme_advanced_options = flintotheme_load_theme_advanced_options();
        if( 'no' == $theme_advanced_options['load_custom_post_type_team'] ) return;

        $this->inc();
        $this->hooks();

        if( class_exists('Jetpack') ) {
            /**
             * Check jetpack portfolio enable
             *  
             */
            if ( Jetpack::is_module_active( 'custom-content-types' ) && get_option( 'jetpack_portfolio' ) ) {
                $this->team_jetpack_portfolio_hooks();
            }
        }
    }

    public function inc() {
        require_once ( __DIR__ . '/team-functions.php' );
        require_once ( __DIR__ . '/team-template-functions.php' );
        require_once ( __DIR__ . '/team-hooks.php' );
    }

    public function hooks() {
        add_action( 'init', array( $this, 'register_custom_post_type_team' ) );
        add_action( 'carbon_fields_register_fields', array( $this, 'add_custom_meta_box' ) );
        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

        add_action( 'add_meta_boxes', array( $this, 'disable_theme_custom_meta_boxes' ), 10, 2 );
    }

    public function disable_theme_custom_meta_boxes( $post_type, $post ) {
        if( 'team' == $post_type ) {
            /**
             * Remove custom metabox options 'heading bar' & 'sidebar' 
             * 
             */
            remove_action( 'flintotheme_metabox_customize_settings_inner_general', 'flintotheme_metabox_customize_settings_inner_general_heading_bar', 20);
            remove_action( 'flintotheme_metabox_customize_settings_after_general', 'flintotheme_metabox_customize_heading_bar_settings_panel', 20);
            remove_action( 'flintotheme_metabox_customize_settings_inner_general', 'flintotheme_metabox_customize_settings_inner_general_sidebar', 36);
        }
    }

    public function team_jetpack_portfolio_hooks() {
        add_action( 'carbon_fields_register_fields', array( $this, 'flintotheme_team_jetpack_portfolio_meta_box' ) );
        add_action( 'flintotheme_jetpack_portfolio_single_after_entry_content', 'flintotheme_team_jetpack_project_team_html', 19 );

        add_action( 'flintotheme_team_before_content_inner', 'flintotheme_team_portfolio_button_switch_html' );
        add_action( 'flintotheme_team_after_content_inner', 'flintotheme_team_portfolio_post_list_html' );

        add_filter( 'flintotheme_team_single_content_classes_filter' , 'flintotheme_team_single_content_add_custom_class_switching' );
    }

    public function enqueue_scripts() {
        global $flintotheme_version;
        wp_enqueue_style( 'flintotheme-team-style', trailingslashit( get_template_directory_uri() ) . 'assets/css/flintotheme-team.bundle.css', false, $flintotheme_version );
    }

    public function register_custom_post_type_team() {
        
        $labels = apply_filters( 'flintotheme_post_type_team_labels_data' , array(
            'name'               => _x( 'Teams', 'post type general name', 'flintotheme' ),
            'singular_name'      => _x( 'Team', 'post type singular name', 'flintotheme' ),
            'menu_name'          => _x( 'Teams', 'admin menu', 'flintotheme' ),
            'name_admin_bar'     => _x( 'Team', 'add new on admin bar', 'flintotheme' ),
            'add_new'            => _x( 'Add New', 'team', 'flintotheme' ),
            'add_new_item'       => __( 'Add New Team', 'flintotheme' ),
            'new_item'           => __( 'New Team', 'flintotheme' ),
            'edit_item'          => __( 'Edit Team', 'flintotheme' ),
            'view_item'          => __( 'View Team', 'flintotheme' ),
            'all_items'          => __( 'All Teams', 'flintotheme' ),
            'search_items'       => __( 'Search Teams', 'flintotheme' ),
            'parent_item_colon'  => __( 'Parent Teams:', 'flintotheme' ),
            'not_found'          => __( 'No teams found.', 'flintotheme' ),
            'not_found_in_trash' => __( 'No teams found in Trash.', 'flintotheme' ),

            'featured_image'        => __( 'Team Cover Image', 'flintotheme' ),
            'set_featured_image'    => __( 'Set cover image', 'flintotheme' ),
            'remove_featured_image' => _x( 'Remove cover image', 'flintotheme' ),
            'use_featured_image'    => _x( 'Use as cover image', 'flintotheme' ),
        ) );
    
        $args = array(
            'labels'             => $labels,
            'description'        => __( 'Post team.', 'flintotheme' ),
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'query_var'          => true,
            'rewrite'            => array( 'slug' => 'team' ),
            'capability_type'    => 'post',
            'has_archive'        => true,
            'hierarchical'       => false,
            'menu_position'      => null,
            'menu_icon'          => 'dashicons-universal-access-alt',
            'supports'           => array( 'title', 'editor', 'author', 'thumbnail' )
        );
    
        register_post_type( 'team', $args );
    }

    public function add_custom_meta_box() {
        Carbon_Fields\Container::make( 'post_meta', __( 'Information', 'flintotheme' ) )
        ->where( 'post_type', '=', 'team' )
        ->set_context( 'side' )
        ->set_priority( 'low' )
        ->add_fields( array(
            Carbon_Fields\Field::make( 'image', 'team_avatar', __( 'Avatar', 'flintotheme' ) )
            ->set_help_text( __( 'Use square image with 500x500 size is best', 'flintotheme' ) ),

            Carbon_Fields\Field::make( 'text', 'team_main_work', __( 'Main work', 'flintotheme' ) )
            ->set_attribute( 'placeholder', __( 'Designer', 'flintotheme' ) ),
             
            Carbon_Fields\Field::make( 'text', 'team_location', __( 'Location', 'flintotheme' ) )
            ->set_attribute( 'placeholder', 'New York' ),

            Carbon_Fields\Field::make( 'text', 'team_phone_number', __( 'Phone number', 'flintotheme' ) )
            ->set_attribute( 'placeholder', '+1 (917) 8888 99' ),

            Carbon_Fields\Field::make( 'text', 'team_email', __( 'Email', 'flintotheme' ) )
            ->set_attribute( 'type', 'email' )
            ->set_attribute( 'placeholder', 'yourname@mail.com' ),
        ) );
        
        Carbon_Fields\Container::make( 'post_meta', __( 'Quote', 'flintotheme' ) )
        ->where( 'post_type', '=', 'team' )
        ->set_context( 'normal' )
        ->add_fields( array(
            Carbon_Fields\Field::make( 'rich_text', 'team_quote', __( '', 'flintotheme' ) )
        ));

        Carbon_Fields\Container::make( 'post_meta', __( 'Social Connect', 'flintotheme' ) )
        ->where( 'post_type', '=', 'team' )
        ->set_context( 'side' )
        ->set_priority( 'low' )
        ->add_fields( array(
            Carbon_Fields\Field::make( 'text', 'team_facebook_link', __( 'Facebook link', 'flintotheme' ) ),
            Carbon_Fields\Field::make( 'text', 'team_twitter_link', __( 'Twitter link', 'flintotheme' ) ),
            Carbon_Fields\Field::make( 'text', 'team_google_plus_link', __( 'Google Plus link', 'flintotheme' ) ),
        ) );

        Carbon_Fields\Container::make( 'post_meta', __( 'Features Section', 'flintotheme' ) )
        ->where( 'post_type', '=', 'team' )
        ->add_fields( array(
            Carbon_Fields\Field::make( 'complex', 'team_features_section_data' )
            ->set_layout( 'tabbed-vertical' )
            ->add_fields( array(
                Carbon_Fields\Field::make( 'select', 'team_features_section_type', __( 'Features section types', 'flintotheme' ) )
                ->add_options( apply_filters( '', array(
                    'skill_progress_bar' => __( 'Skill Progress Bar', 'flintotheme' ),
                    'timeline' => __( 'Timeline', 'flintotheme' ),
                ) ) )
                ->set_default_value( 'skill_progress_bar' ),

                Carbon_Fields\Field::make( 'text', 'section_title', __( 'Section title', 'flintotheme' ) ),
                Carbon_Fields\Field::make( 'rich_text', 'section_descriptions', __( 'Section descriptions', 'flintotheme' ) ),

                Carbon_Fields\Field::make( 'complex', 'timeline_data', __( 'Timeline data', 'flintotheme' ) )
                ->set_conditional_logic( array(
                    array(
                        'field' => 'team_features_section_type',
                        'value' => 'timeline',
                    )
                ) )
                ->set_collapsed( true )
                ->set_layout( 'tabbed-vertical' )
                ->add_fields( array(
                    Carbon_Fields\Field::make( 'text', 'time', __( 'Time', 'flintotheme' ) )
                    ->set_attribute( 'placeholder', __( 'May 2017 - Present', 'flintotheme' ) ),
                    Carbon_Fields\Field::make( 'text', 'company_name', __( 'Company name', 'flintotheme' ) )
                    ->set_attribute( 'placeholder', __( 'Envato', 'flintotheme' ) ),
                    Carbon_Fields\Field::make( 'text', 'company_location', __( 'Company location', 'flintotheme' ) )
                    ->set_attribute( 'placeholder', __( 'New York City', 'flintotheme' ) ),
                    Carbon_Fields\Field::make( 'text', 'position', __( 'Position', 'flintotheme' ) )
                    ->set_attribute( 'placeholder', __( 'UX/UI Designer', 'flintotheme' ) ),
                ) )
                ->set_header_template( '
                    <% if ( time ) { %>
                        <%- time %>
                    <% } else {  %>
                        <%- $_index %>
                    <% } %>
                ' ),

                Carbon_Fields\Field::make( 'complex', 'skill_progress_bar_data', __( 'Skill Progress Bar data', 'flintotheme' ) )
                ->set_conditional_logic( array(
                    array(
                        'field' => 'team_features_section_type',
                        'value' => 'skill_progress_bar',
                    )
                ) )
                ->set_collapsed( true )
                ->add_fields( array(
                    Carbon_Fields\Field::make( 'text', 'skill_name', __( 'Skill name', 'flintotheme' ) ),
                    Carbon_Fields\Field::make( 'text', 'skill_proficient', __( 'Proficient', 'flintotheme' ) )
                    ->set_attribute( 'type', 'number' )
                    ->set_default_value( 50 )
                    ->set_width( 50 ),
                    Carbon_Fields\Field::make( 'color', 'skill_progress_bar_color', __( 'Progress bar color', 'flintotheme' ) )
                    ->set_default_value( '#222222' )
                    ->set_palette( array( '#FF0000', '#00FF00', '#0000FF' ) )
                    ->set_width( 50 ),
                ) )
                ->set_layout( 'tabbed-vertical' )
                ->set_header_template( '
                    <% if ( skill_name ) { %>
                        <%- skill_name %>
                    <% } else {  %>
                        <%- $_index %>
                    <% } %>
                ' )
            ) )
            ->set_header_template( '
                <% if( section_title ) { %>
                    <%- section_title %>
                <% } else {  %> 
                    Section: <%- team_features_section_type %>
                <% } %>
            ' )
        ) );
    }

    public function flintotheme_team_jetpack_portfolio_meta_box() {
        Carbon_Fields\Container::make( 'post_meta', __( 'Member of the project', 'flintotheme' ) )
        ->where( 'post_type', '=', 'jetpack-portfolio' )
        ->set_context( 'side' )
        ->set_priority( 'low' )
        ->add_fields( array(
            Carbon_Fields\Field::make( 'text', 'project_member_heading_text', __( 'Heading text', 'flintotheme' ) ),
            Carbon_Fields\Field::make( 'multiselect', 'project_member_data', __( 'Select member', 'flintotheme' ) )
            ->add_options( 'flintotheme_team_get_all_item_array_options' )
        ) );
    }
}

return new Flintotheme_Team_Class();