import { takeEvery, put } from 'redux-saga/effects'
import {
    GET_NEWS
} from "./actionsType";

function* getNews() {
    yield takeEvery(GET_NEWS,getNewsList)
}

function* getNewsList(action) {
    console.log(action)
}

export default getNews
