import { combineReducers } from "redux";
import blogSlice from "../slices/blogSlice";
import experienceSlice from "../slices/experienceSlice";
import navBarSlice from "../slices/navSlice";
import searchSlice from './../slices/searchSlice';


// combine reducers
export const rootReducer = combineReducers({
    navBar: navBarSlice,
    experience: experienceSlice,
    search: searchSlice,
    blog: blogSlice
});
