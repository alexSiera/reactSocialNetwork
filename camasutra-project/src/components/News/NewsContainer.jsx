import React from 'react';
import {updateNewsActionCreator,addNewsActionCreator } from "../../Redux/reducers/newsReducer";
import News from "./News";
const NewsContainer = (props) => {
    const state = props.store.getState();
    const {newsPage} = state;
    const dispatch = props.store.dispatch;
    const addNews = () => {
        dispatch(addNewsActionCreator())
    }
    const updateNews = (newValue) => {
        dispatch(updateNewsActionCreator(newValue));
    }
    return (
        <div>
            <News updateNews={updateNews} addNews={addNews} newsData={newsPage.newsData} newsPageInput={newsPage.newsPageInput}/>
        </div>
    )
}
export default NewsContainer;