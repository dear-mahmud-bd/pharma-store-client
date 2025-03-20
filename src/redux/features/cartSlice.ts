import { IMedicine } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface initialState {
  medicines: IMedicine[];
}

const initialState: initialState = {
  medicines: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addMedicine: (state, action) => {
      const medicineToAdd = state.medicines.find(
        (medicine) => medicine._id === action.payload._id
      );
      if (medicineToAdd) {
        medicineToAdd.order_quantity! += 1;
        return;
      }
      state.medicines.push({ ...action.payload, order_quantity: 1 });
    },
    incrementOrderQuantity: (state, action) => {
      const medicineToIncrement = state.medicines.find(
        (medicine) => medicine._id === action.payload
      );

      if (medicineToIncrement) {
        medicineToIncrement.order_quantity! += 1;
        return;
      }
    },
    decrementOrderQuantity: (state, action) => {
      const medicineToIncrement = state.medicines.find(
        (medicine) => medicine._id === action.payload
      );
      if (medicineToIncrement && medicineToIncrement.order_quantity! > 1) {
        medicineToIncrement.order_quantity! -= 1;
        return;
      }
    },
    removeMedicine: (state, action) => {
      state.medicines = state.medicines.filter(
        (medicine) => medicine._id !== action.payload
      );
    },
    clearCart: (state) => {
      state.medicines = [];
    },
  },
});

export const orderedMedicinesSelector = (state: RootState) => {
  return state.cart.medicines;
};

export const grandTotalSelector = (state: RootState) => {
  return state.cart.medicines.reduce((acc, medicine) => {
    return acc + medicine.price * medicine.order_quantity!;
  }, 0);
};

export const {
  addMedicine,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeMedicine,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
