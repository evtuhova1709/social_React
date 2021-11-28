import React from 'react';
import preloader from './../../../asseds/imgs/preloader.gif';
import classes from './Preloaders.module.css';

let Preloaders =(props)=>{
    return <div>
        <img src={preloader} className={classes.preloader} />
    </div>
}
export default Preloaders; 