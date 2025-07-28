// @store/slices/guestArtistsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GuestArtistType = {
  id: string;
  name: string;
  fullName?: string;
  role: string;
  age?: string;
  bestSong?: string;
  phone?: string;
  mail?: string;
  description?: string;
  imageUrl: string;
  videoUrls: string[];
  galleryImages: string[];
};

interface GuestArtistsState {
  artists: GuestArtistType[];
  selectedGuest: GuestArtistType | null;
  isModalOpen: boolean;
}

const initialState: GuestArtistsState = {
  artists: [
    {
      id: '1',
      name: 'Sabrina C.',
      fullName: 'Sabrina Carpenter.',
      role: 'Vocal',
      age: '26',
      bestSong: 'Because I Liked a Boy',
      phone: '077777777',
      mail: 'sabrina@mail.com',
      imageUrl: '/images/sabrina.jpeg',
      description:
        'Sabrina is a powerhouse vocalist known for her emotional depth and modern pop charisma. She has taken the stage worldwide with unforgettable performances.',
      galleryImages: [
        '/images/sabrina1.jpeg',
        '/images/sabrina2.jpeg',
        '/images/sabrina3.jpeg',
        '/images/sabrina4.jpeg',
        '/images/sabrina5.jpeg',
        '/images/sabrina6.jpeg',
      ],
      videoUrls: [
        'https://www.youtube.com/embed/maK6Ku3dHP8?si=qZp0olKW5jnY41o5',
        'https://www.youtube.com/embed/REJA05QjC_U?si=QsPAAHxYp5Uy7lh3',
        'https://www.youtube.com/embed/TKdOIMNu6dg?si=X3QhzT-xdoK91CVU',
        'https://www.youtube.com/embed/eVli-tstM5E?si=ZRTSv9CbSc-qbXI5',
      ],
    },
    {
      id: '2',
      name: 'Medison B.',
      fullName: 'Madison Beer',
      role: 'Vocal',
      age: '25',
      bestSong: 'Selfish',
      phone: '077777778',
      mail: 'madison@mail.com',
      imageUrl: '/images/medison.jpeg',
      description:
        'Madison is a soulful singer with a rich voice and deeply personal lyrics. Her performances combine elegance with raw emotional energy.',
      galleryImages: [
        '/images/medison1.jpeg',
        '/images/medison2.jpeg',
        '/images/medison3.jpeg',
        '/images/medison4.jpeg',
        '/images/medison5.jpeg',
        '/images/medison6.jpeg',
        '/images/medison1.jpeg',
        '/images/medison2.jpeg',
        '/images/medison3.jpeg',
        '/images/medison4.jpeg',
        '/images/medison5.jpeg',
        '/images/medison6.jpeg',
      ],
      videoUrls: [
        'https://www.youtube.com/embed/978iHuFKfS4?si=9DbR_fVGqle_kGcZ',
        'https://www.youtube.com/embed/XFR7v5ix5hU?si=wpldtyT49wu-i-jk',
      ],
    },
    {
      id: '3',
      name: 'Weekend.',
      fullName: 'The Weeknd',
      role: 'Keys',
      age: '34',
      bestSong: 'Blinding Lights',
      phone: '077777779',
      mail: 'weeknd@mail.com',
      imageUrl: '/images/weekend.jpeg',
      description:
        'Known for his genre-bending sound and haunting falsetto, The Weeknd delivers unforgettable performances blending R&B, synth-pop, and soul.',
      galleryImages: [
        '/images/weeknd1.jpeg',
        '/images/weeknd2.jpeg',
        '/images/weeknd2.jpeg',
        '/images/weeknd3.jpeg',
        '/images/weeknd4.jpeg',
        '/images/weeknd5.jpeg',
        '/images/weeknd6.jpeg',
      ],
      videoUrls: [
        'https://www.youtube.com/embed/4NRXx6U8ABQ',
        'https://www.youtube.com/embed/M4ZoCHID9GI?si=gtd8Eet8-0xt0KH7',
      ],
    },
    {
      id: '4',
      name: 'Victoria',
      fullName: 'Victoria (Maneskin)',
      role: 'Guitar',
      age: 'Band Avg. Age: 25',
      bestSong: "Beggin'",
      phone: '077777780',
      mail: 'maneskin@mail.com',
      imageUrl: '/images/maneskin.jpeg',
      description:
        'Måneskin is an Italian rock sensation known for high-energy performances, edgy fashion, and a fearless fusion of glam rock and modern style.',
      galleryImages: [
        '/images/victoria1.jpeg',
        '/images/victoria2.jpeg',
        '/images/victoria3.jpeg',
        '/images/victoria4.jpeg',
        '/images/victoria5.jpeg',
        '/images/victoria6.jpeg',
      ],
      videoUrls: [
        'https://www.youtube.com/embed/RVH5dn1cxAQ?si=Lr-BlY1IohIEVWtP',
        'https://www.youtube.com/embed/yOb9Xaug35M?si=9NQQVDQPyTLAanLq',
      ],
    },
    {
      id: '5',
      name: 'Jensen E.',
      fullName: 'Jensen Ackles',
      role: 'Drums',
      age: '41',
      bestSong: 'Soundtrack Hero',
      phone: '077777781',
      mail: 'jensen@mail.com',
      imageUrl: '/images/jensen.jpeg',
      description:
        'Jensen brings powerful rhythms and charismatic stage presence to the drums. A dynamic performer with a passion for rock and cinematic music.',
      galleryImages: [
        '/images/jensen1.jpeg',
        '/images/jensen2.jpeg',
        '/images/jensen3.jpeg',
        '/images/jensen1.jpeg',
        '/images/jensen2.jpeg',
        '/images/jensen3.jpeg',
        '/images/jensen4.jpeg',
        '/images/jensen5.jpeg',
        '/images/jensen6.jpeg',
        '/images/jensen4.jpeg',
        '/images/jensen5.jpeg',
        '/images/jensen6.jpeg',
      ],
      videoUrls: [
        'https://www.youtube.com/embed/C3quk_hPWTc?si=1A1V7P06KZ9Wbyk0',
        'https://www.youtube.com/embed/un2AAqNCYtw?si=C0lOEkE1gFCqlGCD',
      ],
    },
  ],
  selectedGuest: null,
  isModalOpen: false,
};

const guestArtistsSlice = createSlice({
  name: 'guestArtists',
  initialState,
  reducers: {
    openGuestModal(state, action: PayloadAction<GuestArtistType>) {
      state.selectedGuest = action.payload;
      state.isModalOpen = true;
    },
    closeGuestModal(state) {
      state.selectedGuest = null;
      state.isModalOpen = false;
    },
  },
});

export const { openGuestModal, closeGuestModal } = guestArtistsSlice.actions;
export default guestArtistsSlice.reducer;
