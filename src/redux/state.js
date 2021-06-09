
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY ='UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE ='SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: 'it\'s my first post', likesCount: 11},
                {id: 3, message: 'it\'s my first post', likesCount: 11}
            ],
            newPostText: 'it-study.com1'

        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'}
            ],
            dialogsData: [
                {id: 1, name: 'Yana'},
                {id: 2, name: 'Taras'},
                {id: 3, name: 'Yulia'},
                {id: 4, name: 'Vasya'},
                {id: 5, name: 'Vasya2'},
                {id: 6, name: 'Vasya3'}
            ],
            newMessageBody: ""
        },

    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default store;
window.store = store;
