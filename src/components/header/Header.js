/*Component imports */
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button,Collapse, Container, Row, Col, Form, FormGroup, Label, Input, FormText,Dropdown, DropdownMenu, DropdownToggle ,DropdownItem  } from 'reactstrap';
import {useSelector,useDispatch}from 'react-redux'


/*functions import */
import axios from 'axios';


/*css imports */
import './Header.css';

/*import imgs */


export default function Header(){

    return(
        <>
            <Container>
                <Row>
                    <Col sm="5">
                        <Row>
                            <Col sm="2">
                                <Link>
                                    INICIO
                                </Link>
                            </Col>
                            <Col sm="2">
                               <Link>
                                    BLOG
                                </Link>
                            </Col>
                            <Col sm="2">
                                <Link>
                                    LOJA
                                </Link>
                            </Col>
                            <Col sm="2">
                                <Link>
                                    PODCASTS
                                </Link>
                            </Col>
                            <Col sm="2">
                                <Link>
                                    CURSOS
                                </Link>
                            </Col>
                            <Col sm="2">
                                <Link>
                                    CONTATO
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="2">
                        <Row>
                            <Col sm="12" className="class_header_center_logo">
                                <Link>
                                    N
                                </Link>
                                <Link>
                                    A
                                </Link>
                                <Link>
                                    M
                                </Link>
                                <Link>
                                    A
                                </Link>
                                <Link>
                                    H
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="5">
                        <Row>
                            <Col sm="2">
                                <img>
                                
                                </img>
                            </Col>
                            <Col sm="2">
                                <img>
                                
                                </img>
                            </Col>
                            <Col sm="2">
                                <img>
                                
                                </img>
                            </Col>
                            <Col sm="2">
                                <img>
                                
                                </img>
                            </Col>
                            <Col sm="2">
                                <img>
                                
                                </img>
                            </Col>
                            <Col sm="2">
                                <img>
                                
                                </img>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}