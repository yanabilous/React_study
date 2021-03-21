import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

return (
            <div className={s.item}>

                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXp3DxP80ArpRzsB0XWBG9Ow5GeuefbLrUHw&usqp=CAU'/>
                { props.message }
                <div>
                <span>like</span>
                </div>
            </div>
)


}

export default Post;