import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TeamMenuItem = {
  id: string;
  name: string;
};

export type TeamMenuType = {
  teamMenuItems: TeamMenuItem[];
  selectedTeamId?: string;
};

const initialState: TeamMenuType = {
  teamMenuItems: [
    { id: '1', name: 'All' },
    { id: '2', name: 'Quartet' },
    { id: '3', name: 'Trio' },
    { id: '4', name: 'Duet' },
    { id: '5', name: 'Soloists' },
  ],
  selectedTeamId: '1',
};

const teamMenuSlice = createSlice({
  name: 'teamMenu',
  initialState,
  reducers: {
    setSelectedTeam: (state, action: PayloadAction<string>) => {
      state.selectedTeamId = action.payload;
    },
  },
});

export const { setSelectedTeam } = teamMenuSlice.actions;
export default teamMenuSlice.reducer;
