import React, { Component } from "react";

import classes from "./App.css";
import Rectangle from "./components/Rectangle/Rectangle";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  onToggle = () => {
    this.setState(prevState => ({
      showBlock: !prevState.showBlock
    }));
  }

  render() {
    return (
      <div className={classes.App}>
        <h1>React Animations</h1>
        <Button clicked={this.onToggle}>Toggle</Button>
        <br/>
        <Rectangle display={this.state.showBlock}/>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
        {this.state.modalIsOpen ? <Backdrop show/> : null}
        <Button clicked={this.showModal}>Open Modal</Button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;