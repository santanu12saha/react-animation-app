import React from 'react';
import classes from './Rectangle.css';

const rectangle = (props) => {

    const cssClasses = (
        props.display === 'entering'
        ? 'showRectangle'
        : props.display === 'exiting'
        ? 'hideRectangle' : null 
    );

    console.log(cssClasses);

    return (
        <div className={[classes.Rectangle, classes[cssClasses]].join(' ')}></div>
    );
    
};

export default rectangle;