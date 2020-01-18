import React from 'react';
import s from './News.scss';
import OneNew from "./One new/OneNew";
import { Field, reduxForm } from 'redux-form'

const News = ({newsPage,addNews, updateNews}) => {
    const NewsForm = ({handleSubmit}) => {
        return (
            <form onSubmit={handleSubmit}>
                <Field component={"textarea"} name={"newNewsText"} className={s.textArea} ></Field>
                <button>Add news</button>
            </form>
            )

    };
    const NewsReduxForm = reduxForm({
        form: 'newsForm'
    })(NewsForm);

    const {newsData} = newsPage;
    const onAddNews = ({newNewsText}) => {
        addNews(newNewsText)
    }
    return (
        <div>
            <ul>
                {newsData.map(({id,img,author, message }) => {
                    return <OneNew key={id} img={img} author={author} newsData={newsData} message={message}/>
                })}
                <div>
                    <h4>Please Enter New News</h4>
                    <NewsReduxForm onSubmit={onAddNews}/>
                </div>
            </ul>
        </div>
    )
}
export default News;