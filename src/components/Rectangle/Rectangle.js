import React from 'react';
import classes from './Rectangle.css';
import Transition from 'react-transition-group/Transition';

const animationTiming = {
    enter: 5000,
    exit: 5000
};

const rectangle = (props) => {

    return (
        <Transition 
            in={props.display} 
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            onEnter={() => console.log("[Rectangle Transition Component Enter]")}
            onEntering={() => console.log("[Rectangle Transition Component Entering]")}
            onEntered={() => console.log("[Rectangle Transition Component Entered]")}
            onExit={() => console.log("[Rectangle Transition Component Exit]")}
            onExiting={() => console.log("[Rectangle Transition Component Exiting]")}
            onExited={() => console.log("[Rectangle Transition Component Exited]")}>
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