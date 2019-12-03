<?php 
include_once get_template_directory() . '/inc/data-core/widgets/widget-base-element.php';

$params = Flintotheme_Widget_Base_Element(array(
    'groups' => array(
        /* Group General */
        array(
            'title' => __('General', 'flintotheme'),
            'name' => 'general',
            'fields' => array(
                'custom_logo' => array(
                    'label' => __('Custom Logo', 'flintotheme'),
                    'description' => __('Enable custom logo.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'no',
                    'placeholder' => 'on/off custom logo.',
                ),
                'branding_url' => array(
                    'label' => false, //__('Branding Image', 'flintotheme'),
                    'description' => __('Select branding image.', 'flintotheme'),
                    'type' => 'wp-media',
                    'condition' => array(
                        'custom_logo' => 'on',
                    ),
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