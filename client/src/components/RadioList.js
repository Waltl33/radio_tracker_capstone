
import React, {useEffect, useState} from 'react';
import {radioService} from "../radioService";
import {Container, Row, Col, Table, Button} from "react-bootstrap";

function RadioList({deputy}) {

  let [state , setState] = useState({
    radios : []
});

useEffect(() => {
    radioService.getAllRadios().then((response) => {
        setState({
            ...state,
            radios: response.data
        })
    }).catch((error) => {
        console.log(error);
    });
}, [])

return (
    <>
        <Container className="mt-3">
            <Row>
                <Col>
                    <h3 className="text-primary">Radio List</h3>
                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur deserunt ducimus inventore libero nam officia sit ullam. Ex ipsa nemo nesciunt odio odit quas rerum saepe veritatis vero voluptate!</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover className="shadow-lg text-center">
                        <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Model Number</th>
                      
                        </tr>
                        </thead>
                        <tbody>
                            {
                                state.radios.length > 0 &&
                                state.radios.map(radio => {
                                    return (
                                        <tr key={radio.id}>
                                            
                                            <td>{radio.serial_number}</td>
                                            <td>{radio.model}</td>
                                            <button type="button" class="btn btn-outline-primary" onclick="location.href='#'">Edit</button> 
                                         
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </>
)
};

export default RadioList;