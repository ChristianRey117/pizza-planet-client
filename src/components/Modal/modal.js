import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const ModalComponent = ({ show, handleClose, optionsModal }) => {
  return (
    <div>
      <Modal isOpen={show} toggle={handleClose} backdrop="static">
        <ModalHeader toggle={handleClose}>{optionsModal?.title}</ModalHeader>
        <ModalBody>{optionsModal?.message}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={optionsModal.redirectTo}>
            Continuar
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent;
