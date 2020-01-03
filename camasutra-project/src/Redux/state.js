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
            id: 2,
            img: 'https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568102-stock-illustration-female-face-avatar-round-flat.jpg',
            name: 'Alisa'
        }, {
            id: 3,
            img: 'https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568116-stock-illustration-female-face-avatar-round-flat.jpg',
            name: 'Milka'
        }]
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
                console.log('DISPATCH', action.type);
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
            default:
                break;
        }
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