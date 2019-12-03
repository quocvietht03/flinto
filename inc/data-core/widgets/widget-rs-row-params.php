<?php 
include_once get_template_directory() . '/inc/data-core/widgets/widget-base-element.php';

$params = Flintotheme_Widget_Base_Element(array(
    'groups' => array(
        'General' => array(
            'title' => __('General', 'flintotheme'),
            'name' => 'general',
            'fields' => array(
                'content_width' => array(
                    'label' => __('Content Width', 'flintotheme'),
                    'description' => __('Select content width boxed / full-width', 'flintotheme'),
                    'type' => 'select',
                    'value' => '',
                    'options' => array(
                        array( 'value' => 'fluid', 'label' => 'Container Fluid' ),
                        array( 'value' => 'large', 'label' => 'Container Large' ),
                        array( 'value' => 'medium', 'label' => 'Container Medium' ),
                    )
                ),
                'full_width' => array(
                    'label' => __('Full Width', 'flintotheme'),
                    'description' => __('On/Off Row full width no padding.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'off',
                    'condition' => array(
                        'content_width' => 'fluid',
                    ),
                ),
                'align' => array(
                    'label' => __('Content Alignment', 'flintotheme'),
                    'description' => __('Select alignment', 'flintotheme'),
                    'type' => 'radio-group',
                    'value' => '',
                    'options' => array(
                        array( 'label' => '', 'text' => __('Default', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-left', 'text' => __('Left', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-center', 'text' => __('Center', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-right', 'text' => __('Right', 'flintotheme') ),
                    ),
                ),
                'columns_vertical_align' => array(
                    'label' => __('Columns Vertical Alignment', 'flintotheme'),
                    'description' => __('Select alignment', 'flintotheme'),
                    'type' => 'radio-group',
                    'value' => '',
                    'options' => array(
                        array( 'label' => '', 'text' => __('Default', 'flintotheme') ),
                        array( 'label' => 'theme-extends-col-vertical-align-top', 'text' => __('Top', 'flintotheme') ),
                        array( 'label' => 'theme-extends-col-vertical-align-middle', 'text' => __('Middle', 'flintotheme') ),
                        array( 'label' => 'theme-extends-col-vertical-align-bottom', 'text' => __('Bottom', 'flintotheme') ),
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
    )
), array( 'Style', 'Responsive' ));

return $params;