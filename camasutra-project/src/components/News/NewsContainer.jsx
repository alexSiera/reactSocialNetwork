import React from 'react';
import {addNewsAC as addNews } from "../../Redux/reducers/newsReducer";
import News from "./News";
import {connect} from "react-redux";
import {getNewsPage} from "../../Redux/selectors/newsSelectors";

const NewsContainer = (props) => {
    return <News {...props}/>
};
const mapStateToProps = ({newsPage}) => ({newsPage: getNewsPage(newsPage)});

export default connect(mapStateToProps, {
    addNews,
})(NewsContainer);