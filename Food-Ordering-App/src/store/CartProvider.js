import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCart = (id) => {};

  const cartContext = {
    item: 0,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
