<?php
/**
 * Class to create a Action Control.
 *
 */
class Flintotheme_Taxonomy_Heading_Bar_Control extends WP_Customize_Control {
	public $type = 'textarea';

	public function render_content() {
    ?>
    <div id="theme-extends-taxonomy-heading-bar-action-control">
        <div class="theme-extends-message">
            <span class="ion-information-circled"></span>
            <?php _e('Options control taxonomy title & breadcrumb.', 'flintotheme'); ?>
        </div>
        <div class="theme-extends-margin">
            <el-row :gutter="10">
                <!-- listing settings -->
                <el-col :span="24" v-if="Object.keys(taxonomy_heading_bar_data).length" v-for="(item, index) in taxonomy_heading_bar_data" :key="index">
                    <div class="taxonomy-heading-setting-item" :item="item" @click="select_taxonomy_options($event, index, item)">
                        <strong>{{ item.label }}</strong>
                        <span class="ion-ios-arrow-right"></span>
                    </div>
                </el-col>

                <!-- new header layout ui -->
                <el-col class="" :span="24">
                    <div class="taxonomy-heading-setting-item add-new-item">
                        <el-popover
                            placement="top"
                            title="<?php _e('Select taxonomy custom heading bar', 'flintotheme'); ?>"
                            width="210"
                            trigger="click"
                            v-model="taxonomies_popover"
                            popper-class="theme-extends-popover-ui theme-extends-customize-zindex">
                            <div class="add-taxonomy-heading-option" slot="reference">
                                <div class="__inner">
                                    <span class="ion-plus-round"></span> <?php _e('New taxonomy options', 'flintotheme'); ?>
                                </div>
                            </div>

                            <ul v-if="taxonomy_data.length > 0" class="theme-extends-element-taxonomies-items">
                                <li class="custom-taxonomy-item" v-for="(taxonomy, index) in taxonomy_data" :key="index" @click="add_taxonomy_settings($event, taxonomy)">
                                    <strong>{{ taxonomy.label }}</strong> <small>{{ taxonomy.posttype }}</small>
                                </li>
                            </ul>
                        </el-popover>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!-- -->
        <div id="theme-extends-taxonomy-heading-settings-panel" :class="taxonomy_heading_bar_panel_class">
            <div class="_inner" v-if="taxonomy_current_edit" >
                <div class="heading">
                    <div class="back-handle" @click="edit = ''">
                        <i title="<?php echo esc_attr( 'Back', 'flintotheme' ); ?>" class="ion-ios-arrow-left"></i>
                    </div>
                    <span>{{ taxonomy_current_edit.label }}</span>
                </div>
                <br />
                <el-form ref="formTaxonomyHeadingBar" :model="taxonomy_current_edit" label-width="100px" label-position="left">
                    <el-form-item label="<?php _e('Heading Bar', 'flintotheme'); ?>">
                        <el-switch
                            v-model="taxonomy_current_edit.display"
                            on-text="" off-text=""
                            on-value="true"
                            off-value="false"></el-switch>
                        <div style="line-height: normal;"><small><?php _e('show/hide heading bar.', 'flintotheme') ?></small></div>
                    </el-form-item>

                    <hr />

                    <transition name="theme-extends-fade">
                        <div v-show="(taxonomy_current_edit.display == 'true')">
                            <el-form-item label="<?php _e('Title Page', 'flintotheme'); ?>">
                                <el-switch
                                    v-model="taxonomy_current_edit.title_display"
                                    on-text="" off-text=""
                                    on-value="true"
                                    off-value="false"></el-switch>
                                <div style="line-height: normal;"><small><?php _e('show/hide title Page.', 'flintotheme') ?></small></div>
                            </el-form-item>

                            <el-form-item label="<?php _e('Breadcrumb', 'flintotheme'); ?>">
                                <el-switch
                                    v-model="taxonomy_current_edit.breadcrumb_display"
                                    on-text="" off-text=""
                                    on-value="true"
                                    off-value="false"></el-switch>
                                <div style="line-height: normal;"><small><?php _e('show/hide breadcrumb.', 'flintotheme') ?></small></div>
                            </el-form-item>

                            <hr />

                            <el-form-item label="<?php _e('Content Alignment', 'flintotheme'); ?>">
                                <el-radio-group v-model="taxonomy_current_edit.content_align" size="small">
                                <el-radio-button label="text-left"><?php _e('Left', 'flintotheme'); ?></el-radio-button>
                                <el-radio-button label="text-center"><?php _e('Center', 'flintotheme'); ?></el-radio-button>
                                <el-radio-button label="text-right"><?php _e('Right', 'flintotheme'); ?></el-radio-button>
                                </el-radio-group>
                                <div style="line-height: normal;"><small><?php _e('choose content alignment.', 'flintotheme') ?></small></div>
                            </el-form-item>

                            <hr />

                            <el-form-item label="<?php _e('Background Type', 'flintotheme'); ?>">
                                <el-radio-group v-model="taxonomy_current_edit.background_type" size="small">
                                <el-radio-button label="color"><?php _e('Color', 'flintotheme'); ?></el-radio-button>
                                <el-radio-button label="image"><?php _e('Image', 'flintotheme'); ?></el-radio-button>
                                <el-radio-button label="video"><?php _e('Video', 'flintotheme'); ?></el-radio-button>
                                </el-radio-group>
                                <div style="line-height: normal;"><small><?php _e('choose background type.', 'flintotheme') ?></small></div>
                            </el-form-item>

                            <!-- background color -->
                            <div v-show="taxonomy_current_edit.background_type == 'color'">
                                <el-form-item label="<?php _e('Gradient', 'flintotheme'); ?>">
                                    <el-switch
                                        v-model="taxonomy_current_edit.background_gradient"
                                        on-text="" off-text=""
                                        on-value="true"
                                        off-value="false"></el-switch>
                                    <div style="line-height: normal;"><small><?php _e('on/off background gradient.', 'flintotheme') ?></small></div>
                                </el-form-item>

                                <el-form-item label="<?php _e('Color', 'flintotheme'); ?>">
                                    <bears-color-picker-field v-model="taxonomy_current_edit.background_color" />
                                    <!-- <el-color-picker v-model="taxonomy_current_edit.background_color"></el-color-picker> -->
                                    <div style="line-height: normal;"><small><?php _e('choose color.', 'flintotheme') ?></small></div>
                                </el-form-item>

                                <el-form-item v-show="taxonomy_current_edit.background_gradient == 'true'" label="<?php _e('Color 2', 'flintotheme'); ?>">
                                    <bears-color-picker-field v-model="taxonomy_current_edit.background_color2" />
                                    <!-- <el-color-picker v-model="taxonomy_current_edit.background_color2"></el-color-picker> -->
                                    <div style="line-height: normal;"><small><?php _e('choose color 2.', 'flintotheme') ?></small></div>
                                </el-form-item>
                            </div>

                            <!-- background image -->
                            <div v-show="taxonomy_current_edit.background_type == 'image'">
                                <wp-media-field :params="wp_media_field_params" name="background_image" :data-map="taxonomy_current_edit"></wp-media-field>

                                <el-form-item label="<?php _e('Size', 'flintotheme'); ?>">
                                    <el-select v-model="taxonomy_current_edit.background_size" placeholder="<?php esc_attr_e('bg size', 'flintotheme'); ?>" popper-class="theme-extends-customize-zindex">
                                        <el-option
                                        v-for="s_item in bg_image_size"
                                        :key="s_item.value"
                                        :label="s_item.label"
                                        :value="s_item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="<?php _e('Position', 'flintotheme'); ?>">
                                    <el-select v-model="taxonomy_current_edit.background_position" placeholder="<?php esc_attr_e('bg position', 'flintotheme'); ?>" popper-class="theme-extends-customize-zindex">
                                        <el-option
                                        v-for="p_item in bg_image_position"
                                        :key="p_item.value"
                                        :label="p_item.label"
                                        :value="p_item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="<?php _e('Repeat', 'flintotheme'); ?>">
                                    <el-select v-model="taxonomy_current_edit.background_repeat" placeholder="<?php esc_attr_e('bg repeat', 'flintotheme'); ?>" popper-class="theme-extends-customize-zindex">
                                        <el-option
                                        v-for="r_item in bg_image_repeat"
                                        :key="r_item.value"
                                        :label="r_item.label"
                                        :value="r_item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="<?php _e('Attachment', 'flintotheme'); ?>">
                                    <el-select v-model="taxonomy_current_edit.background_attachment" placeholder="<?php esc_attr_e('bg attachment', 'flintotheme'); ?>" popper-class="theme-extends-customize-zindex">
                                        <el-option
                                        v-for="a_item in bg_image_attachment"
                                        :key="a_item.value"
                                        :label="a_item.label"
                                        :value="a_item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="<?php _e('Parallax Effect', 'flintotheme'); ?>">
                                    <el-switch
                                        v-model="taxonomy_current_edit.background_image_parallax"
                                        on-text="" off-text=""
                                        on-value="true"
                                        off-value="false"></el-switch>
                                    <div style="line-height: normal;"><small><?php _e('on/off background parallax effect.', 'flintotheme'); ?></small></div>
                                </el-form-item>
                            </div>

                            <!-- background video -->
                            <div v-show="taxonomy_current_edit.background_type == 'video'">
                                <el-form-item label="<?php _e('Video Url', 'flintotheme'); ?>">
                                    <el-input placeholder="<?php esc_attr_e( 'https://vimeo.com/110138539', 'flintotheme' ) ?>" v-model="taxonomy_current_edit.background_video_url"></el-input>
                                </el-form-item>
                                <div class="theme-extends-message">
                                    <span class="ion-information-circled"></span>
                                    <?php echo sprintf(
                                        '%1$s <el-tooltip content="%4$s" placement="top" popper-class="theme-extends-customize-zindex"><u>Youtube</u></el-tooltip> %2$s <el-tooltip content="%5$s" placement="top" popper-class="theme-extends-customize-zindex"><u>Vimeo</u></el-tooltip> %3$s',
                                        __('Use video url', 'flintotheme'),
                                        __('or', 'flintotheme'),
                                        __('for background and parallax effect auto enable.', 'flintotheme'),
                                        __('https://www.youtube.com/watch?v=ab0TSkLe-E0', 'flintotheme'),
                                        __('https://vimeo.com/110138539', 'flintotheme')); ?>
                                </div>
                                <br />
                            </div>

                            <hr />

                            <el-form-item label="<?php _e('Background Overlay', 'flintotheme'); ?>">
								<el-switch
									v-model="taxonomy_current_edit.background_overlay_color_display"
									on-text="" off-text=""
		            	            on-value="true"
									off-value="false"></el-switch>
								<div style="line-height: normal;"><small><?php _e('on/off background overlay color.', 'flintotheme') ?></small></div>
							</el-form-item>

							<el-form-item v-show="taxonomy_current_edit.background_overlay_color_display == 'true'" label="<?php _e('Overlay Color', 'flintotheme'); ?>">
                                <bears-color-picker-field v-model="taxonomy_current_edit.background_overlay_color" />
                                <!-- <el-color-picker v-model="taxonomy_current_edit.background_overlay_color" show-alpha></el-color-picker> -->
								<div style="line-height: normal;"><small><?php _e('choose background overlay color.', 'flintotheme') ?></small></div>
                            </el-form-item>

                            <hr />

                        </div>
                    </transition>
                    <div v-if="edit != 'default'">
                        <el-popover
                            ref="popover-taxonomy-remove-settings"
                            placement="top"
                            width="160"
                            v-model="taxonomies_popover_remove_settings"
                            popper-class="theme-extends-popover-ui theme-extends-customize-zindex">
                            <p><?php _e('Are you sure to remove this settings?', 'flintotheme'); ?></p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="taxonomies_popover_remove_settings = false"><?php _e('cancel', 'flintotheme') ?></el-button>
                                <el-button type="primary" size="mini" @click="remove_taxonomy_settings($event, edit)"><?php _e('confirm', 'flintotheme') ?></el-button>
                            </div>
                        </el-popover>
                        <a v-popover:popover-taxonomy-remove-settings href="#!" class="remove-options"><?php _e('Remove', 'flintotheme'); ?> <strong>"{{ taxonomy_current_edit.label }}"</strong> <?php _e('Settings', 'flintotheme'); ?></a>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
    <textarea hidden id="theme-extends-taxonomy-heading-bar-settings-data-field" <?php echo implode('', array($this->get_link('taxonomy_heading_bar_settings'))); ?>><?php echo esc_textarea( $this->value('taxonomy_heading_bar_settings') ); ?></textarea>
    <?php
	}
}
