import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to ="/dialogs/1">Yana</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to ="/dialogs/2">Taras</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to ="/dialogs/3">Yulia</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to ="/dialogs/4">Vasya</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>


            </div>
        </div>

    )
}

export default Dialogs;