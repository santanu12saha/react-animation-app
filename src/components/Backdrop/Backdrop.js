import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = props.show ? 'BackdropOpen' : 'BackdropClose';
    return <div className={[classes.Backdrop, classes[cssClasses]].join(' ')}></div>;
};

export default backdrop;