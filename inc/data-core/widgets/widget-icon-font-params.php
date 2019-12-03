<?php 
include_once get_template_directory() . '/inc/data-core/widgets/widget-base-element.php';

$params = Flintotheme_Widget_Base_Element(array(
    'groups' => array(
        /* Group General */
        array(
            'title' => __('General', 'flintotheme'),
            'name' => 'general',
            'fields' => array(
                'icon_class' => array(
                    'label' => __('Icon Class', 'flintotheme'),
                    'description' => __('Enter icon class (Ionicons, Fontawesome, Dashion).', 'flintotheme'),
                    'type' => 'input',
                    'value' => 'ion-ios-heart',
                    'placeholder' => 'Ex: ion-ios-heart',
                ),
                'tooltip' => array(
                    'label' => __('Tooltip', 'flintotheme'),
                    'description' => __('Enter tooltip text.', 'flintotheme'),
                    'type' => 'input',
                    'value' => '',
                    'placeholder' => '',
                ),
                'direct_link' => array(
                    'label' => __('Direct Link', 'flintotheme'),
                    'description' => __('Enter direct link.', 'flintotheme'),
                    'type' => 'input',
                    'value' => '#',
                    'placeholder' => 'direct link',
                ),
                'target_blank' => array(
                    'label' => __('Open on New Window', 'flintotheme'),
                    'description' => __('On/Off open direct link on new window.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'no',
                ),
                'element_inline' => array(
                    'label' => __('Inline', 'flintotheme'),
                    'description' => __('element inline.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'no',
                    'placeholder' => 'on/off element inline.',
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