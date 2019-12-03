<?php
/**
 * Class to create a Action Control.
 *
 */
class Flintotheme_WooCommerce_Control extends WP_Customize_Control {

	public function render_content() {
		?>
		<div id="theme-extends-woocommerce-action-control">
			<el-form ref="form" :model="root_store.data" label-width="140px" label-position="left">
				<el-collapse class="theme-extends-collapse-custom-ui-customize-settings" accordion>
					<!-- shop page -->
					<el-collapse-item name="shop">
						<template slot="title">
							<span class="fi flaticon-shopping-cart"></span> <?php _e('Shop', 'flintotheme') ?>
						</template>
						<el-form-item class="theme-extends-margin" label="<?php _e('Layout', 'flintotheme'); ?>">
							<el-select v-model="root_store.data.shop_layout" popper-class="theme-extends-customize-zindex">
								<?php
								$woo_shop_layout = flintotheme_woo_shop_layout();
								foreach($woo_shop_layout as $value => $label) {
									echo sprintf('<el-option label="%s" value="%s"></el-option>', $label, $value);
								}
								?>
							</el-select>
						</el-form-item>

				    	<div class="theme-extends-margin">
							<el-form-item label="<?php _e('Columns', 'flintotheme') ?>">
								<el-select v-model="root_store.data.shop_page_columns" popper-class="theme-extends-customize-zindex">
									<el-option label="<?php esc_attr_e( '2 Columns' ) ?>" value="2"></el-option>
									<el-option label="<?php esc_attr_e( '3 Columns' ) ?>" value="3"></el-option>
									<el-option label="<?php esc_attr_e( '4 Columns' ) ?>" value="4"></el-option>
									<el-option label="<?php esc_attr_e( '6 Columns' ) ?>" value="6"></el-option>
								</el-select>
					    		<!-- <el-input-number v-model="root_store.data.shop_page_columns" :min="1" :max="6" size="small"></el-input-number> -->
							</el-form-item>
						</div>

						<div class="theme-extends-margin">
							<el-form-item label="<?php _e('Products per page', 'flintotheme') ?>">
					    	<el-input-number v-model="root_store.data.shop_page_products_per_page" :min="1" :max="100" size="small"></el-input-number>
							</el-form-item>
						</div>

						<hr class="theme-extends-margin" />

						<!-- shop_archive_ajax_load_more_infinite_scroll -->
						<el-form-item class="theme-extends-margin" label="<?php esc_attr_e( 'Ajax load more infinite scroll', 'flintotheme' ) ?>">
							<el-switch
								on-text="" off-text=""
								on-value="yes" off-value="no"
								v-model="root_store.data.shop_archive_ajax_load_more_infinite_scroll">
							</el-switch>
						</el-form-item>

						<hr class="theme-extends-margin" />

						<el-form-item class="theme-extends-margin" label="<?php esc_attr_e( 'Shop archive filter', 'flintotheme' ) ?>">
							<el-switch
								on-text="" off-text=""
								on-value="yes" off-value="no"
								v-model="root_store.data.shop_archive_filter">
							</el-switch>
						</el-form-item>

						<el-form-item class="theme-extends-margin" label="<?php esc_attr_e( 'Filter layouts', 'flintotheme' ) ?>">
							<el-select v-model="root_store.data.shop_filter_layout" popper-class="theme-extends-customize-zindex">
								<el-option label="<?php esc_attr_e( 'Default', 'flintotheme' ) ?>" value="default"></el-option>
								<el-option label="<?php esc_attr_e( 'Off-canvas', 'flintotheme' ) ?>" value="off-canvas"></el-option>
							</el-select>
						</el-form-item>

						<div v-show="root_store.data.shop_filter_layout == 'default'">
							<el-form-item class="theme-extends-margin" label="<?php esc_attr_e( 'Filter columns', 'flintotheme' ) ?>">
								<el-select v-model="root_store.data.shop_filter_default_columns" popper-class="theme-extends-customize-zindex">
									<el-option label="<?php esc_attr_e( '3 columns', 'flintotheme' ) ?>" value="3"></el-option>
									<el-option label="<?php esc_attr_e( '4 columns', 'flintotheme' ) ?>" value="4"></el-option>
								</el-select>
							</el-form-item>
						</div>

				  </el-collapse-item>

					<!-- product detail -->
					<el-collapse-item name="product-detail">
						<template slot="title">
							<span class="fi flaticon-bars"></span> <?php _e('Product Detail', 'flintotheme') ?>
						</template>

						<el-form-item class="theme-extends-margin" label="<?php _e('Layout', 'flintotheme'); ?>">
							<el-select v-model="root_store.data.product_detail_layout" popper-class="theme-extends-customize-zindex">
								<?php
								$product_detail_layout = flintotheme_woo_product_detail_layout();
								foreach($product_detail_layout as $value => $label) {
									echo sprintf('<el-option label="%s" value="%s"></el-option>', $label, $value);
								}
								?>
								<!-- <el-option label="<?php _e('Default', 'flintotheme') ?>" value="default"></el-option>
								<el-option label="<?php _e('Sticky Content', 'flintotheme') ?>" value="product-sticky-content"></el-option> -->
							</el-select>
						</el-form-item>

						<hr class="theme-extends-margin" />

						<el-form-item class="theme-extends-margin" label="Related Products">
							<el-switch
								on-text="" off-text=""
								on-value="yes" off-value="no"
								v-model="root_store.data.product_detail_show_related_products"></el-switch>
						</el-form-item>

						<div v-show="root_store.data.product_detail_show_related_products == 'yes'" class="theme-extends-margin">
							<el-form-item label="<?php _e('Related Products Items', 'flintotheme') ?>">
					    		<el-input-number v-model="root_store.data.product_detail_related_products_items" :min="1" :max="8" size="small"></el-input-number>
							</el-form-item>
							<el-form-item label="<?php _e('Related Products Columns', 'flintotheme') ?>">
					    		<el-input-number v-model="root_store.data.product_detail_related_products_col" :min="1" :max="6" size="small"></el-input-number>
							</el-form-item>
						</div>
					</el-collapse-item>

					<!-- Image Sizes -->
					<el-collapse-item name="image-sizes">
						<template slot="title">
							<span class="fi flaticon-background"></span> <?php _e('Product Image Sizes', 'flintotheme') ?>
						</template>

						<div class="theme-extends-margin">
							<el-form-item label="<?php _e('Thumbnail Image Width', 'flintotheme') ?>">
					    	<el-input-number v-model="root_store.data.thumbnail_image_width" size="small"></el-input-number>
							</el-form-item>
						</div>
						<div class="theme-extends-margin">
							<el-form-item label="<?php _e('Thumbnail Image Height', 'flintotheme') ?>">
					    	<el-input-number v-model="root_store.data.thumbnail_image_height" size="small"></el-input-number>
							</el-form-item>
						</div>
						<el-form-item class="theme-extends-margin" label="Crop">
					    <el-switch
					    	on-text="" off-text=""
					    	on-value="yes" off-value="no"
					    	v-model="root_store.data.thumbnail_image_crop"></el-switch>
						</el-form-item>

						<hr class="theme-extends-margin" />

						<div class="theme-extends-margin">
							<el-form-item label="<?php _e('Gallery Thumbnail Image Width', 'flintotheme') ?>">
					    	<el-input-number v-model="root_store.data.gallery_thumbnail_image_width" size="small"></el-input-number>
							</el-form-item>
						</div>
						<div class="theme-extends-margin">
							<el-form-item label="<?php _e('Gallery Thumbnail Image Height', 'flintotheme') ?>">
					    	<el-input-number v-model="root_store.data.gallery_thumbnail_image_height" size="small"></el-input-number>
							</el-form-item>
						</div>
						<el-form-item class="theme-extends-margin" label="Crop">
					    <el-switch
					    	on-text="" off-text=""
					    	on-value="yes" off-value="no"
					    	v-model="root_store.data.gallery_thumbnail_image_crop"></el-switch>
						</el-form-item>

						<hr class="theme-extends-margin" />

						<div class="theme-extends-margin">
							<el-form-item label="<?php _e('Single Image Width', 'flintotheme') ?>">
					    	<el-input-number v-model="root_store.data.single_image_width" size="small"></el-input-number>
							</el-form-item>
						</div>
						<div class="theme-extends-margin">
							<el-form-item label="<?php _e('Single Image Height', 'flintotheme') ?>">
					    	<el-input-number v-model="root_store.data.single_image_height" size="small"></el-input-number>
							</el-form-item>
						</div>
						<el-form-item class="theme-extends-margin" label="Crop">
					    <el-switch
					    	on-text="" off-text=""
					    	on-value="yes" off-value="no"
					    	v-model="root_store.data.single_image_crop"></el-switch>
						</el-form-item>
					</el-collapse-item>
				</el-collapse>
			</el-form>
    </div>
		<textarea hidden id="theme-extends-woocommerce-settings-field" class="theme-extends-margin" <?php echo implode('', array($this->get_link('woocommerce_settings'))); ?>>
			<?php echo esc_textarea( $this->value('woocommerce_settings') ); ?>
		</textarea>
		<?php
	}
}
