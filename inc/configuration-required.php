<?php 
$flintotheme_host_plugin_install      = 'http://beplusthemes.com/install/plugin/';
$flintotheme_host_package_install     = 'http://beplusthemes.com/install/demo/flinto/';
$flintotheme_host_live_preview        = 'https://flinto.beplusthemes.com/';
$plugin_demo_general_inc              = array(
    array(
        'name' => __('WPBakery Page Builder', 'flintotheme'),
        'slug' => 'js_composer',
        'source' => $flintotheme_host_plugin_install . 'js_composer.zip',
    ),
    array(
        'name' => __('Revolution Slider', 'flintotheme'),
        'slug' => 'revslider',
        'source' => $flintotheme_host_plugin_install . 'revslider.zip',
    ),
    array(
        'name' => __('Bears Element (Visual Composer)', 'flintotheme'),
        'slug' => 'bears-elements-vc',
        'source' => $flintotheme_host_plugin_install . 'bears-elements-vc.zip',
    ),
    array(
        'name' => __('Bears Lookbook', 'flintotheme'),
        'slug' => 'bears-lookbook',
        'source' => $flintotheme_host_plugin_install . 'bears-lookbook.zip',
    ),
    array(
        'name' => __('WooCommerce', 'flintotheme'),
        'slug' => 'woocommerce',
    ),
    array(
        'name' => __('WooCommerce PayPal Express Checkout Payment Gateway', 'flintotheme'),
        'slug' => 'woocommerce-gateway-paypal-express-checkout',
    ),
    array(
        'name' => __('WooCommerce Stripe Payment Gateway', 'flintotheme'),
        'slug' => 'woocommerce-gateway-stripe',
    ),
    array(
        'name' => __('WooCommerce Wishlist Plugin', 'flintotheme'),
        'slug' => 'ti-woocommerce-wishlist',
    ),
    array(
        'name' => __('Contact Form 7', 'flintotheme'),
        'slug' => 'contact-form-7',
    ),
    array(
        'name' => __('Custom Sidebars – Dynamic Widget Area Manager', 'flintotheme'),
        'slug' => 'custom-sidebars',
    ),
    array(
        'name' => __('Newsletter', 'flintotheme'),
        'slug' => 'newsletter',
    ),
    array(
        'name' => __('Smash Balloon Instagram Feed', 'flintotheme'),
        'slug' => 'instagram-feed',
    ),
);

return apply_filters( 'flintotheme_configuration_required_filter', array(
    'memory_limit' => '256M',
    'php_version' => '5.6.0',
    'php_post_max_size' => '128M',
    'php_time_limit' => '1500',
    'php_max_input_vars' => '4000',
    'mysql_version' => '5.6.0',
    'max_upload_size' => '128M',
    'download_package_url' => $flintotheme_host_package_install,
    'package_demos' => array(
        'flinto-default' => array(
            'image_preview' => get_template_directory_uri() . '/assets/images/preview/flinto-preview-import.jpg',
            'link_preview' => $flintotheme_host_live_preview . 'flinto/',
            'package_name' => 'flinto-default',
            'label' => __('Flinto', 'flintotheme'),
            'descriptions' => __('Include 10 layout home page demo, blog and product. Header and Footer demo layouts', 'flintotheme'),
            'plugins' => $plugin_demo_general_inc,
        ),
    ),
    'plugins_compatible' => array(
        /**
         * Premium Plugins
         */
        array(
            'name' => __('WP Bakery (Visual Composer page builder)', 'flintotheme'),
            'slug' => 'js_composer',
            'thumbnail' => get_template_directory_uri() . '/assets/images/core/wpbakery-plugin-thumbnail.jpg',
            'source' => $flintotheme_host_plugin_install . 'js_composer.zip',
        ),
        array(
            'name' => __('Revolution Slider', 'flintotheme'),
            'slug' => 'revslider',
            'thumbnail' => get_template_directory_uri() . '/assets/images/core/revolution-slide-plugin-thumbnail.jpg',
            'source' => $flintotheme_host_plugin_install . 'revslider.zip',
        ),
        array(
            'name' => __('Essential Grid', 'flintotheme'),
            'slug' => 'essential-grid',
            'thumbnail' => get_template_directory_uri() . '/assets/images/core/essential-grid-plugin-thumbnail.jpg',
            'source' => $flintotheme_host_plugin_install . 'essential-grid.zip',
        ),
        array(
            'name' => __('Woocommerce Product Filter', 'flintotheme'),
            'slug' => 'prdctfltr',
            'thumbnail' => get_template_directory_uri() . '/assets/images/core/woo-product-filter-premium-thumbnail.jpg',
            'source' => $flintotheme_host_plugin_install . 'prdctfltr.zip',
        ),
        array(
            'name' => __('Bears Element (Visual Composer)', 'flintotheme'),
            'slug' => 'bears-elements-vc',
            'source' => $flintotheme_host_plugin_install . 'bears-elements-vc.zip',
        ),
        array(
            'name' => __('Bears Backup', 'flintotheme'),
            'slug' => 'bears-backup',
            'source' => $flintotheme_host_plugin_install . 'bears-backup.zip',
        ),
        array(
            'name' => __('Bears Social Sharing', 'flintotheme'),
            'slug' => 'bears-social-sharing',
            'source' => $flintotheme_host_plugin_install . 'bears-social-sharing.zip',
        ),
        array(
            'name' => __('Bears Mega Menu', 'flintotheme'),
            'slug' => 'bears-megamenu',
            'source' => $flintotheme_host_plugin_install . 'bears-megamenu.zip',
        ),
        array(
            'name' => __('Bears Product Quick View (WooCommerce)', 'flintotheme'),
            'slug' => 'bears-woocommerce-product-quick-view',
            'source' => $flintotheme_host_plugin_install . 'bears-woocommerce-product-quick-view.zip',
        ),
        array(
            'name' => __('Bears Lookbook', 'flintotheme'),
            'slug' => 'bears-lookbook',
            'source' => $flintotheme_host_plugin_install . 'bears-lookbook.zip',
        ),
        array(
            'name' => __('WooCommerce Variation Swatches & Photos', 'flintotheme'),
            'slug' => 'woocommerce-variation-swatches-and-photos',
            'source' => $flintotheme_host_plugin_install . 'woocommerce-variation-swatches-and-photos.zip',
        ),
        array(
            'name' => __('Bears WooCommerce Swatches on Product Listing Page', 'flintotheme'),
            'slug' => 'bears-woocommerce-swatches-on-product-listing-page',
            'source' => $flintotheme_host_plugin_install . 'bears-woocommerce-swatches-on-product-listing-page.zip',
        ),
        array(
            'name' => __('WooCommerce Product Bundles', 'flintotheme'),
            'slug' => 'woocommerce-product-bundles',
            'source' => $flintotheme_host_plugin_install . 'woocommerce-product-bundles.zip',
        ),

        /**
         * WordPress Plugins 
         */
        array(
            'name' => __('Contact Form 7', 'flintotheme'),
            'slug' => 'contact-form-7',
            'thumbnail' => get_template_directory_uri() . '/assets/images/core/contact-form-7-plugin-thumbnail.jpg',
        ),
        array(
            'name' => __('Custom Sidebars – Dynamic Widget Area Manager', 'flintotheme'),
            'slug' => 'custom-sidebars',
            'thumbnail' => get_template_directory_uri() . '/assets/images/core/customsidebars-plugin-thumbnail.jpg',
        ),
        array(
            'name' => __('DeliPress – Newsletters and Opt-In forms', 'flintotheme'),
            'slug' => 'delipress',
            'thumbnail' => get_template_directory_uri() . '/assets/images/core/delipress-plugin-thumbnail.jpg',
        ),
        array(
            'name' => __('Jetpack by WordPress.com', 'flintotheme'),
            'slug' => 'jetpack',
            'thumbnail' => get_template_directory_uri() . '/assets/images/core/jetpack-plugin-thumbnail.jpg',
        ),
        array(
            'name' => __('Yoast SEO', 'flintotheme'),
            'slug' => 'wordpress-seo',
            'thumbnail' => get_template_directory_uri() . '/assets/images/core/yoastseo-plugin-thumbnail.jpg',
        ),
        array(
            'name' => __('TinyMCE Advanced', 'flintotheme'),
            'slug' => 'tinymce-advanced',
        ),
        array(
            'name' => __('WooCommerce', 'flintotheme'),
            'slug' => 'woocommerce',
            'thumbnail' => get_template_directory_uri() . '/assets/images/core/woocommerce-thumbnail-thumbnail.jpg',
        ),
        array(
            'name' => __('WooCommerce PayPal Express Checkout Payment Gateway', 'flintotheme'),
            'slug' => 'woocommerce-gateway-paypal-express-checkout',
        ),
        array(
            'name' => __('WooCommerce Stripe Payment Gateway', 'flintotheme'),
            'slug' => 'woocommerce-gateway-stripe',
        ),
        array(
            'name' => __('WooCommerce Wishlist Plugin', 'flintotheme'),
            'slug' => 'ti-woocommerce-wishlist',
        ),
        array(
            'name' => __('WP Fastest Cache', 'flintotheme'),
            'slug' => 'wp-fastest-cache',
            'thumbnail' => get_template_directory_uri() . '/assets/images/core/fastest-cache-plugin-thumbnail.jpg',
        ),
    )
) );