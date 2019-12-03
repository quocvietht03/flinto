<?php
/**
 * Flintotheme WooCommerce hooks
 *
 * @package flintotheme
 */

remove_action( 'woocommerce_before_single_product',   'wc_print_notices',    10 );

remove_action( 'woocommerce_sidebar',             'woocommerce_get_sidebar',                  10 );

remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb',                   20 );
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper',       10 );
remove_action( 'woocommerce_after_main_content',  'woocommerce_output_content_wrapper_end',   10 );

remove_action( 'woocommerce_before_shop_loop',    'woocommerce_result_count',                 20 );
remove_action( 'woocommerce_before_shop_loop',    'woocommerce_catalog_ordering',             30 );
remove_action( 'woocommerce_after_shop_loop',     'woocommerce_pagination',                   10 );

remove_action( 'woocommerce_before_shop_loop_item_title',     'woocommerce_show_product_loop_sale_flash',    10 );

remove_action( 'woocommerce_shop_loop_item_title',     'woocommerce_template_loop_product_title',    10 );
remove_action( 'woocommerce_after_shop_loop_item_title',     'woocommerce_template_loop_rating',     5 );
remove_action( 'woocommerce_after_shop_loop_item_title',     'woocommerce_template_loop_price',      10 );

remove_action( 'woocommerce_after_shop_loop_item',     'woocommerce_template_loop_add_to_cart',      10 );


add_action( 'flintotheme_woo_after_loop_thumbnail_link',  'flintotheme_woo_custom_loop_add_to_cart_link',   10 );

add_action( 'woocommerce_before_shop_loop_item',  'flintotheme_woo_before_link_open',               5 );
add_action( 'woocommerce_after_shop_loop_item',   'flintotheme_woo_after_link_close',               6 );

add_action( 'woocommerce_before_main_content',    'flintotheme_woo_before_content',                10 );
add_action( 'woocommerce_after_main_content',     'flintotheme_woo_after_content',                 10 );

add_filter( 'woocommerce_show_page_title',        'flintotheme_woo_show_page_title', 10 );

/* woocommerce_before_shop_loop */
add_action( 'woocommerce_before_shop_loop',       'flintotheme_sorting_wrapper',               9 );
add_action( 'woocommerce_before_shop_loop',       'flintotheme_woo_filter_button_toggle_offcanvas', 10 );
add_action( 'woocommerce_before_shop_loop',       'woocommerce_result_count',            12 );
add_action( 'woocommerce_before_shop_loop',       'flintotheme_woo_archive_header_tool_open',  15 );
add_action( 'woocommerce_before_shop_loop',       'flintotheme_woo_filter_select',             16 );

add_action( 'woocommerce_before_shop_loop',       'woocommerce_catalog_ordering',        18 );
add_action( 'woocommerce_before_shop_loop',       'flintotheme_woo_archive_header_tool_close', 25 );
add_action( 'woocommerce_before_shop_loop',       'flintotheme_sorting_wrapper_close',         30 );
add_action( 'woocommerce_before_shop_loop',       'flintotheme_woo_archive_filter_tool',       31 );
add_action( 'woocommerce_before_shop_loop',       'flintotheme_woo_archive_layered_nav_filters',       32 );
add_action( 'woocommerce_before_shop_loop',       'flintotheme_product_columns_wrapper',       40 );

add_action( 'flintotheme_woo_archive_filter_tool_action', 'flintotheme_woo_load_sidebar_filter_tool_archive_shop', 20 );

add_action( 'woocommerce_after_shop_loop',              'flintotheme_paging_nav',                    20 );

add_action( 'woocommerce_after_shop_loop_item',         'flintotheme_woo_open_product_list_item_wrap_entry',     7 );
add_action( 'woocommerce_after_shop_loop_item',         'woocommerce_template_loop_product_link_open',               7 );
add_action( 'woocommerce_after_shop_loop_item',         'woocommerce_template_loop_product_title',        7 );
add_action( 'woocommerce_after_shop_loop_item',         'woocommerce_template_loop_product_link_close',               7 );

add_action( 'woocommerce_after_shop_loop_item',        'woocommerce_template_loop_rating',                      9 );
add_action( 'woocommerce_after_shop_loop_item',        'woocommerce_template_loop_price',                       8 );
add_action( 'woocommerce_after_shop_loop_item',        'flintotheme_woo_tinvwl',                                15 );
add_action( 'woocommerce_after_shop_loop_item',        'flintotheme_woo_close_product_list_item_wrap_entry',    20 );

add_filter( 'woocommerce_before_shop_loop_item_title',     'flintotheme_woo_show_product_loop_sale_flash',    10 );
add_filter( 'woocommerce_before_shop_loop_item_title',     'flintotheme_woo_show_product_loop_outstock',    10 );
add_filter( 'woocommerce_before_shop_loop_item_title',     'flintotheme_woo_show_product_loop_featured',    10 );
add_filter( 'woocommerce_before_shop_loop_item_title',     'flintotheme_woo_thumbnail_secondary', 11 );

add_filter( 'loop_shop_columns',                        'flintotheme_loop_columns' );
add_filter( 'loop_shop_per_page',                       'flintotheme_loop_shop_per_page', 20 );
add_filter ( 'woocommerce_product_thumbnails_columns',  'flintotheme_change_gallery_columns' );

add_filter('flintotheme_custom_metabox_variable_product_data', 'fintotheme_custom_metabox_customize_data', 10, 2);

/* product detain */
add_action('woocommerce_before_single_product_summary', 'flintotheme_woo_product_detail_wrap_open', 4);
add_action('woocommerce_after_single_product_summary', 'flintotheme_woo_product_detail_wrap_close', 30);

add_action('woocommerce_before_single_product_summary', 'flintotheme_woo_product_detail_summary_wrap_open', 5);
add_action('woocommerce_after_single_product_summary', 'flintotheme_woo_product_detail_summary_wrap_close', 5);

add_action('flintotheme_woo_product_before_summary_container', 'flintotheme_woo_product_before_summary_open_container', 5);
add_action('flintotheme_woo_product_before_summary_container', 'flintotheme_woo_product_before_summary_close_container', 30);

add_action('flintotheme_woo_product_before_summary_container', 'wc_print_notices',            8);
add_action('flintotheme_woo_product_before_summary_container', 'woocommerce_breadcrumb',      10);
add_action('flintotheme_woo_product_before_summary_container', 'flintotheme_woo_product_nav', 15);

add_filter( 'woocommerce_breadcrumb_defaults', 'flintotheme_woo_breadcrumbs' );

add_action('woocommerce_after_single_product_summary', 'flintotheme_woo_after_single_product_summary_wrap_open', 5);
add_action('woocommerce_after_single_product_summary', 'flintotheme_woo_after_single_product_summary_wrap_close', 30);

add_filter('woocommerce_product_tabs',                'flintotheme_woo_product_tabs');
add_filter('woocommerce_product_reviews_tab_title',   'flintotheme_woo_product_reviews_title_tabs');

add_action('flintotheme_woo_custom_attr_wc_tabs',     'flintotheme_woo_attr_designer_wc_tabs', 10);

add_filter('woocommerce_cross_sells_total', 'flintotheme_woo_cross_sells_total');

remove_action('woocommerce_cart_collaterals', 'woocommerce_cart_totals', 10);
add_action('flintotheme_woo_cart_pos_right', 'woocommerce_cart_totals', 10);
add_action('flintotheme_woo_cart_pos_right', 'flintotheme_woo_return_shopping', 15);

add_action('flintotheme_woo_custom_attr_cart_form_wrap', 'flintotheme_woo_designer_cart_form_attr', 10);
add_action('flintotheme_woo_custom_attr_cart_sidebar', 'flintotheme_woo_designer_cart_sidebar_attr', 10);

add_action('flintotheme_woo_custom_attr_customer_details', 'flintotheme_woo_designer_checkout_customer_details', 10);
add_action('flintotheme_woo_custom_attr_order_review', 'flintotheme_woo_designer_checkout_order_review', 10);

add_filter('flintotheme_search_form_loop_result_item_html', 'flintotheme_woo_search_form_loop_result_item_html', 10);

add_filter('flintotheme_header_widget', 'flintotheme_woo_header_widget', 20);
add_filter('flintotheme_header_widget_options', 'flintotheme_woo_header_widget_options', 20);

add_filter( 'woocommerce_add_to_cart_fragments', 'flintotheme_woo_cart_link_fragment' );
add_filter( 'woocommerce_add_to_cart_fragments', 'flintotheme_woo_widget_minicart_custom_fragment' );
add_filter( 'woocommerce_add_to_cart_fragments', 'flintotheme_woo_widget_wishlist_products_counter_custom_fragment' );
add_filter( 'wp_footer', 'flintotheme_woo_shopping_mini_cart' );

add_action( 'flintotheme_widget_mini_cart_entry', 'flintotheme_widget_mini_cart_template', 20);

/**
 * Cart widget
 */
remove_action( 'woocommerce_widget_shopping_cart_buttons', 'woocommerce_widget_shopping_cart_proceed_to_checkout', 20 );
remove_action( 'woocommerce_widget_shopping_cart_buttons', 'woocommerce_widget_shopping_cart_button_view_cart', 10 );

add_action( 'woocommerce_widget_shopping_cart_buttons', 'woocommerce_widget_shopping_cart_proceed_to_checkout', 10 );
add_action( 'woocommerce_widget_shopping_cart_buttons', 'woocommerce_widget_shopping_cart_button_view_cart', 20 );

add_filter( 'flintotheme_taxonomies_by_post_type_product', 'flintotheme_woo_list_taxonomies_by_product' );
add_filter( 'flintotheme_taxonomy_list_filter', 'flintotheme_woo_add_shoppage_for_taxonomy' );
add_filter( 'flintotheme_taxonomy_name_filter', 'flintotheme_woo_taxonomy_name_is_shoppage' );

/**
 * Shop page heading title
 */
add_filter( 'flintotheme_heading_title_filter', 'flintotheme_woo_heading_title_shop_page', 20 );

add_filter( 'woocommerce_related_products', 'flintotheme_woo_related_products', 20, 3 );
add_filter( 'woocommerce_output_related_products_args', 'flintotheme_woo_related_products_args' );

/**
 * Add scrollreveal
 */
add_filter( 'flintotheme_custom_script_inline', 'flintotheme_woo_add_script_scrollreveal' );

add_filter( 'flintotheme_get_post_id', 'flintotheme_woo_shop_page_id' );
add_filter( 'flintotheme_sidebar_is_archive_page_filter', 'flintotheme_woo_sidebar_archive_page_false' );

remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10 );
add_action( 'woocommerce_single_product_summary', 'woocommerce_show_product_sale_flash', 6 );
add_action( 'woocommerce_single_product_summary', 'flintotheme_woo_breakline_sale_flash', 6 );

add_action( 'woocommerce_single_product_summary', 'flintotheme_woo_single_product_summary_wrap_open', 4 );
add_action( 'woocommerce_single_product_summary', 'flintotheme_woo_single_product_summary_wrap_close', 70 );

add_filter( 'body_class', 'flintotheme_woo_single_product_add_custom_layout_classes' );
add_filter( 'body_class', 'flintotheme_woo_shop_add_custom_layout_classes' );

add_action( 'wp_head', 'flintotheme_woo_single_product_custom_hook_by_layout' );

add_filter( 'flintotheme_custom_metabox_variable_product_data', 'flintotheme_woo_metabox_product_default_data', 20, 2 );

add_filter( 'flintotheme_term_meta_background_fields_support_category', 'flintotheme_woo_term_meta_background_fields_support_category_product_cat' );

add_filter( 'flintotheme_woo_product_main_gallery_items_before', 'flintotheme_woo_product_main_gallery_button_trigger_open_fullscreen' );
add_filter( 'flintotheme_woo_product_main_gallery_items_before', 'flintotheme_woo_product_button_trigger_open_video' );
add_filter( 'flintotheme_woo_product_main_gallery_one_col_before', 'flintotheme_woo_product_button_trigger_open_video' );

add_action( 'carbon_fields_register_fields', 'flintotheme_woo_product_meta_field_video' );

add_filter( 'flintotheme_register_wp_widgets_filter', 'flintotheme_woo_widgets_include' );
add_filter( 'comment_form_fields', 'flintotheme_woo_move_comment_and_rating_field_to_top' );
add_filter( 'flintotheme_woo_product_detail_summary_wrap_open_classes_inner_filter', 'flintotheme_woo_single_product_gallery_custom_layout' );

add_filter( 'bevc_Products_Listing_templates', 'flintotheme_bevc_Products_Listing_templates_layout_default', 20, 2 );

add_action( 'wp_footer', 'flintotheme_woo_shopping_content_cart_offcanvas' );

add_filter( 'flintotheme_item_search_result_template_filter', 'flintotheme_item_search_result_product_template' );

add_filter( 'flintotheme_register_wp_widgets_filter', 'flintotheme_ti_woocommerce_wishlist_counter_widget', 30 );

$woo_settings = flintotheme_get_option_type_json('flintotheme_woocommerce_settings', 'flintotheme_woo_settings_default');
$shop_layout = $woo_settings['shop_layout'];
if( $shop_layout == 'icons-hover-horizontal' || $shop_layout == 'icons-hover' ){
  remove_action( 'woocommerce_after_shop_loop_item', 'flintotheme_woo_tinvwl', 15 );
  add_action( 'flintotheme_woo_after_loop_thumbnail_link', 'flintotheme_woo_tinvwl', 25 );
}

add_filter( 'flintotheme_content_end_class' , 'flintotheme_woo_custom_main_columns_on_page_cart_checkout' );
add_filter( 'flintotheme_show_sidebar_filter' , 'flintotheme_woo_remove_sidebar_on_page_cart_checkout' );

add_filter( 'flintotheme_sidebar_args', 'flintotheme_woo_register_shop_sidebar' );
add_filter( 'woocommerce_layered_nav_count', 'flintotheme_woo_custom_layered_nav_count', 20, 3 );

add_action( 'carbon_fields_register_fields', 'flintotheme_woo_add_custom_meta_field_icon_for_product_cat', 0 );

add_filter( 'flintotheme_list_product_cats', 'flintotheme_woo_add_icon_nav_cat', 20, 3 );
add_filter( 'flintotheme_control_sidebar_class_filter', 'flintotheme_woo_custom_sidebar_class_shop_archive_page' );

add_filter( 'post_class', 'flintotheme_woo_post_class_custom', 20, 3 );
add_filter( 'product_cat_class', 'flintotheme_woo_post_class_custom', 20, 3 );
// 'related', 'up-sells', 'cross-sells'
add_filter( 'flintotheme_woo_post_class_custom_in_loop', 'flintotheme_woo_post_class_custom_in_loop_related_upsells', 20, 2 );
add_filter( 'flintotheme_woo_post_class_custom_in_loop', 'flintotheme_woo_post_class_custom_in_loop_crosssells', 22, 2 );
add_filter( 'flintotheme_paging_nav_html', 'flintotheme_woo_shop_archive_loadmore_ajax_infinite_scroll' );
add_filter( 'woocommerce_subcategory_count_html', 'flintotheme_woo_custom_subcategory_count_html', 20, 2 );
add_filter( 'flintotheme_woo_custom_classes_loop_start', 'flintotheme_woo_custom_classes_shop_archive_loop_start', 20 );

add_action( 'flintotheme_woo_product_tabs', 'flintotheme_woo_product_tabs_default', 20 );