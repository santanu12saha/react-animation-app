import React from 'react';
import classes from './Rectangle.css';
import Transition from 'react-transition-group/Transition';

const rectangle = (props) => {

    return (
        <Transition 
            in={props.display} 
            timeout={1000}
            mountOnEnter
            unmountOnExit>
            {state => {
                const cssClasses = [
                    classes.Rectangle,
                    state === 'entering'
                    ? classes.showRectangle
                    : state === 'exiting' ? classes.hideRectangle : null 
                ];
                
                return (
                    <div className={cssClasses.join(' ')}></div>
                );
            }}
        </Transition>
    );
};

export default rectangle;