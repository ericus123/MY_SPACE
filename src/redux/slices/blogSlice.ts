import { createSlice } from "@reduxjs/toolkit";



interface IBlogProps {
    query: string;
    searchBlogs: any[];
    blogs: any[]
}

// Initial state
const initialState: IBlogProps = {
    query: "",
    searchBlogs: [],
    blogs: []
}
// Actual Slice
export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        handleBlogsSearch(state, action) {
            state.searchBlogs = action.payload
        },
        saveBlogs(state, action) {
            state.blogs = action.payload
        },
        handleQueryChange(state, action) {
            state.query = action.payload
        }
    },
});

export const { handleBlogsSearch, saveBlogs, handleQueryChange } = blogSlice.actions;

export default blogSlice.reducer;
