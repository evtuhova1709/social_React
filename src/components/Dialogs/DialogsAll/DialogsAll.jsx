import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsAll = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/ ' + props.id} >{props.name}</NavLink>
        </div>
    );
}
export default DialogsAll;