import { Posts } from "../components/data/Post";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deletePostById, getPostById, getPostByOther } from "./PostApi";
const initialState = {
    posts: Posts,
    myPosts: {
        posts: [],
        loading: false,
        message: "",
    },
    otherPosts: {
        posts: [],
        loading: false,
        message: "",
    },
    searchPosts: {
        posts: [],
        loading: false,
        message: "",
    },
};

const SELECT_MY_POST = "SELECT_MY_POST";
const SELECT_OTHER_POST = "SELECT_OTHER_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";
const INSERT_POST = "INSERT_POST";

export const selectMyPost = createAsyncThunk(SELECT_MY_POST, async (payload, thunkApi) => {
    const { myId } = thunkApi.getState().users;
    const { posts } = thunkApi.getState().posts;
    if (myId) {
        const myPosts = await getPostById(posts, Number(myId));
        return myPosts;
    } else if (myId === 0 || myId === "0") {
        const myPosts = await getPostById(posts, Number(myId));
        return myPosts;
    } else {
        return;
    }
});

export const selectOtherPost = createAsyncThunk(SELECT_OTHER_POST, async (payload, thunkApi) => {
    const { myId } = thunkApi.getState().users;
    const { posts } = thunkApi.getState().posts;
    if (myId) {
        const myPosts = await getPostByOther(posts, Number(myId));
        return myPosts;
    } else if (myId === 0 || myId === "0") {
        const myPosts = await getPostByOther(posts, Number(myId));
        return myPosts;
    } else {
        return;
    }
});

export const deletePost = createAsyncThunk(DELETE_POST, async (payload, thunkApi) => {
    console.log(thunkApi);
    const { posts } = thunkApi.getState().posts;

    return await deletePostById(posts, payload);
});

export const postSlice = createSlice({
    name: "users",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(selectMyPost.pending, (state, { payload }) => {
                const newPosts = { ...state.myPosts };
                newPosts.loading = true;
                return { ...state, myPosts: newPosts };
            })
            .addCase(selectMyPost.fullfilled, (state, { payload }) => {
                const newPosts = { ...state.myPosts };
                newPosts.loading = true;
                if (payload) {
                    newPosts.posts = payload;
                    return { ...state, myPosts: newPosts };
                } else {
                    newPosts.posts = state.posts;
                    return { ...state, newPosts };
                }
            })
            .addCase(selectMyPost.rejected, (state, { error }) => {
                const newPosts = { ...state.myPosts };
                newPosts.loading = true;
                newPosts.message = error.message;
                return { ...state, myPost: newPosts };
            })
            .addCase(selectOtherPost.pending, (state, { payload }) => {
                const newOtherPosts = { ...state.otherPosts };
                newOtherPosts.loading = true;
                return { ...state, otherPosts: newOtherPosts };
            })
            .addCase(selectOtherPost.fullfilled, (state, { payload }) => {
                const newOtherPosts = { ...state.otherPosts };
                newOtherPosts.loading = true;
                if (payload) {
                    newOtherPosts.posts = payload;
                    return { ...state, otherPosts: newOtherPosts };
                } else {
                    newOtherPosts.posts = state.posts;
                    return { ...state, newOtherPosts };
                }
            })
            .addCase(selectOtherPost.rejected, (state, { error }) => {
                const newOtherPosts = { ...state.otherPosts };
                newOtherPosts.loading = true;
                newOtherPosts.message = error.message;
                return { ...state, otherPosts: newOtherPosts };
            })
            .addCase(deletePost.fullfilled, (state, { payload }) => {
                return { ...state, posts: payload };
            });
    },
});

export default postSlice.reducer;
