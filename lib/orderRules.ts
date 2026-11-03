// Store-wide order rules, shared by the browser (cart, checkout) and the server (lib/orderPricing).

/** Orders below this value (cart total before coupons and fees) cannot be placed. */
export const MIN_ORDER_AMOUNT = 2000;

/** Given free with every order. Change the wording here and it changes across the whole site. */
export const FREE_GIFT = "1 Lighter";

/** Delivery is free from this order value, so every order that meets the minimum delivers free. */
const FREE_DELIVERY_FROM = 399;
const DELIVERY_FEE = 50;

export function deliveryFee(subtotal: number) {
  return subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE;
}

/** How much more the customer must add to reach the minimum order (0 when reached). */
export function amountToMinimum(subtotal: number) {
  return Math.max(0, MIN_ORDER_AMOUNT - subtotal);
}
