import { createSlice } from "@reduxjs/toolkit";



interface IExperienceProps {
    active: number
}

// Initial state
const initialState: IExperienceProps = {
    active: 0
}
// Actual Slice
export const experienceSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {
        handleActive(state, action) {
            state.active = action.payload
        }
    },
});

export const { handleActive } = experienceSlice.actions;

export default experienceSlice.reducer;
