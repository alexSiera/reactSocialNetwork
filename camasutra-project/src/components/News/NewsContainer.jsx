import React from 'react';
import {updateNewsActionCreator,addNewsActionCreator } from "../../Redux/reducers/newsReducer";
import News from "./News";
import StoreContext from "../../StoreContext";
const NewsContainer = () => {
    return (
        <div>
            <StoreContext.Consumer>{
                (store) => {
                    const state = store.getState();
                    const {newsPage} = state;
                    const dispatch = store.dispatch;
                    const addNews = () => {
                        dispatch(addNewsActionCreator())
                    }
                    const updateNews = (newValue) => {
                        dispatch(updateNewsActionCreator(newValue));
                    }
                    return <News updateNews={updateNews} addNews={addNews} newsData={newsPage.newsData} newsPageInput={newsPage.newsPageInput}/>
                }
            }
            </StoreContext.Consumer>
        </div>
    )
}
export default NewsContainer;