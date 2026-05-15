import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileMenuOpen: false,
  activeSection: 'home',
  scrollProgress: 0,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenu: (state, action) => {
      state.mobileMenuOpen = action.payload;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setScrollProgress: (state, action) => {
      state.scrollProgress = action.payload;
    },
  },
});

export const { toggleMobileMenu, setMobileMenu, setActiveSection, setScrollProgress } = uiSlice.actions;

export default uiSlice.reducer;
