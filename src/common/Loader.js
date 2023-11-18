import React from "react";
import { Spinner, Modal } from "react-bootstrap";

export function Loader({ color = "primary", size = "lg", show = false }) {
  const modalStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent", 
    border: "none", 
    boxShadow: "none", 
  };

  const modalBodyStyle = {
    backgroundColor: "transparent", 
    border: "none", 
    boxShadow: "none", 
  };


  return (
    <Modal show={show} centered style={modalStyle}>
      <Modal.Body className="text-center" style={modalBodyStyle}>
        <Spinner variant={color} size={size} animation="border" />
      </Modal.Body>
    </Modal>
  );
}
