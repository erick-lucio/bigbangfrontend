/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './Blog.css';

/* import urls*/


/*import imgs */


export default function Blog(){
    window.scrollTo(0, 0); 

  
    return(
        <>           
            <Container className="class_inicio_container">
                <Row>
                    <Col sm="2">
                    </Col>
                    <Col sm="8">
                        <Row>
                            <Col sm="6">

                            </Col>
                            <Col sm="6">

                            </Col>
                        </Row>
                        <Row>
                            <Col sm="4">

                            </Col>
                            <Col sm="4">

                            </Col>
                            <Col sm="4">
                                
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                    </Col>
                    <Col sm="2">
                    </Col>

                </Row>
    
            </Container>
            
        </>
    );
}
