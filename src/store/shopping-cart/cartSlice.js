import { createSlice } from '@reduxjs/toolkit';

const caseOfert = (item) => {

  switch (item.ofert) {
    
    case "Porcentaje":
      return item.product_price - ((item.product_price / 100) * item.discount).toFixed(2);
      break;
    case "Cantidad":
      return item.product_price - item.discount;
      break;
    default:
    case "NINGUNA":
      return item.product_price;
      break;
  }
};

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,

  reducers: {
    addItem(state, action) {
      // Take data from action
      const newItem = action.payload;
      //Filtered new data in the initial state
      const existingItem = state.cartItems.find(
        (item) => item.id_product === newItem.id_product
      );
      // Total quantity will increase by 1
      state.totalQuantity++;
      // If there is no new item in existing item, push the data of the new one to the array
      if (!existingItem) {
        state.cartItems.push({
          id_product: newItem.id_product,
          product_name: newItem.product_name,
          product_price: newItem.product_price,
          ofert: newItem.ofert,
          quantity: 1,
          image: newItem.image,
          category: newItem.category,
          discount: newItem.discount
        });
      }
      // If there is new item, this will increase the quantity of its as well as the total price
      // Total price is calculated as the total price of the new item and the price of current item
      else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.product_price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + caseOfert(item) * Number(item.quantity),
        0
      );
    },
    removeItem(state, action) {
      const id_product = action.payload;
      const existingItem = state.cartItems.find((item) => item.id_product === id_product);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id_product !== id_product);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.product_price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + caseOfert(item) * Number(item.quantity),
        0
      );
    },
    deleteItem(state, action) {
      const id_product = action.payload;
      const existingItem = state.cartItems.find((item) => item.id_product === id_product);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id_product !== id_product);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + caseOfert(item) * Number(item.quantity),
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
