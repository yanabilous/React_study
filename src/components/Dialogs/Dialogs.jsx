import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {

    // let dialogsData = [
    //     {id: 1, name: 'Yana'},
    //     {id: 2, name: 'Taras'},
    //     {id: 3, name: 'Yulia'},
    //     {id: 4, name: 'Vasya'},
    //     {id: 5, name: 'Vasya2'},
    //     {id: 6, name: 'Vasya3'}
    // ]
    //
    //  let messagesData = [
    //     {id: 1, message: 'Hi'},
    //     {id: 2, message: 'How are you?'},
    //     {id: 3, message: 'Yo'},
    //     {id: 4, message: 'Yo'}
    // ]

    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    // [
    //              <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //              <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    //              <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    //              <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
    // ];


    let messagesElements = props.state.messagesData.map( message => <Message message={message.message} /> )
                // {/*<Message message={messagesData[0].message} id={messagesData[0].id}/>*/}
                // {/*<Message message={messagesData[1].message} id={messagesData[1].id}/>*/}
                // {/*<Message message={messagesData[2].message} id={messagesData[2].id}/>*/}
                // {/*<Message message={messagesData[3].message} id={messagesData[3].id}/>*/}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;