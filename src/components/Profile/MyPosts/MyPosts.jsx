import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likesCount: 10},
    //     {id: 2, message: 'it\'s my first post', likesCount: 11},
    //     {id: 3, message: 'it\'s my first post', likesCount: 11}
    // ]
    let posts = props.posts
    let postsElements = posts.map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount}/> )
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                 <div >
                <button>Add post</button>
                 </div>
            </div>

            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;