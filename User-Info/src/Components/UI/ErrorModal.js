import React from "react";
import ReactDOM from "react-dom";

import "./ErrorModal.css";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className="modal-backdrop" onClick={props.onConfirm} />;
};

const Error = (props) => {
  return (
    <div className="error-modal">
      <header>{props.title}</header>
      <div className="align-items">
        <h3>{props.message}</h3>
        <Button type="submit" onClick={props.onConfirm}>
          Okay
        </Button>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Error
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
