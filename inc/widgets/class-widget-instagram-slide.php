<?php
use Carbon_Fields\Widget;
use Carbon_Fields\Field;

/**
 * Images Slide
 *
 * @author   Bearsthemes
 * @category Widgets
 * @version  1.0.0
 * @extends  Flintotheme_Widget_Abstract
 */
class Flintotheme_Widget_Instagram_Slide extends Flintotheme_Widget_Abstract {

	// Register widget function. Must have the same name as the class
    function __construct() {
        $this->setup(
            'theme_widget_instagram_slide',
            __('Theme Widget - Instagram Slide', 'flintotheme'),
            __('Displays instagram slide', 'flintotheme'),
            array(
                Field::make( 'text', 'title', __('Title', 'flintotheme') )->set_default_value( __('Instagram Slide', 'flintotheme') ) ,
                Field::make( 'text', 'username', __('Username', 'flintotheme') )
                    ->set_default_value( __('', 'flintotheme') )
                    ->set_help_text( __('Input username for instagram feed', 'flintotheme') )
                    ->set_required( true ) ,
                Field::make( 'text', 'columns_gap', __('Columns gap', 'flintotheme') )->set_default_value( 0 ) ,
                Field::make( 'text', 'number_item_show', __('Items Show', 'flintotheme') )
                    ->set_attribute( 'type', 'number' )
                    ->set_attribute( 'min', 2 )
                    ->set_attribute( 'max', 16 )
                    ->set_default_value( 8 )
                    ->set_help_text( __('Input number item for display.', 'flintotheme') ),
                Field::make( 'checkbox', 'slide_auto_play', __('Slide auto play', 'flintotheme') ),
                Field::make( 'text', 'columns', __('Columns', 'flintotheme') )
                    ->set_attribute( 'type', 'number' )
                    ->set_attribute( 'min', 1 )
                    ->set_attribute( 'max', 6 )
                    ->set_default_value( 1 )
                    ->set_help_text( __('Input number columns for slide.', 'flintotheme') ),
                Field::make( 'text', 'columns_on_tablet', __('Columns on Tablet', 'flintotheme') )
                    ->set_attribute( 'type', 'number' )
                    ->set_attribute( 'min', 1 )
                    ->set_attribute( 'max', 6 )
                    ->set_default_value( 1 )
                    ->set_help_text( __('Input number columns on tablet for slide.', 'flintotheme') ),
                Field::make( 'text', 'columns_on_mobile', __('Columns on Mobile', 'flintotheme') )
                    ->set_attribute( 'type', 'number' )
                    ->set_attribute( 'min', 1 )
                    ->set_attribute( 'max', 6 )
                    ->set_default_value( 1 )
                    ->set_help_text( __('Input number columns on mobile for slide.', 'flintotheme') ),
        ) );
    }

    public function instagram_folder_cache_manager() {
        $uploads = wp_upload_dir();
        $upload_path = $uploads['basedir'];
        $cache_folder =  $upload_path . '/instagram-cache/folder';

        if( ! is_dir($cache_folder) ) wp_mkdir_p($cache_folder);
        return $cache_folder;
    }

    public function get_instagram_feed($username = '') {
        $cache = new Instagram\Storage\CacheManager( $this->instagram_folder_cache_manager() );
        $api   = new Instagram\Api($cache);

        $instagram_server_status = flintotheme_get_server_status('https://www.instagram.com/', 80);
        if( 200 != $instagram_server_status ) return array();

        $api->setUserName($username);
        return $api->getFeed();
    }

    // Called when rendering the widget in the front-end
    function front_end( $args, $instance ) {
        echo ! empty($instance['title']) ? implode('', array($args['before_title'], $instance['title'], $args['after_title'])) : '';
        if( empty( $instance['username'] ) ) return;

        $feed = $this->get_instagram_feed($instance['username']);
        $medias = $feed->medias;
        // echo '<pre>'; print_r($medias); echo '</pre>';

        if( empty($medias) || count($medias) <= 0 ) return;
        $placeholder_image = get_template_directory_uri() . '/assets/images/core/placeholder-image.jpg';
        $number_item_show = (int) $instance['number_item_show'];

        $layout = 'default';
        $template = array(
            'default' => implode('', array(
                '<div class="swiper-slide ins-item">',
                    '<div class="__inner">',
                        '<a href="{{ins_item_link}}" target="_blank" data-background-image-lazyload-onload="{{ins_item_image}}" data-hidden-el-onload-success="> img">',
                            '<img src="{{placeholder_image}}" alt="'. esc_attr( 'image', 'flintotheme' ) .'">',
                            '<div class="ins-extra-meta">',
                                '<div class="ins-likes"><span class="ion-ios-heart"></span> {{ins_likes}}</div>',
                                '<div class="ins-comment"><span class="ion-chatbubble"></span> {{ins_comments}}</div>',
                            '</div>',
                        '</a>',
                    '</div>',
                '</div>',
            ))
        );

        $widget_slide_opts = array(
            'slidesPerView' => (int) $instance['columns'],
            'spaceBetween' => (int) $instance['columns_gap'],
            'loop' => true,
            'breakpoints' => array(
                968 => array( 'slidesPerView' => (int) $instance['columns_on_tablet'] ),
                640 => array( 'slidesPerView' => (int) $instance['columns_on_mobile'] ),
                320 => array( 'slidesPerView' => 1 )
            ),
        );

        if( $instance['slide_auto_play'] == true ) {
            $widget_slide_opts['autoplay'] = array(
                'delay' => 2500
            );
        }

        $widget_slide_opts = wp_json_encode( $widget_slide_opts );
        ?>
        <div class="theme-extends-widget-instagram-slide _layout-<?php echo esc_attr($layout); ?>">
            <div class="swiper-container" data-themeextends-swiper='<?php echo esc_attr($widget_slide_opts); ?>'>
                <div class="swiper-wrapper">
                    <?php
                    $count = 1;
                    foreach($medias as $m) {
                        $replace_variables = array(
                            '{{ins_item_link}}' => $m->link,
                            '{{ins_item_image}}' => $m->thumbnailSrc,
                            '{{ins_comments}}' => (int) $m->comments,
                            '{{ins_likes}}' => (int) $m->likes,
                            '{{placeholder_image}}' => $placeholder_image,
                        );

                        echo str_replace( array_keys($replace_variables), array_values($replace_variables), $template['default'] );

                        $count += 1;
                        if($count > $number_item_show) break;
                    }
                    ?>
                </div>
                <!-- Add Pagination -->
                <!-- <div class="swiper-pagination"></div> -->
            </div>
        </div>
        <?php
    }
}
