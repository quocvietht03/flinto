<?php
/**
 * @package Widget Element
 * Widget header & footer builder
 * 
 * @author Bearsthemes
 * @version 1.0.0 
 */

if(! function_exists('Flintotheme_Widget_Base_Element')) {
    /**
     * @since 1.0.0 
     */
    function Flintotheme_Widget_Base_Element($params = array(), $support = array('Style')) {
        if( ! empty($support) && count($support) > 0 ) {
            foreach($support as $s) {
                if( function_exists( sprintf('Flintotheme_Widget_Base_Element__Group_%s', $s) ) )
                    $params['groups'][$s] = call_user_func( sprintf('Flintotheme_Widget_Base_Element__Group_%s', $s) );
            }
        }
        
        return $params;
    }   
}


if(! function_exists('Flintotheme_Widget_Base_Element__Group_Style')) {
    /**
     * @since 1.0.0 
     */
    function Flintotheme_Widget_Base_Element__Group_Style() {
        return array(
            'title' => __('Style', 'flintotheme'),
            'name' => 'style',
            'fields' => array(
                'padding' => array(
                    'label' => __('Padding', 'flintotheme'),
                    'description' => __('Add padding for element', 'flintotheme'),
                    'type' => 'input',
                    'value' => '',
                    'placeholder' => '0px 0px 0px 0px',
                ),
                'margin' => array(
                    'label' => __('Margin', 'flintotheme'),
                    'description' => __('Add margin for element', 'flintotheme'),
                    'type' => 'input',
                    'value' => '',
                    'placeholder' => '0px 0px 0px 0px',
                ),
            ),
        );
    }
}

if(! function_exists('Flintotheme_Widget_Base_Element__Group_Responsive')) {
    /**
     * @since 1.0.0 
     */
    function Flintotheme_Widget_Base_Element__Group_Responsive() {
        return array(
            'title' => __('Responsive', 'flintotheme'),
            'name' => 'responsive',
            'fields' => array(
                'hidden_on_device' => array(
                    'label' => __('Hidden On Device', 'flintotheme'),
                    'description' => __('Select for hidden on device.', 'flintotheme'),
                    'type' => 'checkbox-group',
                    'size' => 'small',
                    'value' => array(),
                    'options' => array(
                        array( 'label' => 'theme-extends-hidden-on-mobile', 'text' => __('Mobile', 'flintotheme') ),
                        array( 'label' => 'theme-extends-hidden-on-tablet', 'text' => __('Tablet', 'flintotheme') ),
                        array( 'label' => 'theme-extends-hidden-on-desktop', 'text' => __('Desktop', 'flintotheme') ),
                        array( 'label' => 'theme-extends-hidden-on-large_screen', 'text' => __('Large Screen', 'flintotheme') ),
                    ),
                ),
                'separator_1' => array(
                    'type' => 'separator',
                ),
                'medium_device' => array(
                    'label' => __('Medium Device', 'flintotheme'),
                    'description' => __('On/off responsive on medium device.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'off',
                ),
                'medium_device_width' => array(
                    'label' => __('Width', 'flintotheme'),
                    'description' => __('Enter width on medium device (unit %)', 'flintotheme'),
                    'type' => 'input',
                    'value' => '',
                    'placeholder' => 'Ex: 100',
                    'condition' => array(
                        'medium_device' => 'on',
                    ),
                ),
                'medium_device_align' => array(
                    'label' => __('Alignment', 'flintotheme'),
                    'description' => __('Select alignment', 'flintotheme'),
                    'type' => 'radio-group',
                    'value' => '',
                    'options' => array(
                        array( 'label' => '', 'text' => __('Default', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-left', 'text' => __('Left', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-center', 'text' => __('Center', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-right', 'text' => __('Right', 'flintotheme') ),
                    ),
                    'condition' => array(
                        'medium_device' => 'on',
                    ),
                ),

                'separator_2' => array(
                    'type' => 'separator',
                ),

                'small_device' => array(
                    'label' => __('Small Device', 'flintotheme'),
                    'description' => __('On/off responsive on small device.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'off',
                ),
                'small_device_width' => array(
                    'label' => __('Width', 'flintotheme'),
                    'description' => __('Enter width on small device (unit %)', 'flintotheme'),
                    'type' => 'input',
                    'value' => '',
                    'placeholder' => 'Ex: 100',
                    'condition' => array(
                        'small_device' => 'on',
                    ),
                ),
                'small_device_align' => array(
                    'label' => __('Alignment', 'flintotheme'),
                    'description' => __('Select alignment', 'flintotheme'),
                    'type' => 'radio-group',
                    'value' => '',
                    'options' => array(
                        array( 'label' => '', 'text' => __('Default', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-left', 'text' => __('Left', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-center', 'text' => __('Center', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-right', 'text' => __('Right', 'flintotheme') ),
                    ),
                    'condition' => array(
                        'small_device' => 'on',
                    ),
                ),

                'separator_3' => array(
                    'type' => 'separator',
                ),

                'extra_small_device' => array(
                    'label' => __('Extra Small', 'flintotheme'),
                    'description' => __('On/off responsive on extra small device.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'off',
                ),
                'extra_small_device_width' => array(
                    'label' => __('Width', 'flintotheme'),
                    'description' => __('Enter width on extra small device (unit %)', 'flintotheme'),
                    'type' => 'input',
                    'value' => '',
                    'placeholder' => 'Ex: 100',
                    'condition' => array(
                        'extra_small_device' => 'on',
                    ),
                ),
                'extra_small_device_align' => array(
                    'label' => __('Alignment', 'flintotheme'),
                    'description' => __('Select alignment', 'flintotheme'),
                    'type' => 'radio-group',
                    'value' => '',
                    'options' => array(
                        array( 'label' => '', 'text' => __('Default', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-left', 'text' => __('Left', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-center', 'text' => __('Center', 'flintotheme') ),
                        array( 'label' => 'theme-extends-align-right', 'text' => __('Right', 'flintotheme') ),
                    ),
                    'condition' => array(
                        'extra_small_device' => 'on',
                    ),
                ),

            ),
        );
    }
}
