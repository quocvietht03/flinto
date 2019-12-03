<?php 
add_filter( 'flintotheme_metabox_posttype_support_filter' , 'flintotheme_team_metabox_posttype_support' );

/**
 * Filter team archive page
 *  
 */
add_filter( 'archive_template', 'flintotheme_team_get_custom_archive_page_template', 20 ) ;

/**
 * Filter team single page
 *  
 */
add_filter( 'single_template', 'flintotheme_team_get_custom_post_type_template', 20 );
add_filter( 'flintotheme_content_end_class', 'flintotheme_team_content_end_class_func', 20 );
add_action( 'flintotheme_team_single_image_cover', 'flintotheme_team_single_image_cover_func', 20 );

add_action( 'flintotheme_team_single_post' , 'flintotheme_team_single_entry_open', 10 ); #open 
add_action( 'flintotheme_team_single_post', 'flintotheme_team_single_avatar_box_html', 22 );
add_action( 'flintotheme_team_single_post', 'flintotheme_team_single_content_html', 24 );
add_action( 'flintotheme_team_single_post' , 'flintotheme_team_single_entry_close', 60 ); #close

add_action( 'flintotheme_team_avatar_after_entry', 'flintotheme_team_qoute_box_html', 10 );
add_action( 'flintotheme_team_avatar_after_entry', 'flintotheme_team_follow_me_html', 15 );

add_action( 'flintotheme_team_after_content', 'flintotheme_team_features_section_container', 20 );
add_action( 'flintotheme_team_feature_section_type_skill_progress_bar', 'flintotheme_team_feature_section_type_skill_progress_bar_func' );
add_action( 'flintotheme_team_feature_section_type_timeline', 'flintotheme_team_feature_section_type_timeline_func' );

add_action( 'flintotheme_team_single_image_cover_inner_entry', 'flintotheme_team_infomation_inline_html', 20 );

add_action( 'flintotheme_team_before_archive_content', 'flintotheme_team_before_archive_content_open', 10 );
add_action( 'flintotheme_team_after_archive_content', 'flintotheme_team_before_archive_content_close', 10 );

add_action( 'flintotheme_team_before_archive_content', 'flintotheme_team_before_archive_content_masonry_open', 10 );
add_action( 'flintotheme_team_after_archive_content', 'flintotheme_team_before_archive_content_masonry_close', 10 );

add_action( 'flintotheme_team_archive_item_entry', 'flintotheme_team_archive_item_entry_func', 20 );

add_filter( 'flintotheme_taxonomy_list_filter', 'flintotheme_team_add_more_taxonomy_list' );