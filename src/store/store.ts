import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './slices/aboutSlice';
import buttonReducer from './slices/buttonSlice';
import mediaReducer from './slices/mediaSlice';
import menuReducer from './slices/menuSlice';
import socLinksReducer from './slices/socLinksSlice';
import teamMenuReducer from './slices/teamMenuSlice';
import teamItemsReducer from './slices/teamItemSlice';
import modalReducer from './slices/modalSlice';
import personaReducer from './slices/personaSlice';
import servicesReducer from './slices/servicesSlice';
import guestArtistsReducer from './slices/guestArtistsSlice';
import portfolioReducer from './slices/portfolioSlice';

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    button: buttonReducer,
    media: mediaReducer,
    menu: menuReducer,
    soc: socLinksReducer,
    teamMenu: teamMenuReducer,
    teamItems: teamItemsReducer,
    modal: modalReducer,
    persona: personaReducer,
    services: servicesReducer,
    guestArtists: guestArtistsReducer,
    portfolio: portfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
