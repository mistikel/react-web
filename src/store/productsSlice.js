// src/store/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: '1', name: 'Product 1', description: 'Description for Product 1' },
    { id: '2', name: 'Product 2', description: 'Description for Product 2' },
  ],
  warrantyClaims: [
    { id: '1', productId: '1', description: 'Claim for Product 1', status: 'Pending' },
    { id: '2', productId: '2', description: 'Claim for Product 2', status: 'Approved' },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    updateProduct(state, action) {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct(state, action) {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    deleteClaim(state, action) {
      state.warrantyClaims = state.warrantyClaims.filter((claim) => claim.id !== action.payload);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct, deleteClaim } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectWarrantyClaims = (state) => state.products.warrantyClaims;

export default productsSlice.reducer;
