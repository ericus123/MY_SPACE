import { createSlice } from "@reduxjs/toolkit";
import { navItems } from './../../constants';



interface INavProps {
    isDarkMode: boolean,
    active: string;
    scrollValue: number;
    isMenuOpen: boolean
}

// Initial state
const initialState: INavProps = {
    isDarkMode: false,
    active: navItems[0]?.key || "about",
    scrollValue: 0,
    isMenuOpen: false
}
// Actual Slice
export const navBarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        changeTheme(state, action) {
            state.isDarkMode = action.payload
        },
        handleActive(state, action) {
            state.active = action.payload
        },
        handleScrollValue(state, action) {
            state.scrollValue = action.payload
        },
        handleMenu(state, action) {
            state.isMenuOpen = action.payload
        }
    },
});

export const { changeTheme, handleActive, handleScrollValue, handleMenu } = navBarSlice.actions;

export default navBarSlice.reducer;
