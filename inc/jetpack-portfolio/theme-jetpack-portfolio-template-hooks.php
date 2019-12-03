<?php
/**
 * @package Flintotheme 
 * Jetpack Portfolio hooks
 * 
 */

add_filter( 'flintotheme_scheme_container_class', 'flintotheme_scheme_container_class_custom_jetpack_porfolio_archive' );
add_filter( 'flintotheme_scheme_container_class', 'flintotheme_scheme_container_class_custom_jetpack_porfolio_single' );

add_filter( 'flintotheme_blog_archive_layout_path_filter', 'flintotheme_portfolio_archive_layout_path_filter' );
add_filter( 'flintotheme_blog_single_layout_path_filter', 'flintotheme_portfolio_single_layout_path_filter' );

add_action( 'flintotheme_loop_before', 'flintotheme_jetpack_portfolio_archive_add_furygrid_open' );
add_action( 'flintotheme_loop_after', 'flintotheme_jetpack_portfolio_archive_add_furygrid_close' );
add_action( 'flintotheme_jetpack_portfolio_archive_entry_hooks', 'flintotheme_jetpack_portfolio_archive_entry_content', 20 );
add_action( 'flintotheme_jetpack_portfolio_archive_entry_content_thumbnail_after', 'flintotheme_post_added_likes_button', 20 );

add_action( 'pre_get_posts', 'flintotheme_jetpack_portfolio_custom_posts_per_page', 30 );

add_filter( 'flintotheme_heading_bar_display_data', 'flintotheme_jetpack_portfolio_single_heading_bar_disable' );
add_action( 'flintotheme_single_jetpack_portfolio_bottom', 'flintotheme_post_nav', 10 );
add_action( 'flintotheme_single_jetpack_portfolio_bottom', 'flintotheme_display_comments', 20 );

add_action( 'flintotheme_jetpack_portfolio_single_entry', 'flintotheme_jetpack_portfolio_single_entry_content' );
add_action( 'flintotheme_jetpack_portfolio_single_entry', 'flintotheme_jetpack_portfolio_single_entry_section' );

add_action( 'flintotheme_jetpack_portfolio_info_item', 'flintotheme_jetpack_portfolio_info_item_client', 10 );
add_action( 'flintotheme_jetpack_portfolio_info_item', 'flintotheme_jetpack_portfolio_info_date_work', 15 );
add_action( 'flintotheme_jetpack_portfolio_info_item', 'flintotheme_jetpack_portfolio_info_tags', 18 );
add_action( 'flintotheme_jetpack_portfolio_single_after_entry_content', 'flintotheme_post_added_likes_button', 20 );
add_filter( 'flintotheme_display_comment_filter', 'flintotheme_jetpack_portfolio_single_display_comment' );
add_filter( 'flintotheme_custom_metabox_variable_jetpack-portfolio_data', 'flintotheme_jetpack_portfolio_custom_metabox_data', 20, 2 );