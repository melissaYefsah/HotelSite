// roomSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { ROOM } from '../../app/shared/ROOM';

const roomSlice = createSlice({
  name: 'room',
  initialState: {
    rooms: ROOM,
  },
  reducers: {},
});

export const roomsReducer = roomSlice.reducer;

export const selectAllRooms = (state) => state.room.rooms;

