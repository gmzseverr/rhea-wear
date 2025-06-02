// features/shoppingCart/shoppingCartSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Başlangıç durumu
const initialState = {
  cart: [],
  payment: {},
  address: {},
};

// Slice oluşturuluyor
const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    // Sepete ürün ekleme
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        // Ürün zaten var, miktarı artır
        existingItem.count += 1;
      } else {
        // Yeni ürün ekle
        state.cart.push({ count: 1, checked: true, product });
      }
    },
    // Sepetten ürün çıkarma
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.product.id !== productId);
    },
    // Sepeti temizleme
    clearCart: (state) => {
      state.cart = [];
    },
    // Ödeme detaylarını ayarlama
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    // Adresi ayarlama
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

// Aksiyonlar ve reducer export ediliyor
export const { addToCart, removeFromCart, clearCart, setPayment, setAddress } =
  shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
