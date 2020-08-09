import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalPopUp = ({ message, show, handleClose, title }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header style={{ backgroundColor: "red" }} closeButton>
          <Modal.Title>{title ? title : "Warning"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer style={{ backgroundColor: "red" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPopUp;
