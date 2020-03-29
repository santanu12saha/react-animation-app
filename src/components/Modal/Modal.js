import React from 'react';
import classes from './Modal.css';
import Button from '../Button/Button';
import CSSTransition from 'react-transition-group/CSSTransition';

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = (props) => {

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit 
            in={props.show} 
            timeout={animationTiming}
            classNames={{
                enter: '',
                enterActive: classes.ModalOpen,
                exit: '',
                exitActive: classes.ModalClose
            }}>
            <div className={classes.Modal}>
                <h1>A Modal</h1>
                <Button className="Button" clicked={props.closed}>Dismiss</Button>
            </div>
        </CSSTransition>  
    );
};

export default modal;