import React,{ useState } from "react";

import {Button, Modal } from "react-bootstrap";


const Example = props => {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>A delicious burger with the following ingredients:</p>
                    <ul>
                        {
                           props.ingredients.map(item => <li key={item.name}>{item.name}: {item.value}</li>)
                        }
                    </ul>
                    <p>Price: <strong>{props.price}</strong> </p>
                    <p>Continue to checkout ?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>Cancle</Button>
                    <Button variant="primary" onClick={props.handleClose}>Continue</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Example;