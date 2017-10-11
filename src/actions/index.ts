
import {ADD_TODO, FETCH_MOVIE_BEGIN, FETCH_PIC_BEGIN} from './action_types';

export const addTodo=(text:string)=>({type:ADD_TODO, payload:text})
export const fetchMovie=()=>({type:FETCH_MOVIE_BEGIN})
export const fetchPic=()=>({type:FETCH_PIC_BEGIN})