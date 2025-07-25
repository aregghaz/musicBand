import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: '1', url: 'https://www.instagram.com/?flo=true', img: <></> },
    { id: '2', url: 'https://www.facebook.com/', img: <></> },
    { id: '3', url: 'https://www.youtube.com/', img: <></> },
  ],
  iconColor: '#FF5252',
};
const socSlice = createSlice({
  name: 'soc',
  initialState,
  reducers: {
    setIconColor: (state, action) => {
      state.iconColor = action.payload;
    },
    updateItems: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const { setIconColor, updateItems } = socSlice.actions;
export default socSlice.reducer;
