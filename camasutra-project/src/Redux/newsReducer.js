const newsReducer = (state, action) => {
    const SET_NEWS_VALUE = 'SET-NEWS-VALUE';
    const ADD_NEWS = 'ADD-NEWS';
    if(!action) return state;
    switch(action.type) {
        case ADD_NEWS: {
            let message = state.newsPageInput;
            const id = Math.floor(Math.random() * 100);
            const autor = "SOMEONE";
            const img = "http://ldfl.ru/wp-content/uploads/2017/09/news.jpg"
            const newMessage = {
                id,
                img,
                autor,
                message,
            };
            let {newsData} = state;
            newsData.push(newMessage);
            message = "";
        }
            break;
        case SET_NEWS_VALUE: {
            let newNews = action.newValue;
            state.newsPageInput = newNews;
        }
        default:
            break;
    }
    return state;
}
export default newsReducer;