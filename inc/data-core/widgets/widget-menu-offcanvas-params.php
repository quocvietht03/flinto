<?php 
include_once get_template_directory() . '/inc/data-core/widgets/widget-base-element.php';

$params = Flintotheme_Widget_Base_Element(array(
    'groups' => array(
        /* Group General */
        array(
            'title' => __('General', 'flintotheme'),
            'name' => 'general',
            'fields' => array(
                'menu' => array(
                    'label' => __('Menu', 'flintotheme'),
                    'description' => __('Select menu.', 'flintotheme'),
                    'type' => 'select',
                    'value' => '',
                    'options' => flintotheme_get_wordpress_menus(array(
                        array(
                            'value' => '',
                            'label' => __('No Menu', 'flintotheme'),
                        )
                    )),
                ),
                'style' => array(
                    'label' => __('Style', 'flintotheme'),
                    'description' => __('Select style offcanvs menu', 'flintotheme'),
                    'type' => 'select',
                    'value' => 'fullwidth-fadein-center',
                    'options' => array(
                        array( 'value' => 'slide-from-right-to-left', 'label' => 'Slide from Right to Left' ),
                        array( 'value' => 'slide-from-left-to-right', 'label' => 'Slide from Left to Right' ),
                        array( 'value' => 'fullwidth-fadein-center', 'label' => 'Full Width FadeIn Center' ),
                    )
                ),
                'separator_0' => array(
                    'type' => 'separator',
                ),
                'sidebar_before_nav' => array(
                    'label' => __('Sidebar Before Nav', 'flintotheme'),
                    'description' => __('Select sidebar before nav', 'flintotheme'),
                    'type' => 'select',
                    'value' => '',
                    'options' => flintotheme_wp_get_sidebars_widgets_options(array(
                        array(
                            'value' => '',
                            'label' => __('No Sidebar', 'flintotheme'),
                        )
                    )),
                ),
                'sidebar_after_nav' => array(
                    'label' => __('Sidebar After Nav', 'flintotheme'),
                    'description' => __('Select sidebar after nav', 'flintotheme'),
                    'type' => 'select',
                    'value' => '',
                    'options' => flintotheme_wp_get_sidebars_widgets_options(array(
                        array(
                            'value' => '',
                            'label' => __('No Sidebar', 'flintotheme'),
                        )
                    )),
                ),
                'separator_1' => array(
                    'type' => 'separator',
                ),
                'element_inline' => array(
                    'label' => __('Inline', 'flintotheme'),
                    'description' => __('element inline.', 'flintotheme'),
                    'type' => 'switch',
                    'value' => 'no',
                    'placeholder' => 'on/off element inline.',
                ),
                'separator_2' => array(
                    'type' => 'separator',
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