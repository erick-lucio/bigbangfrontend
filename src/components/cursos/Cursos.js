/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './Cursos.css';

/* import urls*/


/*import imgs */
import womanYodaImg from '../../assets/imgs/woman_yoga1.png';

import rightArrowImg from '../../assets/icons/right_arrow.png';

export default function Cursos(){
    window.scrollTo(0, 0); 

  
    return(
        <>           
            <Container className="class_cursos_container">
                <Row className="class_cursos_row_1">
                    <Col md="4">
                        <img src={womanYodaImg} className="class_cursos_imgs"></img>
                        <ul>
                            <li className="class_cursos_data">04 Abr - 05 Abr</li>
                            <li className="class_cursos_tittle">Imersão Vinyasa Flow</li>
                            <li className="class_cursos_description">Por Fernanda Cunha 2 dias de curso</li>
                            <img src={rightArrowImg} className="class_cursos_arrow_img"></img>
                        </ul>
                    </Col>
                    <Col md="4">
                        <img src={womanYodaImg} className="class_cursos_imgs"></img>
                        <ul>
                            <li className="class_cursos_data">04 Abr - 05 Abr</li>
                            <li className="class_cursos_tittle">Imersão Vinyasa Flow</li>
                            <li className="class_cursos_description">Por Fernanda Cunha 2 dias de curso</li>
                            <img src={rightArrowImg} className="class_cursos_arrow_img"></img>
                        </ul>
                    </Col>
                    <Col md="4">
                        <img src={womanYodaImg} className="class_cursos_imgs"></img>
                        <ul>
                            <li className="class_cursos_data">04 Abr - 05 Abr</li>
                            <li className="class_cursos_tittle">Imersão Vinyasa Flow</li>
                            <li className="class_cursos_description">Por Fernanda Cunha 2 dias de curso</li>
                            <img src={rightArrowImg} className="class_cursos_arrow_img"></img>
                        </ul>
                    </Col>
                </Row>
                <Row className="class_cursos_row_2">
                    <button className="class_cursos_button_3">VEJA TODOS OS CURSOS</button>
                    
                </Row>
    
            </Container>
            
        </>
    );
}
