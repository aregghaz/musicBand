import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface MediaState {
  isPlaying: boolean;
  currentTime: number;
  mediaSrc: string;
  isVideoOpen: boolean;
}

const initialState: MediaState = {
  isPlaying: false,
  currentTime: 0,
  mediaSrc: '../video/heroVideo.mp4',
  isVideoOpen: false,
};

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    playPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setMediaSrc: (state, action: PayloadAction<string>) => {
      state.mediaSrc = action.payload;
    },
    toggleVideoOpen: (state) => {
      state.isVideoOpen = !state.isVideoOpen;
    },
  },
});

export const { playPause, setCurrentTime, setMediaSrc, toggleVideoOpen } =
  mediaSlice.actions;
export default mediaSlice.reducer;
