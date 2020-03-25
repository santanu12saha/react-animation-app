import React from 'react';
import classes from './Modal.css';
import Button from '../Button/Button';

const modal = (props) => {
    const cssClasses = (props.show === 'entering' 
    ? "ModalOpen" 
    : props.show === 'exiting' ? "ModalClose" : null);
    return (
        <div className={[classes.Modal, classes[cssClasses]].join(' ')}>
            <h1>A Modal</h1>
            <Button className="Button" clicked={props.closed}>Dismiss</Button>
        </div>
    );
};

export default modal;