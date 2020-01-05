import React from 'react';
import {updateNewsActionCreator,addNewsActionCreator } from "../../Redux/reducers/newsReducer";
import News from "./News";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNews: () => {
            dispatch(addNewsActionCreator())
        },
        updateNews: (newValue) => {
            dispatch(updateNewsActionCreator(newValue))
        }
    }
    }
const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)
export default NewsContainer;