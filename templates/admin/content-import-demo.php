<?php
global $flintotheme;
$flintotheme_package_demos = $flintotheme->conf_required['package_demos'];
// echo '<pre>'; print_r($flintotheme_package_demos); echo '</pre>';
?>
<div class="__package-demo-listing">
    <el-row :gutter="30">
        <?php if( $flintotheme_package_demos && count($flintotheme_package_demos) > 0 ) {

            $installationlegit = ( ! function_exists('isInstallationLegit' ) ) ? false : isInstallationLegit();

            foreach( $flintotheme_package_demos as $demo ) {
                $tooltip_text = __('Install', 'flintotheme');
                $button_html = '<button class="__import-handle" @click=\'OnOpenModalInstall($event, '. wp_json_encode( $demo ) .')\'><img src="'. esc_url( get_template_directory_uri() . '/assets/images/svg-icons/icon-download.svg' ) .'"></button>';
                if( $installationlegit == false ){
                    $tooltip_text = __('Activation license', 'flintotheme');
                    $button_html = '<button class="__import-handle __locked" @click=\'OnOpenModalLocked($event, '. wp_json_encode( $demo ) .')\'><img src="'. esc_url( get_template_directory_uri() . '/assets/images/svg-icons/icon-lock.svg' ) .'"></button>';
                }
                echo implode('', array(
                    '<el-col :sm="12" :md="8" :lg="6">',
                        '<div class="__package-demo-item">',
                            '<div class="image-preview">
                                <img src="'. esc_url( $demo['image_preview'] ) .'" alt="'. esc_attr( $demo['label'] ) .'">
                                <a class="__live-preview" href="'. esc_url( $demo['link_preview'] ) .'" target="_blank">'. __('Live Preview', 'flintotheme') .'</a>
                            </div>',
                            '<div class="emtry">',
                                '<label class="package-label">'. $demo['label'] .'</label>',
                                '<el-tooltip class="el-tooltip" effect="dark" content="'. $tooltip_text .'" placement="top">',
                                    $button_html,
                                '</el-tooltip>',
                            '</div>',
                        '</div>',
                    '</el-col>',
                ));
            }
        } ?>
    </el-row>
</div>
<!-- Modal import UI -->
<transition name="modal-install__fade" :duration="800">
    <modal-install-demo v-if="ModalInstallDisplay" :package-data="PackageDemoSelected" :is-install="InstallPackageDemo.isInstall">
        <a href="#" class="__close-modal" @click="OnCloseModalInstall($event)"><span class="dashicons dashicons-no-alt"></span></a>
        <div class="image-preview">
            <img :src="PackageDemoSelected.image_preview" alt="<?php esc_attr_e( 'image' , 'flintotheme') ?>">
        </div>
        <div class="entry">
            <div class="label">{{ PackageDemoSelected.label }}</div>
            <div class="descriptions">{{ PackageDemoSelected.descriptions }}</div>
            <div class="plugin-include">
                <h4><?php _e( 'Include', 'flintotheme' ) ?> {{ PackageDemoSelected.plugins.length }} <?php _e( 'Plugins', 'flintotheme' ) ?></h4>
                <ul>
                    <li v-for="(p, index) in PackageDemoSelected.plugins" :title="p.name">{{ index + 1 }}. {{ p.name }}</li>
                </ul>
            </div>
            <div class="notice-before-import">
                <?php _e('IMPORTANT: Installing this demo content will delete the content you currently have on your website. However, we create a backup of your current content in (Dashboad > Backup). You can restore the backup from there at any time in the future.', 'flintotheme') ?>
            </div>
            <div class="button-tool">
                <a :href="PackageDemoSelected.link_preview" target="_blank" class="btn-live-preview"><?php _e('Live Preview', 'flintotheme') ?></a>
                <a href="" class="btn-install-package" @click="OnInstallPackage($event, PackageDemoSelected)"><?php _e('Install', 'flintotheme') ?> <span class="dashicons dashicons-download"></span></a>
            </div>
        </div>

        <template slot="install-log">
            <modal-install-demo-install-log :steps="InstallPackageDemo.stepInstallList" :active-step="InstallPackageDemo.stepInstallActive" :message-log="InstallPackageDemo.installMessageLog"></modal-install-demo-install-log>
        </template>

    </modal-install-demo>
</transition>
