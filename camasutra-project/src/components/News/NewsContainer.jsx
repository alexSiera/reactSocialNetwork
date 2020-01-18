import React from 'react';
import {addNewsAC as addNews } from "../../Redux/reducers/newsReducer";
import News from "./News";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage
    }
}

const NewsContainer = connect(mapStateToProps, {
    addNews,
})(News)
export default NewsContainer;