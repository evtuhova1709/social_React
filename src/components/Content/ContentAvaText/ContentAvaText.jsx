import React from 'react';
import Preloaders from '../../common/Preloaders/Preloaders';
import classes from './ContentAvaText.module.css';

const ContentAvaText = (props) => {
    if (!props.profile) {
        return <Preloaders />
    }

    return (
        <div>
            <div>
                <img className={classes.avatarka} src='https://img.joinfo.com/i/2021/01/800x0/5ff44e46ddf2b.jpg'></img>
                <div>Всем привет! Меня зову Поли.</div>
            </div>
            <div className={classes.discriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>
                    {props.profile.fullName}
                </div>
               


            </div>

        </div>


    );
}

export default ContentAvaText;