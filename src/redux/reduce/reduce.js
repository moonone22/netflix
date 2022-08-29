import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
    name:"Slice",
    initialState:{
        popular:{},
        topRate:{},
        upComing:{},
        loading:true,
        movieList:[],
        movieListLoading:true,
        year:{
            year:"",
        },
        nowInnerText:{
            text:"popularity.desc",
        },
        genres:{
            num:[]
        },
        genresList:[],
        page:1,
        movieList2:{}
    },
    reducers:{
        getMovie(state,action){
            state.popular = action.payload.popular
            state.topRate = action.payload.topRate
            state.upComing = action.payload.upComing
            state.loading = false
        },
        getMovieList(state,action){
            state.movieList = action.payload.movieList.results
            state.movieListLoading = false
        },
        getSearch(state,action){
            state.movieList = action.payload.movieList.results
            state.movieListLoading = false
        },
        getSort(state,action){
            state.movieList = action.payload.movieList.results
            state.movieList2 = action.payload.movieList
        },
        changyear(state,action){
            state.year = action.payload
        },
        changInnerText(state,action){
            state.nowInnerText = action.payload
        },
        changegenres(state,action){
            
            state.genres.num = [...state.genres.num,action.payload]
        },
        deletegenres(state,action){
            //현재 action은 e.target.innerText 선택한 값 "27"
            //state.genres.num 배열에서 갖고 온 "27"을 제외하고 다시 넣자
            const array = [...state.genres.num].filter(item => item !== action.payload)
            state.genres.num = [...array]

        },
        getGeresList(state,action){

                state.genresList = action.payload
        },
        getPage(state,action){
            state.page = action.payload
        },
    }
})

export default stateSlice
export const reduxActions = stateSlice.actions;