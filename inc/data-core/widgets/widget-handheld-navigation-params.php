<?php 
include_once get_template_directory() . '/inc/data-core/widgets/widget-base-element.php';

$params = Flintotheme_Widget_Base_Element(array(
    'groups' => array(
        /* Group General */
        array(
            'title' => __('General', 'flintotheme'),
            'name' => 'general',
            'fields' => array(
                'custom_menu' => array(
                    'label' => __('Custom Menu', 'flintotheme'),
                    'description' => __('On/Off custom menu', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'no',
                ),
                'menu' => array(
                    'label' => __('Menu', 'flintotheme'),
                    'description' => __('Select menu.', 'flintotheme'),
                    'type' => 'select',
                    'condition' => array(
                        'custom_menu' => 'on',
                    ),
                    'options' => flintotheme_get_wordpress_menus(),
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