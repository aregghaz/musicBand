import { createSlice } from '@reduxjs/toolkit';
import type { MenuItemsType } from '../../types/menuType';

export interface MenuState {
  isOpen: boolean;
  menuItems: MenuItemsType[];
}

const initialState: MenuState = {
  isOpen: false,
  menuItems: [
    // { id: '1', name: 'Home', targetId: 'home' },
    { id: '1', name: 'Portfolio', targetId: 'Portfolio' },
    { id: '2', name: 'Ensembles', targetId: 'Ensembles' },
    { id: '3', name: 'Services', targetId: 'Services' },
    { id: '4', name: 'Guest Artists', targetId: 'Guest' },
    { id: '5', name: 'Contact', targetId: 'contact' },
  ],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
