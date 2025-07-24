import { createSlice } from '@reduxjs/toolkit';
import type { ServicesItemType } from '../../types/ServicesItemType';

interface ServicesState {
  items: ServicesItemType[];
}

const initialState: ServicesState = {
  items: [
    {
      id: '1',
      title: 'Weddings',
      description:
        'Live bands or DJs to create the perfect wedding atmosphere.',
      imgUrl: '/images/wedding.jpeg',
    },
    {
      id: '2',
      title: 'Corporate Events',
      description:
        'Stylish background music or engaging performances for business gatherings.',
      imgUrl: '/images/corporate.jpg',
    },
    {
      id: '3',
      title: 'Private Parties',
      description:
        'Energetic music to set the mood for birthdays or home celebrations.',
      imgUrl: '/images/party.jpeg',
    },
    {
      id: '4',
      title: 'Ceremonies',
      description: 'Elegant and emotional music for meaningful ceremonies.',
      imgUrl: '/images/corporative.jpeg',
    },
    {
      id: '5',
      title: 'Festivals',
      description:
        'Dynamic stage performances for outdoor or large public events.',
      imgUrl: '/images/party2.jpeg',
    },
    {
      id: '6',
      title: 'Custom Events',
      description: 'We adapt to your vision with tailored musical experiences.',
      imgUrl: '/images/festival.jpeg',
    },
  ],
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;
