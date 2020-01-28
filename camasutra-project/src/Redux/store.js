import dialogsReducer from "./reducers/dialogs/dialogsReducer";
import profileReducer from "./reducers/profile/profileReducer";
import newsReducer from "./reducers/news/newsReducer";
import sidebarReducer from "./reducers/sidebar/sidebarReducer";
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
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action );
        this._state.newsPage = newsReducer(this._state.newsPage,action);
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.sidebarData = sidebarReducer(this._state.sidebarData,action);
        this._subscriber(this._state);
    },
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