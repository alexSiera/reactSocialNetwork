import React from 'react';
import s from './News.scss';
import OneNew from "./One new/OneNew";
const News = (props) => {
    //const newsData = props.newsData;
    const textAreaNews = React.createRef();
    const addNews = () => {
        props.dispatch(props.addNewsActionCreator(textAreaNews.current.value))
    }
    const updateNews = (e) => {
        props.dispatch(props.updateNewsActionCreator(e.target.value));
    }
    const addNewsActionCreator = props.addNewsActionCreator;
    return (
        <div>
            <ul>
                {props.newsPage.newsData.map(({id,img,autor, message }) => {
                    return <OneNew id={id} img={img} autor={autor} newsData={props.newsData} message={message}/>
                })}
                <textarea className={s.textArea} onChange={updateNews} value={props.newsPageInput} ref={textAreaNews}></textarea>
                <button onClick={addNews}>Add news</button>
            </ul>
        </div>
    )
}
export default News;