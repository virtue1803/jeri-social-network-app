import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../features/user/userSlice'; // Ví dụ khi bạn có slice

export const store = configureStore({
  reducer: {
    // user: userReducer, // Khai báo các reducer tại đây
  },
});