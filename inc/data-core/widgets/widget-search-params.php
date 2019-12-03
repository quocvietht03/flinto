<?php 
include_once get_template_directory() . '/inc/data-core/widgets/widget-base-element.php';

$params = Flintotheme_Widget_Base_Element(array(
    'groups' => array(
        /* Group General */
        array(
            'title' => __('General', 'flintotheme'),
            'name' => 'general',
            'fields' => array(
                'search_form_position' => array(
                    'label' => __('Search Form Position', 'flintotheme'),
                    'description' => __('Select position(left/right) form display (default: Left)', 'flintotheme'),
                    'type' => 'select',
                    'value' => 'left',
                    'options' => array(
                        array( 'value' => 'left', 'label' => __('Show on the left', 'flintotheme') ),
                        array( 'value' => 'right', 'label' => __('Show on the right', 'flintotheme') ),
                    )
                ),
                'search_on_type' => array(
                    'label' => __('Search On Type', 'flintotheme'),
                    'description' => __('On/off ajax search on your text (default: Disable)', 'flintotheme'),
                    'type' => 'select',
                    'value' => 'no',
                    'options' => array(
                        array( 'value' => 'no', 'label' => __('Disable', 'flintotheme') ),
                        array( 'value' => 'yes', 'label' => __('Enable', 'flintotheme') ),
                    )
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