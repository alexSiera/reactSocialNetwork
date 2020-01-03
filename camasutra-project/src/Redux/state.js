const SET_POST_VALUE = 'SET-POST-VALUE';
const ADD_POST = 'ADD-POST';
const SET_DIALOG_VALUE = 'SET-DIALOG-VALUE';
const ADD_DIALOG = 'ADD-DIALOG';
const SET_NEWS_VALUE = 'SET-NEWS-VALUE';
const ADD_NEWS = 'ADD-NEWS';

let store = {
    _subscriber() {
        console.log("no subscriber");
    },
    _state: {
        profilePage: {
            posts: [{
                id: 1,
                message: "Hi how are you ?",
                likesCount: 12
            }, {
                id: 2,
                message: "It's my first post",
                likesCount: 11
            }, {
                id: 3,
                message: "Blabla",
                likesCount: 13
            }, {
                id: 4,
                message: "Dada",
                likesCount: 15
            }],
            textAreaValue: "it-kamasytra"
        },
        dialogsPage: {
            messagesData: [{
                id: 1,
                message: "Ok!",
                likesCount: 12,
            }, {
                id: 2,
                message: "Sure!",
                likesCount: 12,
            }, {
                id: 3,
                message: "Hi dos",
                likesCount: 12,
            }, {
                id: 4,
                message: "Killer",
                likesCount: 12,
            }],
            dialogsData: [{
                id: 1,
                name: "Dimych"
            }, {
                id: 2,
                name: "Alex"
            }, {
                id: 3,
                name: "Anya"
            }, {
                id: 4,
                name: "Killer"
            }],
            dialogTextAreaValue: "",
        },
        sidebarData: [{
            id: 1,
            img: 'https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568252-stock-illustration-female-face-avatar-round-flat.jpg',
            name: 'Andrew'
        }, {
            id: 1,
            img: 'https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568102-stock-illustration-female-face-avatar-round-flat.jpg',
            name: 'Alisa'
        }, {
            id: 3,
            img: 'https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568116-stock-illustration-female-face-avatar-round-flat.jpg',
            name: 'Milka'
        }],
        newsPage: {
            newsData: [{
                id: 1,
                img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                autor: 'Andrew',
                message: 'BBC News provides trusted World and UK news as well as local and regional perspectives. ... The latest global news, sport, weather and documentaries.'
            }, {
                id: 2,
                img: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                autor: 'Nike',
                message: 'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com.'
            }, {
                id: 3,
                img: "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                autor: 'Micle',
                message: 'Latest breaking news, including politics, crime and celebrity. Find stories, updates and expert opinion.'
            }],
            newsPageInput: ''
        }

    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) { // { type: 'ADD-POST'  }
        switch (action.type) {
            case 'ADD-POST': {
                const id = Math.floor(Math.random() * 100);
                const likesCount = Math.floor(Math.random() * 300);
                const newPost = {
                    id,
                    message: this._state.profilePage.textAreaValue,
                    likesCount,
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.textAreaValue = "";
                this._subscriber();
            }
                break;
            case 'SET-POST-VALUE': {
                this._state.profilePage.textAreaValue = action.newValue;
                this._subscriber();
            }
                break;
            case 'ADD-DIALOG': {
                let {dialogTextAreaValue: message} = this._state.dialogsPage;
                const id = Math.floor(Math.random() * 100);
                const likesCount = Math.floor(Math.random() * 300);
                const newMessage = {
                    id,
                    message,
                    likesCount,
                };
                const {messagesData} = this._state.dialogsPage;
                messagesData.push(newMessage);
                this._subscriber();
                message = "";
            }
                break;
            case 'SET-DIALOG-VALUE': {
                let newMessage = action.newValue;
                this._state.dialogsPage.dialogTextAreaValue = newMessage;
                this._subscriber();
            }
                break;
            case 'ADD-NEWS': {
                let message = this._state.newsPage.newsPageInput;
                const id = Math.floor(Math.random() * 100);
                const autor = "SOMEONE";
                const img = "http://ldfl.ru/wp-content/uploads/2017/09/news.jpg"
                const newMessage = {
                    id,
                    img,
                    autor,
                    message,
                };
                let {newsData} = this._state.newsPage;
                newsData.push(newMessage);
                this._subscriber();
                message = "";
            }
                break;
            case 'SET-NEWS-VALUE': {
                let newNews = action.newValue;
                this._state.newsPage.newsPageInput = newNews;
                this._subscriber();
            }
                break;
            default:
                break;
        }
    },
    actionCreatorFunctions: {
        addPostActionCreator () {
            return {
                type: ADD_POST,
            }
        },
        updatePostActionCreator (newValue) {
            return {
                type: SET_POST_VALUE,
                newValue: newValue
            }
        },
        addDialogActionCreator () {
            return {
                type: ADD_DIALOG,
            }
        },
        updateDialogActionCreator (newValue) {
            return {
                type: SET_DIALOG_VALUE,
                newValue: newValue
            }
        },
        addNewsActionCreator () {
            return {
                type: ADD_NEWS,
            }
        },
        updateNewsActionCreator (newValue) {
            return {
                type: SET_NEWS_VALUE,
                newValue: newValue
            }
        }
    }

}
export default store;
window.store = store;
// store - OOP
//
// let store = {
//     _subscriber() {
//         console.log('no subscribers (observers)')
//     },
//     _state: {
//         firstName: 'it-camasytra',
//         lastName: 'it-kamasutra.com'
//     },
//     getState() {
//         return this._state;
//     },
//     subsribe(observer) {
//         this._subscriber = observer;
//     },
//     setFirstName(value) {
//         this._state.firstName = value;
//         this._subscriber();
//     }
// }
//
// let state2 = store.getState();
// store.setFirstName('samuraiJS.com');
// state2 = store.getState();
// store.subsribe(() => {
//     debugger;
//     let state = store.getState();
//     renderPage(state);
// })
// store.setFirstName('youtube.com')