import { createSlice } from "@reduxjs/toolkit";

export const settingsStore= createSlice({
  name: "settingsStore",
  initialState: {
    isDark: localStorage.getItem("isDark"),
    lang:localStorage.getItem("lang")
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark =!state.isDark;
      localStorage.setItem("isDark",state.isDark);
    },
    changeLangTR: (state) => {
      state.lang = "TR";
      localStorage.setItem("lang",state.lang);
    },
    changeLangEN: (state) => {
      state.lang = "EN";
      localStorage.setItem("lang",state.lang);
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, changeLangTR, changeLangEN } = settingsStore.actions;

export default settingsStore.reducer;
