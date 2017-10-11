import {call, put, takeEvery, all} from 'redux-saga/effects';
import {FETCH_MOVIE_BEGIN, FETCH_MOVIE_SUCCESS, FETCH_PIC_BEGIN} from "../actions/action_types";
import services from "../services/index";

function* fetchMovie() {
    try {
        let response = yield services.fetchMovie()
        yield put({type: 'FETCH_MOVIE_SUCCESS', payload: response.results.福利})
    } catch (e) {
        console.log('电影error', e)
    }
}

function* fetchPic() {
    try {
        let response = yield services.fetchPic()
        yield put({type: 'FETCH_PIC_SUCCESS', payload: response.results})
    } catch (e) {
        console.log('图片error', e)
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery('FETCH_MOVIE_BEGIN', fetchMovie),
        takeEvery('FETCH_PIC_BEGIN', fetchPic)
    ])
}