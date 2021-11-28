import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';




const Nav = (props) => {

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>Профиль</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.active}>Сообщения</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>Новости</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/likes" activeClassName={classes.active}>Лайки</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.active}>Настройки</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.active}>Пользователи</NavLink>
      </div>
      <div className={classes.p}>
        <div className={classes.item}>
          <NavLink to="/friends" activeClassName={classes.active}>Друзья</NavLink>
        </div>

      </div>




    </nav>
  );
}
export default Nav;
