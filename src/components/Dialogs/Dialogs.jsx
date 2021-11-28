import React from 'react';
import classes from './Dialogs.module.css';
import DialogsAll from './DialogsAll/DialogsAll';
import Message from './Message/Message';



const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogsAll name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.message.map(message => <Message text={message.text} key={message.id} id={message.id} />);
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);



    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} >
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div> <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Введите сообщение"></textarea></div>
                    <div><button onClick={onSendMessageClick}>Отправить</button></div>
                </div>
            </div>

        </div>


    );
}

export default Dialogs;
