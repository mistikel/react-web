// src/store/claimsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', productId: '1', description: 'Claim for Product 1', status: 'Pending' },
  { id: '2', productId: '2', description: 'Claim for Product 2', status: 'Approved' },
];

const claimsSlice = createSlice({
  name: 'claims',
  initialState,
  reducers: {},
});

export const selectClaims = (state) => state.claims;
export default claimsSlice.reducer;
