import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamItem } from '../slices/teamItemSlice';

export type ModalState = {
  isOpen: boolean;
  selectedItem?: TeamItem | null;
};

const initialState: ModalState = {
  isOpen: false,
  selectedItem: undefined,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TeamItem>) => {
      state.isOpen = true;
      state.selectedItem = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedItem = undefined;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
