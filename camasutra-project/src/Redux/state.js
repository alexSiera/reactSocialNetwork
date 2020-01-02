import {rerenderEntireTree} from "../render";

const state = {
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
}
window.state = state;
export const addPost = () => {
    let {textAreaValue, posts} = state.profilePage;
    const newPost = {
        id: 1,
        message: textAreaValue,
        likesCount: 14,
    }
    posts.push(newPost);
    textAreaValue = "";
    rerenderEntireTree(state)

}
export const onChange = (postMessage) => {
    state.profilePage.textAreaValue = postMessage;
    rerenderEntireTree(state)

}
export const onDialogTextAreaSubmit = () => {
    const newMessage = {
        id: 5,
        message: state.dialogsPage.dialogTextAreaValue,
        likesCount: 12
    }
    const {messagesData} = state.dialogsPage;
    messagesData.push(newMessage);
    state.dialogsPage.dialogTextAreaValue = "";
    rerenderEntireTree(state);
}
export const onDialogChange = (newMessage) => {
    state.dialogsPage.dialogTextAreaValue = newMessage;
    rerenderEntireTree(state)

}
export default state;