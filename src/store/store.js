import { configureStore } from '@reduxjs/toolkit'
import settingsStore from './settingsSlice'
export default configureStore({
  reducer: {
    settingsStore,
  },
});