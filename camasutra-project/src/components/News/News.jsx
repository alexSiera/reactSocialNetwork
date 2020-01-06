import React from 'react';
import s from './News.scss';
import OneNew from "./One new/OneNew";
const News = ({newsPage,addNews, updateNews}) => {
    const {newsData} = newsPage;
    const onAddNews = () => {
        addNews()
    }
    const onUpdateNews = (e) => {
        updateNews(e.target.value);
    }
    return (
        <div>
            <ul>
                {newsData.map(({id,img,autor, message }) => {
                    return <OneNew key={id} img={img} autor={autor} newsData={newsData} message={message}/>
                })}
                <textarea className={s.textArea} onChange={onUpdateNews} value={newsPage.newsPageInput}></textarea>
                <button onClick={onAddNews}>Add news</button>
            </ul>
        </div>
    )
}
export default News;