import { configureStore } from '@reduxjs/toolkit';
import { roomsReducer } from '../features/room/RoomSlice';

export const store = configureStore({
  reducer: {
    room:roomsReducer,
  },
});
