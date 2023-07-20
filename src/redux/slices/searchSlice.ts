import { createSlice } from "@reduxjs/toolkit";


interface ISearchProps {
    activeTags: string[];
    searchQuery: string
}

// Initial state
const initialState: ISearchProps = {
    activeTags: [], searchQuery: "",
}
// Actual Slice
export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        handleSearchTag: (state, action) => {

            const data = state.activeTags.includes(action.payload) ? state.activeTags.filter((tag: string) => tag !== action.payload) : [...state.activeTags, action.payload];
            state.activeTags = data;
        },
        handleSearch: (state, action) => {
            state.searchQuery = action.payload
        },
        clearSearchTags: (state) => {
            state.activeTags = [];
        }
    },
});

export const { handleSearchTag, handleSearch, clearSearchTags } = searchSlice.actions;

export default searchSlice.reducer;
