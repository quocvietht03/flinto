<?php 
include_once get_template_directory() . '/inc/data-core/widgets/widget-base-element.php';

$params = Flintotheme_Widget_Base_Element(array(
    'groups' => array(
        /* Group General */
        array(
            'title' => __('General', 'flintotheme'),
            'name' => 'general',
            'fields' => array(
                'facebook' => array(
                    'label' => __('Facebook', 'flintotheme'),
                    'description' => __('Enable Facebook.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'on',
                    'placeholder' => 'on/off icon Facebook.',
                ),
                'facebook_url' => array(
                    'label' => false,
                    'type' => 'input',
                    'placeholder' => 'Enter Facebook page url.',
                    'value' => 'https://www.facebook.com/',
                    'condition' => array(
                    'facebook' => 'on',
                    ),
                ),
                'google' => array(
                    'label' => __('Google', 'flintotheme'),
                    'description' => __('Enable Google.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'on',
                    'placeholder' => 'on/off icon Google.',
                ),
                'google_url' => array(
                    'label' => false,
                    'type' => 'input',
                    'placeholder' => 'Enter Google page url.',
                    'value' => 'https://plus.google.com/',
                    'condition' => array(
                    'google' => 'on',
                    ),
                ),
                'twitter' => array(
                    'label' => __('Twitter', 'flintotheme'),
                    'description' => __('Enable Twitter.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'on',
                    'placeholder' => 'on/off icon Twitter.',
                ),
                'twitter_url' => array(
                    'label' => false,
                    'type' => 'input',
                    'placeholder' => 'Enter Twitter page url.',
                    'value' => 'https://twitter.com/',
                    'condition' => array(
                    'twitter' => 'on',
                    ),
                ),
                'instagram' => array(
                    'label' => __('Instagram', 'flintotheme'),
                    'description' => __('Enable Instagram.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'off',
                    'placeholder' => 'on/off icon Instagram.',
                ),
                'instagram_url' => array(
                    'label' => false,
                    'type' => 'input',
                    'placeholder' => 'Enter Instagram page url.',
                    // 'value' => 'https://www.instagram.com/',
                    'condition' => array(
                    'instagram' => 'on',
                    ),
                ),
                'pinterest' => array(
                    'label' => __('Pinterest', 'flintotheme'),
                    'description' => __('Enable Pinterest.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'off',
                    'placeholder' => 'on/off icon Pinterest.',
                ),
                'pinterest_url' => array(
                    'label' => false,
                    'type' => 'input',
                    'placeholder' => 'Enter Pinterest page url.',
                    'condition' => array(
                    'pinterest' => 'on',
                    ),
                ),
                'youtube' => array(
                    'label' => __('Youtube', 'flintotheme'),
                    'description' => __('Enable Youtube.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'off',
                    'placeholder' => 'on/off icon Youtube.',
                ),
                'youtube_url' => array(
                    'label' => false,
                    'type' => 'input',
                    'placeholder' => 'Enter Youtube page url.',
                    'condition' => array(
                    'youtube' => 'on',
                    ),
                ),
                'vimeo' => array(
                    'label' => __('Vimeo', 'flintotheme'),
                    'description' => __('Enable Vimeo.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'off',
                    'placeholder' => 'on/off icon Vimeo.',
                ),
                'vimeo_url' => array(
                    'label' => false,
                    'type' => 'input',
                    'placeholder' => 'Enter Vimeo page url.',
                    'condition' => array(
                    'vimeo' => 'on',
                    ),
                ),
                'dribbble' => array(
                    'label' => __('Dribbble', 'flintotheme'),
                    'description' => __('Enable Dribbble.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'off',
                    'placeholder' => 'on/off icon Dribbble.',
                ),
                'dribbble_url' => array(
                    'label' => false,
                    'type' => 'input',
                    'placeholder' => 'Enter Dribbble page url.',
                    'condition' => array(
                    'dribbble' => 'on',
                    ),
                ),
                'behance' => array(
                    'label' => __('Behance', 'flintotheme'),
                    'description' => __('Enable Behance.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'off',
                    'placeholder' => 'on/off icon Behance.',
                ),
                'behance_url' => array(
                    'label' => false,
                    'type' => 'input',
                    'placeholder' => 'Enter Behance page url.',
                    'condition' => array(
                    'behance' => 'on',
                    ),
                ),
                'id' => array(
                    'label' => __('ID', 'flintotheme'),
                    'description' => __('Enter ID for element.', 'flintotheme'),
                    'type' => 'input',
                    'value' => '',
                    'placeholder' => '',
                ),
                'extra_class' => array(
                    'label' => __('Extra Class', 'flintotheme'),
                    'description' => __('Enter custom class for element.', 'flintotheme'),
                    'type' => 'input',
                    'value' => '',
                    'placeholder' => '',
                ),
            ),
        ),
    ),
), array( 'Style' ));

return $params;