import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>


            <div className={classes.loginBlock}>
                {props.isAuth ? props.email
                     : <NavLink to={'/login'}>login</NavLink>}

            </div>
            <div className={classes.headerName}> social network </div>

        </header>



    );
}
export default Header;