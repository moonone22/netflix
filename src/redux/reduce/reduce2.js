import { createSlice } from "@reduxjs/toolkit";

const stateSlice2 = createSlice({
    name:"Slice2",
    initialState:{
        loading:true,
        detailMovies:{},
        detailReview:{},
        recommend:{},
        video:{},
        myMovie:[],
        credit:[],
    },
    reducers:{
        getdetailMovies(state,action){
            console.log("getdetailMovies",action.payload)
            state.detailMovies = action.payload.detailMovie
            state.detailReview = action.payload.detailReview
            state.recommend = action.payload.recommend
            state.video = action.payload.video
            state.credit = action.payload.credit
            state.loading  = false
           
        },
        pushMymovie(state,action){
            state.myMovie = [...state.myMovie,action.payload] 
        },
        deleteMymovie(state,action){
            console.log(action.payload)
            state.myMovie = [...action.payload]
        },

    }
})

export default stateSlice2
export const reduxActions2 = stateSlice2.actions;