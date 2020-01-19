import React from 'react';
import s from './News.scss';
import OneNew from "./One new/OneNew";
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from "../../utils/validators/valiadators";
import {Textarea} from "../Common/FormsControls/FormsControls";
const maxLength10 = maxLengthCreator(10)
const News = ({newsPage, addNews}) => {
    let NewsForm = ({handleSubmit}) => {
        return (
            <form onSubmit={handleSubmit}>
                <Field component={Textarea} name="newNewsText" className={s.textArea} validate={[required, maxLength10]}></Field>
                <button>Add news</button>
            </form>
        )
    };
    NewsForm = reduxForm({
        form: 'newsForm'
    })(NewsForm);

    const {newsData} = newsPage;
    const onAddNews = ({newNewsText}) => {
        addNews(newNewsText)
    }
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
}
export default News;