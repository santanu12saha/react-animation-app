import React, { Component } from 'react';

import classes from './List.css';
import Button from '../Button/Button';

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
            <li 
                key={index}
                className={classes.ListItem} 
                onClick={() => this.removeItemHandler(index)}>{item}</li>
        ) );

        return (
            <div>
                <Button clicked={this.addItemHandler}>Add Item</Button>
                <p>Click Item to Remove.</p>
                <ul className={classes.List}>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default List;