<?php
/**
 * Class to create a Action Control.
 *
 */
class Flintotheme_Jetpack_Portfolio_Control extends WP_Customize_Control {

	public function render_content() {
		?>
		<div id="theme-extends-jetpack-portfolio-action-control">
			<el-form ref="form" :model="root_store.data" label-width="140px" label-position="left">
                <el-collapse class="theme-extends-collapse-custom-ui-customize-settings" accordion>
					<!-- shop page -->
					<el-collapse-item name="archive">
						<template slot="title">
							<?php _e('Portfolio Archive', 'flintotheme') ?>
                        </template>
                        
                        <el-form-item class="theme-extends-margin" label="<?php _e('Layout', 'flintotheme'); ?>">
							<el-select v-model="root_store.data.archive_layout" popper-class="theme-extends-customize-zindex">
								<?php 
								$jetpack_portfolio_archive_layout = flintotheme_jetpack_portfolio_archive_layout(); 
								if( ! empty($jetpack_portfolio_archive_layout) ) {
                                    foreach( $jetpack_portfolio_archive_layout as $value => $data ) {
                                        echo '<el-option label="'. $data['label'] .'" value="'. $value .'"></el-option>';
                                    }
                                }
								?>
							</el-select>
						</el-form-item>
						
						<div v-show="(root_store.data.archive_layou_allow_grid_col_settings.indexOf(root_store.data.archive_layout) > -1) ? true : false">
							<el-form-item class="theme-extends-margin" label="<?php _e('Grid Columns', 'flintotheme'); ?>">
								<el-input-number v-model="root_store.data.grid_columns" :min="1" :max="12" size="small"></el-input-number>
							</el-form-item>

							<el-form-item class="theme-extends-margin" label="<?php _e('Grid Columns On Tablet', 'flintotheme'); ?>">
								<el-input-number v-model="root_store.data.grid_columns_on_tablet" :min="1" :max="12" size="small"></el-input-number>
							</el-form-item>

							<el-form-item class="theme-extends-margin" label="<?php _e('Grid Columns On Mobile', 'flintotheme'); ?>">
								<el-input-number v-model="root_store.data.grid_columns_on_mobile" :min="1" :max="12" size="small"></el-input-number>
							</el-form-item>
						</div>
                        
                        <el-form-item class="theme-extends-margin" label="<?php _e('Posts per page', 'flintotheme'); ?>">
                            <el-input-number v-model="root_store.data.archive_items_per_page" :min="5" :max="50" size="small"></el-input-number>
						</el-form-item>
						
						<el-form-item class="theme-extends-margin" label="<?php _e('Sidebar', 'flintotheme'); ?>">
                            <el-switch
                                v-model="root_store.data.archive_sidebar"
                                on-text="" off-text=""
                                on-value="on" off-value="off">
                            </el-switch>
                            <div style="line-height: normal"><small><?php _e('Control on / off sidebar', 'flintotheme') ?></small></div>
                        </el-form-item>
                        
				    </el-collapse-item>

					<!-- portfolio single -->
					<el-collapse-item name="single">
						<template slot="title">
							<?php _e('Portfolio Single', 'flintotheme') ?>
                        </template>
                        
                        <el-form-item class="theme-extends-margin" label="<?php _e('Layout', 'flintotheme'); ?>">
							<el-select v-model="root_store.data.single_layout" popper-class="theme-extends-customize-zindex">
								<?php 
								$jetpack_portfolio_single_layout = flintotheme_jetpack_portfolio_single_layout(); 
								if( ! empty($jetpack_portfolio_single_layout) ) {
                                    foreach( $jetpack_portfolio_single_layout as $value => $data ) {
                                        echo '<el-option label="'. $data['label'] .'" value="'. $value .'"></el-option>';
                                    }
                                }
								?>
							</el-select>
                        </el-form-item>

                        <el-form-item class="theme-extends-margin" label="<?php _e('Comment', 'flintotheme'); ?>">
                            <el-switch
                                v-model="root_store.data.single_comment"
                                on-text="" off-text=""
                                on-value="on" off-value="off">
                            </el-switch>
                            <div style="line-height: normal"><small><?php _e('Control on / off comment', 'flintotheme') ?></small></div>
                        </el-form-item>

					</el-collapse-item>
				</el-collapse>
			</el-form>
        </div>
		<textarea hidden id="theme-extends-jetpack-portfolio-settings-field" class="theme-extends-margin" <?php echo implode('', array($this->get_link('jetpack_portfolio_settings'))); ?>>
			<?php echo esc_textarea( $this->value('jetpack_portfolio_settings') ); ?>
		</textarea>
		<?php
	}
}
