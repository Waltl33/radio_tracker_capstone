
import React, {useEffect, useState} from 'react';
import { deputyService } from "../deputyService";
import {Container, Row, Col, Table} from "react-bootstrap";

function DeputyList() {

  let [state , setState] = useState({
    deputies : []
});

useEffect(() => {
    deputyService.getAllDeputies().then((response) => {
        setState({
            ...state,
            deputies: response.data
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
                    <h3 className="text-primary">Deputy List</h3>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover className="shadow-lg text-center">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>ID Number</th>
                            <th>Location</th>
                          
                        </tr>
                        </thead>
                        <tbody>
                            {
                                state.deputies.length > 0 &&
                                state.deputies.map(deputy => {
                                    return (
                                        <tr key={deputy.id}>
                                            
                                            <td>{deputy.first_name}</td>
                                            <td>{deputy.last_name}</td>
                                            <td>{deputy.identification_number}</td>
                                            <td>{deputy.location}</td>
                                          
                                         
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
export default DeputyList;