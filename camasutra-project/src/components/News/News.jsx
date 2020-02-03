import React from 'react';
import OneNew from "./One new/OneNew";
import NewsForm from "./NewsForm/NewsForm";

const News = ({newsPage, addNews}) => {
    const {newsData} = newsPage;
    const onAddNews = ({newNewsText}) => {
        addNews(newNewsText)
    };
    return (
        <div>
            <ul>
                {newsData.map(({id, img, author, message}) => {
                    return <OneNew key={id} img={img} author={author} newsData={newsData} message={message}/>
                })}
                <div>
                    <h4>Please Enter New News</h4>
                    <NewsForm onSubmit={onAddNews}/>
                </div>
            </ul>
        </div>
    )
};
export default News;