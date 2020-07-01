/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './Inicio.css';

/* import urls*/


/*import imgs */


export default function Inicio(){
    window.scrollTo(0, 0); 

  
    return(
        <>           
            <Container className="class_inicio_container" fluid={true}>
                <Row>
                    <Col>
                        <img>
                        
                        </img>
                    </Col>
                </Row>    
                <Row>
                    <Col sm="2">
                        <Row>
                            <Col>
left
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="8">
                        <Row>
                            <Col sm="8">
                            aaa
                            </Col>
                            <Col sm="4">
                            bbbb
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="2">
                        <Row>
                            <Col>
                            right
                            </Col>  
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    1
                    </Col>
                    <Col>
                    2
                    </Col>
                    <Col>
                    3
                    </Col>
                    <Col>
                    4
                    </Col>
                    <Col>
                    5
                    </Col>
                    <Col>
                    6
                    </Col>
                    <Col>
                    7
                    </Col>
                </Row>
            </Container>
            
        </>
    );
}
