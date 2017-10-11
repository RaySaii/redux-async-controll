import {
    ADD_TODO, FETCH_MOVIE_BEGIN, FETCH_MOVIE_SUCCESS,
    FETCH_PIC_BEGIN, FETCH_PIC_SUCCESS
} from '../actions/action_types';

export type Action= {
    type:string,
    payload?:any,
    error?:string
}

export const todos=(state=[],action:Action)=>{
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}
export const movies=(state={fetching:false,data:[]},action:Action)=>{
    switch (action.type){
        case FETCH_MOVIE_BEGIN:
            return {...state,fetching:true}
        case FETCH_MOVIE_SUCCESS:
            return {...state,fetching:false,data:action.payload}
        default :
            return state
    }
}
export const pictures=(state={fetching:false,data:[]},action:Action)=>{
    switch (action.type){
        case FETCH_PIC_BEGIN:
            return {...state,fetching:true}
        case FETCH_PIC_SUCCESS:
            return {...state,data:action.payload,fetching:false}
        default :
            return state
    }
}