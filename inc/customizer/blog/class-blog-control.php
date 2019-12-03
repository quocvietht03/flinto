<?php
/**
 * Class to create a Action Control.
 *
 */
class Flintotheme_Blog_Control extends WP_Customize_Control {
	public $type = 'textarea';

	public function render_content() {
		?>
<div id="theme-extends-blog-action-control">
    <div class="theme-extends-message">
        <span class="ion-information-circled"></span>
        <?php _e('Options control blog archive & detail.', 'flintotheme'); ?>
    </div>

    <div class="theme-extends-margin">
        <!-- {{ root_store }} -->
        <el-form ref="form" :model="root_store.data" label-width="100px" label-position="left">
            <el-collapse class="theme-extends-collapse-custom-ui-customize-settings" accordion>
                <!-- Blog Archive -->
                <el-collapse-item name="archive">
                    <template slot="title">
                        <span class="fi flaticon-settings-2"></span> <?php _e('Blog Archive', 'flintotheme') ?>
                    </template>

                    <el-form-item class="theme-extends-margin" label="<?php _e('Layout', 'flintotheme'); ?>">
                        <el-select v-model="root_store.data.archive.layout" popper-class="theme-extends-customize-zindex">
                            <?php 
                                $blog_archive_layouts = flintotheme_blog_archive_layouts();
                                if( ! empty($blog_archive_layouts) ) {
                                    foreach( $blog_archive_layouts as $value => $data ) {
                                        echo '<el-option label="'. $data['label'] .'" value="'. $value .'"></el-option>';
                                    }
                                }
                            ?>
                        </el-select>
                    </el-form-item>

                    <hr class="theme-extends-margin" />

                    <el-form-item class="theme-extends-margin" label="<?php _e('Category filter bar', 'flintotheme'); ?>">
                        <el-switch
                            on-text="" off-text=""
                            on-value="yes" off-value="no"
                            v-model="root_store.data.archive.layout_grid_category_filter_bar"></el-switch>
                            <div style="line-height: normal"><small><?php _e('On/off category filter bar on top', 'flintotheme') ?></small></div>
                    </el-form-item>

                    <transition name="theme-extends-fade">
                        <div v-show="(root_store.data.archive.layout_grid_category_filter_bar == 'yes')">
                            <el-form-item class="theme-extends-margin" label="<?php _e('Filter style', 'flintotheme'); ?>">
                                <el-select v-model="root_store.data.archive.layout_grid_category_filter_bar_style" popper-class="theme-extends-customize-zindex">
                                    <el-option label="<?php _e('Inline', 'flintotheme') ?>" value="inline"></el-option>
                                    <el-option label="<?php _e('Select', 'flintotheme') ?>" value="select"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </transition>

                    <transition name="theme-extends-fade">
                        <div v-show="(root_store.data.archive.layout == 'grid')">

                            <hr class="theme-extends-margin" />

                            <el-form-item label="<?php _e('Columns', 'flintotheme') ?>">
                                <el-input-number v-model="root_store.data.archive.layout_grid_col" :min="1" :max="6" size="small"></el-input-number>
                                <div style="line-height: normal"><small><?php _e('Grid column on desktop', 'flintotheme') ?></small></div>
                            </el-form-item>

                            <el-form-item label="<?php _e('Columns tablet', 'flintotheme') ?>">
                                <el-input-number v-model="root_store.data.archive.layout_grid_col_tablet" :min="1" :max="6" size="small"></el-input-number>
                                <div style="line-height: normal"><small><?php _e('Responsive grid column on tablet', 'flintotheme') ?></small></div>
                            </el-form-item>

                            <el-form-item label="<?php _e('Columns mobile', 'flintotheme') ?>">
                                <el-input-number v-model="root_store.data.archive.layout_grid_col_mobile" :min="1" :max="6" size="small"></el-input-number>
                                <div style="line-height: normal"><small><?php _e('Responsive grid column on mobile', 'flintotheme') ?></small></div>
                            </el-form-item>
                        </div>
                    </transition>
                </el-collapse-item>

                <!-- Blog Detail -->
                <el-collapse-item name="defail">
                    <template slot="title">
                        <span class="fi flaticon-settings-2"></span> <?php _e('Blog Detail', 'flintotheme') ?>
                    </template>

                    <el-form-item class="theme-extends-margin" label="<?php _e('Layout', 'flintotheme'); ?>">
                        <el-select v-model="root_store.data.detail.layout" popper-class="theme-extends-customize-zindex">
                            <?php 
                                $blog_single_layouts = flintotheme_blog_single_layouts();
                                if( ! empty($blog_single_layouts) ) {
                                    foreach( $blog_single_layouts as $value => $data ) {
                                        echo '<el-option label="'. $data['label'] .'" value="'. $value .'"></el-option>';
                                    }
                                }
                            ?>
                        </el-select>
                    </el-form-item>

                    <el-form-item class="theme-extends-margin" label="<?php _e('Post Headings', 'flintotheme'); ?>">
                        <el-switch
                            on-text="" off-text=""
                            on-value="yes" off-value="no"
                            v-model="root_store.data.detail.post_headings"></el-switch>
                        <div style="line-height: normal"><small><?php _e('On/off post headings', 'flintotheme') ?></small></div>
                    </el-form-item>

                    <el-form-item class="theme-extends-margin" label="<?php _e('Navigation', 'flintotheme'); ?>">
                        <el-switch
                            on-text="" off-text=""
                            on-value="yes" off-value="no"
                            v-model="root_store.data.detail.navigation"></el-switch>
                        <div style="line-height: normal"><small><?php _e('On/off navigation older & newer', 'flintotheme') ?></small></div>
                    </el-form-item>

                    <el-form-item class="theme-extends-margin" label="<?php _e('Post related', 'flintotheme'); ?>">
                        <el-switch
                            on-text="" off-text=""
                            on-value="yes" off-value="no"
                            v-model="root_store.data.detail.post_related"></el-switch>
                        <div style="line-height: normal"><small><?php _e('On/off post related', 'flintotheme') ?></small></div>
                    </el-form-item>

                    <transition name="theme-extends-fade">
                        <div v-show="(root_store.data.detail.post_related == 'yes')">
                            <el-form-item class="theme-extends-margin" label="<?php _e('Post related image placeholder', 'flintotheme'); ?>">
                                <el-switch
                                    on-text="" off-text=""
                                    on-value="yes" off-value="no"
                                    v-model="root_store.data.detail.post_related_image_placeholder"></el-switch>
                                <div style="line-height: normal"><small><?php _e('On/off post related image placeholder', 'flintotheme') ?></small></div>
                            </el-form-item>
                            
                            <el-form-item label="<?php _e('Post related limit', 'flintotheme') ?>">
                                <el-input-number v-model="root_store.data.detail.post_related_limit" :min="1" :max="6" size="small"></el-input-number>
                                <div style="line-height: normal"><small><?php _e('Post related limit (min => 1 | max => 6)', 'flintotheme') ?></small></div>
                            </el-form-item>
                        </div>
                    </transition>
                </el-collapse-item>
            </el-collapse>
        </el-form>
    </div>
</div>
<textarea hidden id="theme-extends-blog-settings-field" class="theme-extends-margin" <?php echo implode('', array($this->get_link('blog_settings'))); ?>>
    <?php echo esc_textarea( $this->value('blog_settings') ); ?>
</textarea>
		<?php
	}
}
