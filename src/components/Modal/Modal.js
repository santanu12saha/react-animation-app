import React from 'react';
import classes from './Modal.css';
import Button from '../Button/Button';
import Transition from 'react-transition-group/Transition';

const modal = (props) => {

    return (
        <Transition
            mountOnEnter
            unmountOnExit 
            in={props.show} 
            timeout={300}>
            {state => {
                const cssClasses = [
                    classes.Modal,
                    state === 'entering'
                    ? classes.ModalOpen
                    : state === 'exiting' ? classes.ModalClose : null
                ];
                return (
                    
                    <div className={cssClasses.join(" ")}>
                        <h1>A Modal</h1>
                        <Button className="Button" clicked={props.closed}>Dismiss</Button>
                    </div>
                );
            }}
        </Transition>  
    );
};

export default modal;