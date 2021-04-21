let rerenderEntireTree = () => {
    console.log('state changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'it\'s my first post', likesCount: 11},
            {id: 3, message: 'it\'s my first post', likesCount: 11}
        ],
        newPostText: 'it-study.com'

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
        ]
    },
    sidebarPage: {
        friendsData: [
            {id: 1, name: 'Yana1'},
            {id: 2, name: 'Taras1'},
            {id: 3, name: 'Yulia1'},
        ]

    }

}


export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;