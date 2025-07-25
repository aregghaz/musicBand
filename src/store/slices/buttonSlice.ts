import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ButtonType } from '../../types/buttonType';

export interface ButtonState {
  buttons: ButtonType[];
}

const initialState: ButtonState = {
  buttons: [],
};

const buttonSlice = createSlice({
  name: 'buttons',
  initialState,
  reducers: {
    addButton: (state, action: PayloadAction<ButtonType>) => {
      state.buttons.push(action.payload);
    },
  },
});

export const { addButton } = buttonSlice.actions;
export default buttonSlice.reducer;
