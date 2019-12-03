<?php
add_action( 'wp_enqueue_scripts', 'flintotheme_add_custom_width_container_large', 20 );

add_filter( 'flintotheme_post_title_layout_default_before', 'flintotheme_title_sticky_post', 10, 2 );

/**
 * General
 *
 * @see  flintotheme_get_sidebar()
 */
add_action( 'flintotheme_sidebar', 'flintotheme_get_sidebar', 10 );

/**
 * Scss variables 
 */
add_filter( 'flintotheme_scss_variables', 'flintotheme_scss_variables_add_page_loading_color' );

/**
 * 
 */
add_filter( 'flintotheme_custom_style_inline', 'flintotheme_style_inline_page_loading_color' );

add_action('flintotheme_container_class', 'flintotheme_container_class_func', 10);
add_action('flintotheme_content_class', 'flintotheme_content_class_func');

/**
 * Header
 *
 * @see flintotheme_header_attributes()
 * @see flintotheme_header()
 */
add_action( 'flintotheme_header_attributes',    'flintotheme_header_attributes',    10 );
add_action( 'flintotheme_header',               'flintotheme_header_button_toggle', 5 );
add_action( 'flintotheme_header',               'flintotheme_header_builder',       10 );

add_action( 'flintotheme_before_header_builder', 'flintotheme_header_strip', 20 );

/**
 * Posts
 *
 * @see  flintotheme_load_loop_post_template()
 */
add_action( 'flintotheme_loop_post',           'flintotheme_load_loop_post_template',     20 );
add_action( 'flintotheme_loop_after',          'flintotheme_paging_nav',                  25 );

add_action( 'flintotheme_post_single_entry',    'flintotheme_post_single_entry_default',   20 );
add_action( 'flintotheme_no_post_single_entry', 'flintotheme_no_post_single_entry_default',   20 );

add_action( 'flintotheme_single_post',         'flintotheme_load_single_post_template',   10 );
add_action( 'flintotheme_post_content_before', 'flintotheme_post_thumbnail',              20 );
add_action( 'flintotheme_single_post_bottom',  'flintotheme_post_nav',                    10 );
add_action( 'flintotheme_single_post_bottom',  'flintotheme_display_comments',            20 );

/**
 * Pages
 *
 * @see  flintotheme_page_header()
 * @see  flintotheme_page_content()
 * @see  flintotheme_display_comments()
 */
add_action( 'flintotheme_page',       'flintotheme_page_header',          10 );
add_action( 'flintotheme_page',       'flintotheme_page_content',         20 );
add_action( 'flintotheme_page_after', 'flintotheme_display_comments',     10 );

/**
 * Sidebar
 *
 * @see flintotheme_sidebar_sticky_attr_func()
 */
add_action('flintotheme_sidebar_sticky_attr', 'flintotheme_sidebar_sticky_attr_func', 10);


/**
 * Content
 *
 * @see  flintotheme_heading_bar()
 */
add_action( 'flintotheme_content_top',          'flintotheme_heading_bar_func', 10 );
add_filter( 'flintotheme_heading_bar_options',  'flintotheme_heading_bar_filter_options', 10 );
add_action( 'flintotheme_after_heading_bar',    'flintotheme_breadcrumbs', 20 );

/**
 * Footer
 *
 * @see  flintotheme_footer_widgets()
 * @see  flintotheme_credit()
 */
add_action( 'flintotheme_footer', 'flintotheme_footer_builder', 10 );
add_action( 'flintotheme_footer', 'flintotheme_credit',         20 );

add_action( 'wp_footer', 'flintotheme_widget_search_form',      15 );

/**
 *
 */
add_action ( 'flintotheme_search_form_loop_result_item', 'flintotheme_search_form_loop_result_item_func', 15);
add_filter ( 'flintotheme_list_taxonomies_by_post_type', 'flintotheme_filter_list_taxonomies_by_post_type' );
add_filter ( 'flintotheme_taxonomies_by_post_type_post', 'flintotheme_list_taxonomies_by_post' );

add_action( 'flintotheme_loop_before', 'flintotheme_furygrid_blog_category_filter_bar', 18 );
add_action( 'flintotheme_loop_before', 'flintotheme_furygrid_html_open', 20 );
add_action( 'flintotheme_loop_after', 'flintotheme_furygrid_html_close', 20 );
add_filter( 'flintotheme_blog_archive_layout_grid', 'flintotheme_archive_post_grid_template', 20 );

/**
 * Metabox customize settings post type support 
 */
add_filter( 'flintotheme_metabox_posttype_support_filter', 'flintotheme_metabox_support_jetpack_posttype' );

/**
 * Metabox Settings Template
 */
add_action( 'flintotheme_metabox_customize_settings_inner_general', 'flintotheme_metabox_customize_settings_inner_general_heading_bar', 20 );
add_action( 'flintotheme_metabox_customize_settings_inner_general', 'flintotheme_metabox_customize_settings_inner_general_header', 24 );
add_action( 'flintotheme_metabox_customize_settings_inner_general', 'flintotheme_metabox_customize_settings_inner_general_footer', 28 );
add_action( 'flintotheme_metabox_customize_settings_inner_general', 'flintotheme_metabox_customize_settings_inner_general_layout', 32 );
add_action( 'flintotheme_metabox_customize_settings_inner_general', 'flintotheme_metabox_customize_settings_inner_general_sidebar', 36 );

add_action( 'flintotheme_metabox_customize_settings_after_general', 'flintotheme_metabox_customize_heading_bar_settings_panel', 20 );

/**
 * Overide footer text 
 * admin_footer_text
 */
add_filter( 'flintotheme_admin_footer_text', 'flintotheme_overide_footer_text' );

/**
 * Scroll Top 
 */
add_action( 'wp_footer', 'flintotheme_scroll_top' );

/**
 * Body class page loading 
 */
add_filter( 'body_class', 'flintotheme_add_page_loading_class' );
add_filter( 'body_class', 'flintotheme_post_single_layout_class' );

/**
 * Post grid template hooks 
 */
add_action( 'flintotheme_post_grid_item_entry', 'flintotheme_post_grid_item_thumbnail_temp', 20 );
add_action( 'flintotheme_post_grid_item_entry', 'flintotheme_post_grid_item_comment_count_temp', 20 );

add_action( 'flintotheme_post_grid_item_entry', 'flintotheme_post_grid_item_entry_wrap_open', 21 );
add_action( 'flintotheme_post_grid_item_entry', 'flintotheme_post_grid_item_cat_temp', 22 );
add_action( 'flintotheme_post_grid_item_entry', 'flintotheme_post_grid_item_title_temp', 24 );
add_action( 'flintotheme_post_grid_item_entry', 'flintotheme_post_grid_item_author_temp', 26 );
add_action( 'flintotheme_post_grid_item_entry', 'flintotheme_post_grid_item_created_temp', 28 );
add_action( 'flintotheme_post_grid_item_entry', 'flintotheme_post_grid_item_entry_wrap_close', 30 );

add_filter( 'flintotheme_blog_filter_bar_style_inline', 'flintotheme_blog_filter_bar_style_inline_html', 20, 2 );
add_filter( 'flintotheme_blog_filter_bar_style_select', 'flintotheme_blog_filter_bar_style_select_html', 20, 2 );

/**
 * Single post default 
 */
add_action( 'flintotheme_single_post_top', 'flintotheme_single_post_header_temp', 20 );
add_action( 'flintotheme_single_post_bottom', 'flintotheme_post_related_carousel', 12 );

/**
 * Related post 
 */
add_action( 'flintotheme_related_post_carousel_item', 'flintotheme_related_post_carousel_item_entry', 20, 2 );

add_filter( 'flintotheme_get_post_id', 'flintotheme_filter_post_id_is_special_page' );

add_action( 'flintotheme_loop_search', 'flintotheme_post_loop_search_temp', 20 );

add_filter( 'flintotheme_get_wp_widget_param_filter', 'flintotheme_wp_widget_param_default', 20, 2 );

add_filter( 'flintotheme_taxonomy_heading_bar_options', 'flintotheme_taxonomy_heading_bar_background_options_override', 20, 2 );

add_filter( 'flintotheme_widget_element_class_filter', 'flintotheme_widget_element_class_display_inline', 20, 2 );

add_action( 'carbon_fields_register_fields', 'flintotheme_is_blog_page_settings' );
add_filter( 'the_content', 'flintotheme_filter_the_content_is_blog_page' );

add_action( 'flintotheme_the_content_is_blog_page_layout_first-item-full', 'flintotheme_blog_layout_first_item_full', 20 );
add_action( 'flintotheme_the_content_is_blog_page_layout_featured-post-slide', 'flintotheme_blog_layout_featured_post_slide', 20 );
add_action( 'flintotheme_custom_blog_after_loop', 'flintotheme_paging_nav' );

add_filter( 'cs_sidebar_params', 'flintotheme_cs_sidebar_custom_params' );
add_filter( 'upload_mimes', 'flintotheme_mime_svg_type' );

add_filter( 'flintotheme_register_wp_widgets_filter', 'flintotheme_add_delipress_widgets' );

add_action( 'flintotheme_install_demo_one_click_before_install_plugin', 'flintotheme_install_package_one_click_active_multi_plugin_helpers' );
add_filter( 'comment_form_fields', 'flintotheme_move_comment_and_cookies_field_to_bottom' );

add_action( 'flintotheme_post_single_clean_meta_entry_top', 'flintotheme_post_single_clean_meta_entry_template', 10 );
add_action( 'flintotheme_post_single_clean_entry', 'flintotheme_post_single_clean_entry_content', 10 );

add_filter( 'flintotheme_blog_layout_furygrid_opts_filter', 'flintotheme_blog_layout_clean_custom_furygrid_opts' );

add_filter( 'flintotheme_header_strip_data_filter', 'flintotheme_header_strip_data_custom_in_page', 20 );

add_action( 'wp_footer', 'flintotheme_custom_search_template' );

add_action( 'flintotheme_custom_search_post_before_result', 'flintotheme_custom_search_before_result', 20, 2 );
add_action( 'flintotheme_custom_search_post_after_result', 'flintotheme_custom_search_after_result', 20, 2 );

add_action( 'flintotheme_custom_search_post_result_item', 'flintotheme_item_search_result_template', 20 );

add_action( 'flintotheme_content_search_item_after_meta_tags', 'flintotheme_content_search_item_after_meta_tags_post_cat', 20 );
add_action( 'flintotheme_content_search_item_after_meta_tags', 'flintotheme_content_search_item_after_meta_tags_post_tag', 22 );
