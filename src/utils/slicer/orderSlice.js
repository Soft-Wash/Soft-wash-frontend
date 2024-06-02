import { createSlice } from "@reduxjs/toolkit";

// create initail state
const initialState = {
  orderDetails: {},
  isOrderLoading: false,
  orderError: null,
};

// create order slice
const orderSlice = createSlice({
  name: "order", 
  initialState,
  reducers: {
    setOrderDetails: (state, action) => {
      state.orderDetails = { ...state.orderDetails, ...action.payload };
      console.log(state.orderDetails)
    },
    setOrderLoading: (state, action) => {
      state.isOrderLoading = action.payload;
    },
    setOrderError: (state, action) => {
      state.orderError = action.payload;
    },

    resetOrder: (state) => {
      state.orderDetails = {};
      state.isOrderLoading = false;
      state.orderError = null;
    },
  },
});

export const {setOrderDetails,setOrderLoading,setOrderError,resetOrder}= orderSlice.actions

export const selectOrderDetails = (state) => state.order.orderDetails;
export const selectIsOrderLoading = (state) => state.order.isOrderLoading;
export const selectOrderError = (state) => state.order.orderError;

export default orderSlice.reducer;
