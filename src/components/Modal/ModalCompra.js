import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container,
    Row,
    Col,
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardSubtitle,
    ListGroup,
    ListGroupItem, } from "reactstrap";

const ModalCompra = ({ show, handleClose, optionsModal }) => {
  return (
    <div>
      <Modal isOpen={show} toggle={handleClose} backdrop="static">
        <ModalHeader toggle={handleClose}>{optionsModal?.title}</ModalHeader>
        <ModalBody>{<Container>
          <Row>
            <Col>
            <ListGroup>
                <ListGroupItem>Cliente: {optionsModal?.client}</ListGroupItem>
                <ListGroupItem>Vecindario: {optionsModal?.vecindario}</ListGroupItem>
                <ListGroupItem>Dirección: {optionsModal?.direction}</ListGroupItem>
                <ListGroupItem>{<div>
                    <h5>Detalles de la compra</h5>
                    {optionsModal?.products?.map(product =>{
                        return(<p>{product?.product_name + ' ' + '$' + ' ' +product?.product_price}</p>)
                    })}
                    <p>Envío: $10</p>
                    </div>}</ListGroupItem>
                <ListGroupItem>{'Total: $ ' + optionsModal?.total}
                </ListGroupItem>
              </ListGroup>
            </Col>
            </Row>
            
            <Row style={{marginTop:'5%'}}>
              <Col xs={12}>
                <div>
                  <h6>¡Gracias por su pedido!</h6>
                  <p>Tiempo estimado de entrega: 40 min</p>
                </div>
              </Col>
            </Row>
        </Container>
            }</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={optionsModal.redirectTo}>
            Finalizar
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCompra;