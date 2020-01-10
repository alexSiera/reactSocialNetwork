import React from 'react';
import {updateNewsAC as updateNews ,addNewsAC as addNews } from "../../Redux/reducers/newsReducer";
import News from "./News";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}

const NewsContainer = connect(mapStateToProps, {
    addNews,
    updateNews
})(News)
export default NewsContainer;