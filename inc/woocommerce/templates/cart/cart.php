<?php
/**
 * Cart Page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

wc_print_notices();

do_action( 'woocommerce_before_cart' ); ?>

<div class="row" id="theme-extends-woo-cart">
	<div class="col-lg-8">
		<form class="woocommerce-cart-form" <?php do_action('flintotheme_woo_custom_attr_cart_form_wrap'); ?> action="<?php echo esc_url( wc_get_cart_url() ); ?>" method="post">
			<?php do_action( 'woocommerce_before_cart_table' ); ?>

			<table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
				<thead>
					<tr>
						<th class="product-remove">&nbsp;</th>
						<th class="product-thumbnail">&nbsp;</th>
						<th class="product-name"><?php _e( 'Product', 'flintotheme' ); ?></th>
						<th class="product-price"><?php _e( 'Price', 'flintotheme' ); ?></th>
						<th class="product-quantity"><?php _e( 'Quantity', 'flintotheme' ); ?></th>
						<th class="product-subtotal"><?php _e( 'Total', 'flintotheme' ); ?></th>
					</tr>
				</thead>
				<tbody>
					<?php do_action( 'woocommerce_before_cart_contents' ); ?>

					<?php
					foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
						$_product   = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
						$product_id = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );

						if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_cart_item_visible', true, $cart_item, $cart_item_key ) ) {
							$product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );
							?>
							<tr class="woocommerce-cart-form__cart-item <?php echo esc_attr( apply_filters( 'woocommerce_cart_item_class', 'cart_item', $cart_item, $cart_item_key ) ); ?>">

								<td class="product-remove">
									<?php
										// @codingStandardsIgnoreLine
										echo apply_filters( 'woocommerce_cart_item_remove_link', sprintf(
											'<a href="%s" class="remove" aria-label="%s" data-product_id="%s" data-product_sku="%s">&times;</a>',
											esc_url( wc_get_cart_remove_url( $cart_item_key ) ),
											__( 'Remove this item', 'flintotheme' ),
											esc_attr( $product_id ),
											esc_attr( $_product->get_sku() )
										), $cart_item_key );
									?>
								</td>

								<td class="product-thumbnail">
									<?php
										$thumbnail = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key );

										if ( ! $product_permalink ) {
											echo implode('', array($thumbnail));
										} else {
											printf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $thumbnail );
										}
									?>
								</td>

								<td class="product-name" data-title="<?php esc_attr_e( 'Product', 'flintotheme' ); ?>">
									<?php
										if ( ! $product_permalink ) {
											echo apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key ) . '&nbsp;';
										} else {
											echo apply_filters( 'woocommerce_cart_item_name', sprintf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $_product->get_name() ), $cart_item, $cart_item_key );
										}

										// Meta data.
										echo wc_get_formatted_cart_item_data( $cart_item );

										// Backorder notification.
										if ( $_product->backorders_require_notification() && $_product->is_on_backorder( $cart_item['quantity'] ) ) {
											echo '<p class="backorder_notification">' . esc_html__( 'Available on backorder', 'flintotheme' ) . '</p>';
										}
									?>
								</td>

								<td class="product-price" data-title="<?php esc_attr_e( 'Price', 'flintotheme' ); ?>">
									<?php
										echo apply_filters( 'woocommerce_cart_item_price', WC()->cart->get_product_price( $_product ), $cart_item, $cart_item_key );
									?>
								</td>

								<td class="product-quantity" data-title="<?php esc_attr_e( 'Quantity', 'flintotheme' ); ?>">
									<?php
										if ( $_product->is_sold_individually() ) {
											$product_quantity = sprintf( '1 <input type="hidden" name="cart[%s][qty]" value="1" />', $cart_item_key );
										} else {
											$product_quantity = woocommerce_quantity_input( array(
												'input_name'  => "cart[{$cart_item_key}][qty]",
												'input_value' => $cart_item['quantity'],
												'max_value'   => $_product->get_max_purchase_quantity(),
												'min_value'   => '0',
											), $_product, false );
										}

										echo apply_filters( 'woocommerce_cart_item_quantity', $product_quantity, $cart_item_key, $cart_item );
									?>
								</td>

								<td class="product-subtotal" data-title="<?php esc_attr_e( 'Total', 'flintotheme' ); ?>">
									<?php
										echo apply_filters( 'woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal( $_product, $cart_item['quantity'] ), $cart_item, $cart_item_key );
									?>
								</td>
							</tr>
							<?php
						}
					}
					?>

					<?php do_action( 'woocommerce_cart_contents' ); ?>

					<tr>
						<td colspan="6" class="actions">

							<?php if ( wc_coupons_enabled() ) { ?>
								<div class="coupon">
									<!-- <label for="coupon_code"><?php _e( 'Coupon:', 'flintotheme' ); ?></label>  -->
					<input type="text" name="coupon_code" class="input-text" id="coupon_code" value="" placeholder="<?php esc_attr_e( 'Coupon code', 'flintotheme' ); ?>" />
					<input type="submit" class="button" name="apply_coupon" value="<?php esc_attr_e( 'Apply coupon', 'flintotheme' ); ?>" />
									<?php do_action( 'woocommerce_cart_coupon' ); ?>
								</div>
							<?php } ?>

							<input type="submit" class="button" name="update_cart" value="<?php esc_attr_e( 'Update cart', 'flintotheme' ); ?>" />

							<?php do_action( 'woocommerce_cart_actions' ); ?>

							<?php wp_nonce_field( 'woocommerce-cart' ); ?>
						</td>
					</tr>

					<?php do_action( 'woocommerce_after_cart_contents' ); ?>
				</tbody>
			</table>
			<?php do_action( 'woocommerce_after_cart_table' ); ?>
		</form>

			<div class="cart-collaterals">
				<?php
					/**
					 * woocommerce_cart_collaterals hook.
					 *
					 * @hooked woocommerce_cross_sell_display
					 * @hooked woocommerce_cart_totals - 10 - removed
					 */
					do_action( 'woocommerce_cart_collaterals' );
				?>
			</div>
	</div>
	
	<div class="col-lg-4">
		<?php
		$sticky_sidebar_data = wp_json_encode(array(
			'topSpacing' => 20,
			'bottomSpacing' => 20,
			'containerSelector' =>  '#theme-extends-woo-cart',
			'innerWrapperSelector' => '.theme-extends-woo-cart-sidebar',
			'resizeSensor' => true,
			'stickyClass' => 'is-affixed',
			'minWidth' => 991,
		));
		?>
		<div class="theme-extends-woo-cart-sidebar" data--sticky-element="<?php echo esc_attr($sticky_sidebar_data); ?>">
			<?php
			/**
			 * flintotheme_woo_cart_pos_right
			 *
			 * @hooked woocommerce_cart_totals - 10
			 */
			?>
			<div class="__inner" <?php do_action('flintotheme_woo_custom_attr_cart_sidebar'); ?>>
				<?php do_action('flintotheme_woo_cart_pos_right'); ?>
			</div>
			<?php ?>
		</div>

	</div>
	
</div>

<?php do_action( 'woocommerce_after_cart' ); ?>
