<?php 
global $flintotheme;
$flintotheme_config = $flintotheme->conf_required;

$flintotheme_memory = flintotheme_return_memory_size( WP_MEMORY_LIMIT );
$flintotheme_requirements_wp_memory_limit = flintotheme_return_memory_size($flintotheme_config['memory_limit']);
$flintotheme_memory_st = ($flintotheme_memory >= $flintotheme_requirements_wp_memory_limit) ? 'pass' : 'no_pass';

$flintotheme_server_software = ( function_exists('flintotheme_return_server_software') ) ? flintotheme_return_server_software() : '????????????';

// php version
if ( function_exists( 'phpversion' ) ) {
    $flintotheme_phpversion_st = ( version_compare(phpversion(), $flintotheme_config['php_version'], '<=') ) ? 'no_pass' : 'pass';
} else{
	$flintotheme_phpversion_st = 'no_php_installed';
}

// php post max size
$flintotheme_requirements_post_max_size = flintotheme_return_memory_size($flintotheme_config['php_post_max_size']);
if ( flintotheme_return_memory_size( ini_get('post_max_size') ) < $flintotheme_requirements_post_max_size ) {
	$flintotheme_php_post_max_size_st = 'no_pass';
} else{ 
    $flintotheme_php_post_max_size_st = 'pass';
}

// php time limit
$flintotheme_time_limit = ini_get('max_execution_time');
$flintotheme_required_php_time_limit = (int)$flintotheme_config['php_time_limit'];
if ( $flintotheme_time_limit < $flintotheme_required_php_time_limit && $flintotheme_time_limit != 0 ) {
	$flintotheme_required_php_time_limit_st = 'no_pass';
} else {
	$flintotheme_required_php_time_limit_st = 'pass';
}

// php max input vars
$flintotheme_max_input_vars = ini_get('max_input_vars');
$flintotheme_required_input_vars = $flintotheme_config['php_max_input_vars'];
if ( $flintotheme_max_input_vars < $flintotheme_required_input_vars ) {
	$flintotheme_required_input_vars_st = 'no_pass';
} else {
	$flintotheme_required_input_vars_st = 'pass';
}

// suhosin
if( extension_loaded( 'suhosin' ) ) {
	$flintotheme_suhosin_install_st = 'yes';
} else {
	$flintotheme_suhosin_install_st = 'no';
}

// ZipArchive
if( class_exists( 'ZipArchive' ) ) {
    $flintotheme_zip_archive_install_st = 'yes';
} else {
    $flintotheme_zip_archive_install_st = 'no';
}

// mysql version
global $wpdb;
if( version_compare($wpdb->db_version(), $flintotheme_config['mysql_version'], '<=') ){
	$flintotheme_required_mysql_version_st = 'no_pass';
} else{
	$flintotheme_required_mysql_version_st = 'pass';
}

// max upload size
$flintotheme_requirements_max_upload_size = flintotheme_return_memory_size($flintotheme_config['max_upload_size']);
if ( wp_max_upload_size() < $flintotheme_requirements_max_upload_size ) {
    $flintotheme_requirements_max_upload_size_st = 'no_pass';
} else{
    $flintotheme_requirements_max_upload_size_st = 'pass';
}

// fsockopen
if( function_exists( 'fsockopen' ) || function_exists( 'curl_init' ) ) {
	$flintotheme_requirements_fsockopen_curl_init = 'yes';
}
else{
	$flintotheme_requirements_fsockopen_curl_init = 'no';
}

$flintotheme_config_temp = array(
    'memory_limit' => array(
        'no_pass' => implode('', array(
            '<li class="__item __bg-error">',
                '<span class="__icon"><div class="__icon-ui i-multiply"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('WordPress Memory Limit', 'flintotheme') . ': ' . size_format($flintotheme_memory) .'</div>',
                    '<div class="__desc">', 
                        __('The maximum amount of memory (RAM) that your site can use at one time.', 'flintotheme'),
                        ' ',
                        '<hr />',
                        __('We recommend setting memory to at least', 'flintotheme'),
                        ' ',
                        size_format($flintotheme_requirements_wp_memory_limit),
                        __('. Please define memory limit in "wp-config.php" file.', 'flintotheme'),
                        ' ',
                        '<a href="'. esc_url( 'http://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP' ) .'" target="_blank">'.esc_html__('Learn how to do it', 'flintotheme' ).'</a>',
                    '</div>',
                '</div>',
            '</li>',
        )),
        'pass' => implode('', array(
            '<li class="__item">',
                '<span class="__icon"><div class="__icon-ui i-checked"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('WordPress Memory Limit', 'flintotheme') . ': ' . size_format($flintotheme_memory) .'</div>',
                    '<div class="__desc">', 
                        __('The maximum amount of memory (RAM) that your site can use at one time.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
    ),
    'phpversion' => array(
        'no_pass' => implode('', array(
            '<li class="__item __bg-error">',
                '<span class="__icon"><div class="__icon-ui i-multiply"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('PHP Version', 'flintotheme') . ': ' . esc_html( phpversion() ) .'</div>',
                    '<div class="__desc">', 
                        __('The version of PHP installed on your hosting server.', 'flintotheme'),
                        '<hr />',
                        __('We recommend you update PHP to the latest version. The minimum required version for this theme is:', 'flintotheme'),
                        ' ', 
                        $flintotheme_config['php_version'],
                        ' .',
                        __('Contact your hosting provider, they can install it for you.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
        'pass' => implode('', array(
            '<li class="__item">',
                '<span class="__icon"><div class="__icon-ui i-checked"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('PHP Version', 'flintotheme') . ': ' . esc_html( phpversion() ) .'</div>',
                    '<div class="__desc">', 
                        __('The version of PHP installed on your hosting server', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
        'no_php_installed' => implode('', array(
            '<li class="__item __bg-error">',
                '<span class="__icon"><div class="__icon-ui i-multiply"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('PHP Version', 'flintotheme') . ': ' . __('No PHP Installed', 'flintotheme') .'</div>',
                    '<div class="__desc">', 
                        '...',
                    '</div>',
                '</div>',
            '</li>',
        )),
    ),
    'php_post_max_size' => array(
        'no_pass' => implode('', array(
            '<li class="__item __bg-error">',
                '<span class="__icon"><div class="__icon-ui i-multiply"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('PHP Post Max Size', 'flintotheme') . ': ' . size_format(flintotheme_return_memory_size( ini_get('post_max_size') ) ) .'</div>',
                    '<div class="__desc">', 
                        __('The largest file size that can be contained in one post.', 'flintotheme'),
                        '<hr />',
                        __('We recommend setting the post maximum size to at least:', 'flintotheme'),
                        ' ', 
                        size_format($flintotheme_requirements_post_max_size),
                        '. ',
                        '<a href="'. esc_url( '#' ) .'" target="_blank">'.__('Learn how to do it', 'flintotheme').'</a>',
                    '</div>',
                '</div>',
            '</li>',
        )),
        'pass' => implode('', array(
            '<li class="__item">',
                '<span class="__icon"><div class="__icon-ui i-checked"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('PHP Post Max Size', 'flintotheme') . ': ' . size_format( flintotheme_return_memory_size( ini_get('post_max_size') ) ) .'</div>',
                    '<div class="__desc">', 
                        __('The largest file size that can be contained in one post.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        ))
    ),
    'php_time_limit' => array(
        'no_pass' => implode('', array(
            '<li class="__item __bg-error">',
                '<span class="__icon"><div class="__icon-ui i-multiply"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('PHP Time Limit', 'flintotheme') . ': ' . $flintotheme_time_limit .'</div>',
                    '<div class="__desc">', 
                        __('The amount of time (in seconds) that your site will spend on a single operation before timing out (to avoid server lockups).', 'flintotheme'),
                        '<hr />',
                        __('We recommend setting the maximum execution time to at least', 'flintotheme'),
                        ' ', 
                        $flintotheme_required_php_time_limit,
                        '. ',
                        '<a href="'. esc_url( 'http://codex.wordpress.org/Common_WordPress_Errors#Maximum_execution_time_exceeded' ) .'" target="_blank">'.__('Learn how to do it','flintotheme').'</a>',
                    '</div>',
                '</div>',
            '</li>',
        )),
        'pass' => implode('', array(
            '<li class="__item">',
                '<span class="__icon"><div class="__icon-ui i-checked"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('PHP Time Limit', 'flintotheme') . ': ' . $flintotheme_time_limit .'</div>',
                    '<div class="__desc">', 
                        __('The amount of time (in seconds) that your site will spend on a single operation before timing out (to avoid server lockups).', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
    ),
    'php_max_input_vars' => array(
        'no_pass' => implode('', array(
            '<li class="__item __bg-error">',
                '<span class="__icon"><div class="__icon-ui i-multiply"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('PHP Max Input Vars', 'flintotheme') . ': ' . $flintotheme_max_input_vars .'</div>',
                    '<div class="__desc">', 
                        __('The maximum number of variables your server can use for a single function to avoid overloads.', 'flintotheme'),
                        '<hr />',
                        __('Please increase the maximum input variables limit to:', 'flintotheme'),
                        ' ', 
                        $flintotheme_required_input_vars,
                        '. ',
                        '<a href="'. esc_url( '#' ) .'" target="_blank">'.__('Learn how to do it','flintotheme').'</a>',
                    '</div>',
                '</div>',
            '</li>',
        )),
        'pass' => implode('', array(
            '<li class="__item">',
                '<span class="__icon"><div class="__icon-ui i-checked"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('PHP Max Input Vars', 'flintotheme') . ': ' . $flintotheme_max_input_vars .'</div>',
                    '<div class="__desc">', 
                        __('The maximum number of variables your server can use for a single function to avoid overloads.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
    ),
    'SUHOSIN_installed' => array(
        'yes' => implode('', array(
            '<li class="__item __bg-error">',
                '<span class="__icon"><div class="__icon-ui i-multiply"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('SUHOSIN Installed', 'flintotheme') . ': ' . __('Yes', 'flintotheme') .'</div>',
                    '<div class="__desc">', 
                        __('Suhosin is an advanced protection system for PHP installations and may need to be configured to increase its data submission limits.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
        'no' => implode('', array(
            '<li class="__item">',
                '<span class="__icon"><div class="__icon-ui i-checked"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('SUHOSIN Installed', 'flintotheme') . ': ' . __('No', 'flintotheme') .'</div>',
                    '<div class="__desc">', 
                        __('Suhosin is an advanced protection system for PHP installations.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
    ),
    'zip_archive' => array(
        'yes' => implode('', array(
            '<li class="__item">',
                '<span class="__icon"><div class="__icon-ui i-checked"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('ZipArchive', 'flintotheme') . ': ' . __('Yes', 'flintotheme') .'</div>',
                    '<div class="__desc">', 
                        __('ZipArchive is required for importing demos. They are used to import and export zip files specifically for sliders.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
        'no' => implode('', array(
            '<li class="__item __bg-error">',
                '<span class="__icon"><div class="__icon-ui i-multiply"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('ZipArchive', 'flintotheme') . ': ' . __('No', 'flintotheme') .'</div>',
                    '<div class="__desc">', 
                        __('ZipArchive is required for importing demos. They are used to import and export zip files specifically for sliders.', 'flintotheme'),
                        '<hr />',
                        __('Contact your hosting provider, they can install it for you.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
    ),
    'mysql_version' => array(
        'no_pass' => implode('', array(
            '<li class="__item __bg-error">',
                '<span class="__icon"><div class="__icon-ui i-multiply"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('MySQL Version', 'flintotheme') . ': ' . $wpdb->db_version() .'</div>',
                    '<div class="__desc">', 
                        __('The version of MySQL installed on your hosting server.', 'flintotheme'),
                        '<hr />',
                        __('We recommend you update MySQL to the latest version. The minimum required version for this theme is:', 'flintotheme'),
                        ' ', 
                        $flintotheme_config['mysql_version'],
                        '. ',
                        __('Contact your hosting provider, they can install it for you.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
        'pass' => implode('', array(
            '<li class="__item">',
                '<span class="__icon"><div class="__icon-ui i-checked"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('MySQL Version', 'flintotheme') . ': ' . $wpdb->db_version() .'</div>',
                    '<div class="__desc">', 
                        __('The version of MySQL installed on your hosting server.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
    ),
    'max_upload_size' => array(
        'no_pass' => implode('', array(
            '<li class="__item __bg-error">',
                '<span class="__icon"><div class="__icon-ui i-multiply"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('Max Upload Size', 'flintotheme') . ': ' . size_format(wp_max_upload_size()) .'</div>',
                    '<div class="__desc">', 
                        __('The largest file size that can be uploaded to your WordPress installation.', 'flintotheme'),
                        '<hr />',
                        __('We recommend setting the maximum upload file size to at least:', 'flintotheme'),
                        ' ', 
                        size_format($flintotheme_requirements_max_upload_size),
                        '. ',
                        '<a href="'. esc_url('#', 'flintotheme') .'" target="_blank">'.__('Learn how to do it', 'flintotheme').'</a>',
                    '</div>',
                '</div>',
            '</li>',
        )),
        'pass' => implode('', array(
            '<li class="__item">',
                '<span class="__icon"><div class="__icon-ui i-checked"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('Max Upload Size', 'flintotheme') . ': ' . size_format(wp_max_upload_size()) .'</div>',
                    '<div class="__desc">', 
                        __('The largest file size that can be uploaded to your WordPress installation.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
    ),
    'fsockopen_cURL' => array(
        'no' => implode('', array(
            '<li class="__item __bg-error">',
                '<span class="__icon"><div class="__icon-ui i-multiply"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('fsockopen/cURL', 'flintotheme') . ': ' . __('No', 'flintotheme') .'</div>',
                    '<div class="__desc">', 
                        __('Payment gateways can use cURL to communicate with remote servers to authorize payments, other plugins may also use it when communicating with remote services. Your server does not have fsockopen or cURL enabled thus PayPal IPN and other scripts which communicate with other servers will not work. Contact your hosting provider, they can install it for you.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        )),
        'yes' => implode('', array(
            '<li class="__item">',
                '<span class="__icon"><div class="__icon-ui i-checked"></div></span>',
                '<div class="__inner">',
                    '<div class="__title">'. __('fsockopen/cURL', 'flintotheme') . ': ' . __('Yes', 'flintotheme') .'</div>',
                    '<div class="__desc">', 
                        __('ayment gateways can use cURL to communicate with remote servers to authorize payments, other plugins may also use it when communicating with remote services.', 'flintotheme'),
                    '</div>',
                '</div>',
            '</li>',
        ))
    )
);
?>
<el-row :gutter="30">
    <el-col :sm="24" :md="12">
        <div class="theme__list-requirement">

            <?php 
                /**
                 * hook flintotheme_verify_purchase_code_form.
                 * 
                 * @see flintotheme_verify_purchase_code_form_html - 10, in theme-fix.php
                 */
                do_action( 'flintotheme_verify_purchase_code_form' ); 
            ?>

            <h3><?php _e('WordPress Environment', 'flintotheme'); ?></h3>
            <ul class="theme__check-list">
                <li class="__item">
                    <span class="__icon">
                        <div class="__icon-ui i-checked"></div>
                    </span>
                    <div class="__inner">
                        <div class="__title"><?php echo implode(': ', array(__('Home URL', 'flintotheme'), get_home_url())); ?></div>
                        <div class="__desc"><?php _e('The URL of your site\'s homepage', 'flintotheme'); ?></div>
                    </div>
                </li>
                <li class="__item">
                    <span class="__icon">   
                        <div class="__icon-ui i-checked"></div>
                    </span>
                    <div class="__inner">
                        <div class="__title"><?php echo implode(': ', array(__('Site URL', 'flintotheme'), get_site_url())); ?></div>
                        <div class="__desc"><?php _e('The root URL of your site', 'flintotheme'); ?></div>
                    </div>
                </li>
                <li class="__item">
                    <span class="__icon">   
                        <div class="__icon-ui i-checked"></div>
                    </span>
                    <div class="__inner">
                        <div class="__title"><?php echo implode(': ', array(__('WordPress Version', 'flintotheme'), get_bloginfo('version'))); ?></div>
                        <div class="__desc"><?php _e('The version of WordPress installed on your site', 'flintotheme'); ?></div>
                    </div>
                </li>
                <li class="__item">
                    <span class="__icon">   
                        <div class="__icon-ui <?php echo ( ! is_multisite() ) ? 'i-checked' : 'i-multiply' ?>"></div>
                    </span>
                    <div class="__inner">
                        <div class="__title"><?php echo implode(': ', 
                            array(
                                __('WordPress Multisite', 'flintotheme'), 
                                ( is_multisite() ) ? 'Yes' : 'No'
                            )); ?></div>
                        <div class="__desc"><?php _e('Whether or not you have WordPress Multisite enabled', 'flintotheme'); ?></div>
                    </div>
                </li>
                <li class="__item <?php echo ( WP_DEBUG ) ? '__bg-error' : '' ?>">
                    <span class="__icon">   
                        <div class="__icon-ui <?php echo ( ! WP_DEBUG ) ? 'i-checked' : 'i-multiply' ?>"></div>
                    </span>
                    <div class="__inner">
                        <div class="__title"><?php echo implode(': ', 
                            array(
                                __('WordPress Debug Mode', 'flintotheme'), 
                                ( WP_DEBUG ) ? 'Yes' : 'No',
                            )); ?></div>
                        <div class="__desc"><?php _e('Displays whether or not WordPress is in Debug Mode', 'flintotheme'); ?></div>
                    </div>
                </li>
                <?php echo implode('', array( $flintotheme_config_temp['memory_limit'][$flintotheme_memory_st] )); ?>
            </ul>
        </div>
    </el-col>
    <el-col :sm="24" :md="12">
        <div class="theme__list-requirement">
            <h3><?php _e('Server Environment', 'flintotheme'); ?></h3>
            <ul class="theme__check-list">
                <li class="__item">
                    <span class="__icon">
                        <div class="__icon-ui i-checked"></div>
                    </span>
                    <div class="__inner">
                        <div class="__title"><?php echo implode(': ', array(__('Server Info', 'flintotheme'), esc_html( $flintotheme_server_software     ))); ?></div>
                        <div class="__desc"><?php _e('Information about the web server that is currently hosting your site', 'flintotheme'); ?></div>
                    </div>
                </li>
                <?php echo implode('', array( $flintotheme_config_temp['phpversion'][$flintotheme_phpversion_st] )); ?>
                <?php echo implode('', array( $flintotheme_config_temp['php_post_max_size'][$flintotheme_php_post_max_size_st] )); ?>
                <?php echo implode('', array( $flintotheme_config_temp['php_time_limit'][$flintotheme_required_php_time_limit_st] )); ?>
                <?php echo implode('', array( $flintotheme_config_temp['php_max_input_vars'][$flintotheme_required_input_vars_st] )); ?>
                <?php echo implode('', array( $flintotheme_config_temp['SUHOSIN_installed'][$flintotheme_suhosin_install_st] )); ?>
                <?php echo implode('', array( $flintotheme_config_temp['zip_archive'][$flintotheme_zip_archive_install_st] )); ?>
                <?php echo implode('', array( $flintotheme_config_temp['mysql_version'][$flintotheme_required_mysql_version_st] )); ?>
                <?php echo implode('', array( $flintotheme_config_temp['max_upload_size'][$flintotheme_requirements_max_upload_size_st] )); ?>
                <?php echo implode('', array( $flintotheme_config_temp['fsockopen_cURL'][$flintotheme_requirements_fsockopen_curl_init] )); ?>
            </ul>
        </div>
    </el-col>
</el-row>