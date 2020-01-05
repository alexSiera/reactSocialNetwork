import React from 'react';
import s from './News.scss';
import OneNew from "./One new/OneNew";
const News = (props) => {
    const newsData = props.newsData;
    const onAddNews = () => {
        props.addNews()
    }
    const onUpdateNews = (e) => {
        props.updateNews(e.target.value);
    }
    return (
        <div>
            <ul>
                {newsData.map(({id,img,autor, message }) => {
                    return <OneNew id={id} img={img} autor={autor} newsData={props.newsData} message={message}/>
                })}
                <textarea className={s.textArea} onChange={onUpdateNews} value={props.newsPageInput}></textarea>
                <button onClick={onAddNews}>Add news</button>
            </ul>
        </div>
    )
}
export default News;