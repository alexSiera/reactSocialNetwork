import React from 'react';
import {addNewsAC as addNews } from "../../Redux/reducers/newsReducer";
import News from "./News";
import {connect} from "react-redux";

const NewsContainer = (props) => {
    return <News {...props}/>
}
const mapStateToProps = ({newsPage}) => ({newsPage: newsPage});

export default connect(mapStateToProps, {
    addNews,
})(NewsContainer);