import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <div>
                <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'/>
            </div>

            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;