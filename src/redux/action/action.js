import axios from "axios";
import api from "../../api";
import { reduxActions } from "../reduce/reduce";
import { reduxActions2 } from "../reduce/reduce2";

const API_KEY=process.env.REACT_APP_API_KEY

function getMovies(){
    return async (dispatch) => {
        const popularMovieApi =  api.get(`/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`)

        const topRateApi =  api.get(`/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`)

        const upComingApi =  api.get(`/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`)

        let [popular,topRate,upComing]= await Promise.all([popularMovieApi,topRateApi,upComingApi]) 

        dispatch(reduxActions.getMovie({
                popular:popular.data,
                topRate:topRate.data,
                upComing:upComing.data
            }))
    }
    
}
function getMovieList(list){

    return async (dispatch) => {
       
        const popularMovieApi =  await api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${list.page}`)

        dispatch(reduxActions.getMovieList({
            movieList:popularMovieApi.data,
        }))
    }
}

function getSearchMovie(serach){
    return async (dispatch) => {
        const searchMovieApi =  await api.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${serach}&page=1&include_adult=false`)

        dispatch(reduxActions.getSearch({
            movieList:searchMovieApi.data,
        }))
    }
}

function getVote(eTarget){
   
    return async (dispatch,getState) => {
        let year = getState().state1.year.year
        let genres = getState().state1.genres.num
        let page = getState().state1.page
    

        const VoteApi =  await api.get(`/discover/movie?sort_by=${eTarget}&api_key=${API_KEY}&page=${page}&year=${year}&with_genres=${genres}&include_adult=true&language=ko-KR`)
        
         dispatch(reduxActions.getSort({
            movieList:VoteApi.data,
        }))
        
    }
 }
 
 function getGenres(){
    return async (dispatch) => {
        const genresApi = await api.get(`/genre/movie/list?api_key=${API_KEY}&language=ko-KR`)

        dispatch(reduxActions.getGeresList(genresApi.data))
    }
 }

 function getDetail(id){
    return async (dispatch) => {
        const detailMovieApi = api.get(
            `/movie/${id}?api_key=${API_KEY}&language=ko-KR`
        );

        const detailReviewApi = api.get(
            `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
        );

        const recommendApi = api.get(
            `/movie/${id}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
        );

        const videoApi = api.get(
            `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        );
        const creditAPi = api.get(
            `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        
        let [detailMovie,detailReview,recommend,video,credit] = await Promise.all([detailMovieApi,detailReviewApi,recommendApi,videoApi,creditAPi])
        
        dispatch(reduxActions2.getdetailMovies({
            detailMovie : detailMovie.data,
            detailReview : detailReview.data,     
            recommend : recommend.data, 
            video: video.data,
            credit: credit.data.cast.slice(0,10),
        }))
        
    }
 }


//await은 비동기에서 동기적으로 작동하기 떄문에
//api를 받아오는 시간이 길어지기 때문에
//api를 여러개를 한번에 불러올떄는 동시에 불러버리는게 좋다.
// await pomise.all([]) 을 쓰자 
//마지막에 한번 await을 씀으로써 3개 동시에 다 불러 졌을떄 넘어간다.

//await Promise.all([popularMovieApi,topRateApi,upComingApi])
//0: {data: {…}, status: 200, statusText: '', headers: {…}, config: {…}, …}
//1: {data: {…}, status: 200, statusText: '', headers: {…}, config: {…}, …}
//2: {data: {…}, status: 200, statusText: '', head
//배열 형태로 가져온다.



export const movieAction={
    getMovies,getMovieList,getSearchMovie,getVote,getGenres,getDetail
}