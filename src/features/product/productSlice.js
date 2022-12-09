import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: ['Home', 'Gallery', 'Contact', 'TechnicalSpecification']
}
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})
export const selectProducts = state => state.product.products;
export const productReducer = productSlice.reducer;