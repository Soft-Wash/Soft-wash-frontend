// store.js
import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './../utils/slicer/notificationSlice';
import userReducer from './../utils/slicer/usersSice';
import orderSlice from './../utils/slicer/orderSlice';


const store = configureStore({
	reducer: {
		notifications: notificationsReducer,
		user: userReducer,
		order:orderSlice,
		// Add other reducers if needed
	},
	// Add middleware or other configurations as needed
});

export default store;