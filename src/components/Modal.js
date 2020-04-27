import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    // Reference to the element to which we want to render this Modal
    //if we direclty referncxe the body tag of out index file then this will replace the
    //entire content of the body tag, which we do not want.
    //so we will create a new <div> tag into which this Modal will be rendered
    document.querySelector("#modal")
  );
};

export default Modal;
