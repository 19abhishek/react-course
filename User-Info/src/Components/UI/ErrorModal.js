import React from "react";

import "./ErrorModal.css";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div className="modal-backdrop" onClick={props.onConfirm}>
      <div className="error-modal">
        <header>{props.title}</header>
        <div className="align-items">
          <h3>{props.message}</h3>
          <Button type="submit" onClick={props.onConfirm}>
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
