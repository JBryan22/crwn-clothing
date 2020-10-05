export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem) {
    cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id ? (cartItem.quantity -= 1) : cartItem
    );

    const indexOfEmptyItem = cartItems.findIndex(
      (cartItem) => cartItem.quantity === 0
    );

    cartItems = [
      ...cartItems.slice(0, indexOfEmptyItem),
      ...cartItems.slice(indexOfEmptyItem + 1),
    ];
  }
};
