import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>;

};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>


}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Yana" id="1"/>
                <DialogItem name="Taras" id="2"/>
                <DialogItem name="Yulia" id="3"/>
                <DialogItem name="Vasya" id="4"/>
            </div>


            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>

    )
}

export default Dialogs;