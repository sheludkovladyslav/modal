import styled from "styled-components";

import React from "react";
import "./modal.css";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleKey = (event) => {
    if (event.key === "Escape") {
      this.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKey);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.isOpen !== this.state.isOpen) {
      console.log(`Modal is now ${this.state.isOpen ? "Open" : "Closed"}`);
    }
  }

  render() {
    return (
      <>
        {this.state.isOpen && (
          <div className="backdrop">
            <div className="modal">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                officia ipsa quis distinctio, corrupti impedit consectetur.
                Autem molestiae eligendi impedit.
              </p>

              <p className="modal__close" onClick={this.closeModal}>
                X
              </p>
            </div>
          </div>
        )}

        <button className="modal__open" onClick={this.openModal}>
          Open
        </button>
      </>
    );
  }
}
