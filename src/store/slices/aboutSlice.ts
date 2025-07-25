import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'AM Music Lab',
  subtitle: "it's a sonic laboratory where tradition meets experimentation",
  paragraphs: [
    'From Armenian folk motifs and Latin grooves to jazz improvisation and cinematic textures, the Lab thrives on fusion — not for the sake of novelty, but to discover truth through music.',
  ],
  finalNote:
    'This is not just a concert. This is a conversation. A journey. A soundscape of possibility.',
  buttonText: 'SEE OUR TOUR',
  infoNumber1: '30+',
  infoNumber2: '4K+',
  infoNumber3: '12+',
  infoText1: 'Millions of copies sold worldwide',
  infoText2: 'Successful shows across the country',
  infoText3: 'Won multiple global music awards',
};
const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
});
export default aboutSlice.reducer;
