import React, { Component } from 'react';

import classes from './List.css';
import Button from '../Button/Button';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render () {
        const listItems = this.state.items.map( (item, index) => (
            <CSSTransition  key={index} 
                            classNames={{
                                enter: classes["fade-enter"],
                                enterActive: classes["fade-enter-active"],
                                exit: classes["fade-exit"],
                                exitActive: classes["fade-exit-active"]
                            }} 
                            timeout={300}>
                <li 
                    className={classes.ListItem} 
                    onClick={() => this.removeItemHandler(index)}>{item}</li>
            </CSSTransition>
        ));

        return (
            <div>
                <Button clicked={this.addItemHandler}>Add Item</Button>
                <p>Click Item to Remove.</p>
                <TransitionGroup
                    component="ul"
                    className={classes.List}>
                        {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;