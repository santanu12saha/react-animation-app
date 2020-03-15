import React, { Component } from "react";

import classes from "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    modalIsOpen: false
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className={classes.App}>
        <h1>React Animations</h1>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal}/>
        <Backdrop show={this.state.modalIsOpen}/>
        <Button clicked={this.showModal}>Open Modal</Button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;