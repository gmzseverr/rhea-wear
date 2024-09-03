const shoppingCartReducer = (state = initialState, action) => {
  console.log("Reducer action:", action);

  switch (action.type) {
    case ADD_TO_CART:
      const { product, count: addCount } = action.payload; // Değişkeni yeniden adlandır
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, count: item.count + addCount }
            : item
        );

        console.log("Updated cart with existing product:", updatedCart);
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const newCartItem = {
          count: addCount,
          checked: true,
          product,
        };
        const updatedCart = [...state.cart, newCartItem];

        console.log("Adding new product to cart:", newCartItem);
        return {
          ...state,
          cart: updatedCart,
        };
      }

    case UPDATE_CART_ITEM:
      const { productId, count } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.product.id === productId ? { ...item, count } : item
      );

      console.log("Updated cart item:", updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };

    case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );

      console.log("Cart after removal:", filteredCart);
      return {
        ...state,
        cart: filteredCart,
      };

    default:
      return state;
  }
};
