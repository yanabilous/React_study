import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let posts = props.posts
    let postsElements = posts.map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount}/> )
    let newPostElement = React.createRef()
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
         props.dispatch(action);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                 <div >
                     <button onClick={addPost}>Add post</button>
                 </div>
            </div>

            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;