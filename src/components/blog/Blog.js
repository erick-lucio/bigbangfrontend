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
import manRunningImg from '../../assets/imgs/man_running.png';
import womanHalterImg from '../../assets/imgs/woman_halter.png';
import travelImg from '../../assets/imgs/img_woman_praising.png';


export default function Blog(){
    window.scrollTo(0, 0); 

  
    return(
        <>           
            <Container className="class_inicio_container">
                <Row>
                    <Col md="2">
                    </Col>
                    <Col md="8" >
                        <Row className="class_blog_row_1">
                            <Col md="6">
                                <img src={travelImg} className="class_blog_travel_img"></img>
                                <span className="class_blog_text_tittle_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                <span className="class_blog_text_descrip_1">Viagem por Fulano</span>
                            </Col>
                            <Col md="6">
                                <img src={womanHalterImg} className="class_blog_woman_halter_img"></img>
                                <span className="class_blog_text_tittle_2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                <span className="class_blog_text_descrip_2">Desenvolvimento Pessoal</span>
                            </Col>
                        </Row>
                        <Row className="class_blog_row_2">
                            <Col md="4">
                                <img src={manRunningImg} className="class_blog_man_running_img"></img>
                                <ul>
                                    <li><span className="class_blog_tittle_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></li>
                                    <li><span className="class_blog_description_1">Viagem</span></li>
                                    <li><span className="class_blog_sub_desciption_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</span></li>
                                </ul>
                            </Col>
                            <Col md="4">
                            <img src={womanHalterImg} className="class_blog_woman_halter_img2"></img>
                            <ul>
                                <li><span className="class_blog_tittle_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></li>
                                <li><span className="class_blog_description_1">Viagem</span></li>
                                <li><span className="class_blog_sub_desciption_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</span></li>
                            </ul>
                            </Col>
                            <Col md="4" className="class_blog_col_form_1">
                                <ul>
                                    <li><span className="class_blog_form_tittle">Namah no seu e-mail</span></li>
                                    <li><span className="class_blog_form_assign">Assine nossa newsletter</span></li>
                                    <li><input className="class_blog_form_input" placeholder="Seu email"></input></li>
                                    <li><button className="class_blog_form_button">ASSINAR</button></li>
                                    <li> 
                                        <span className="class_blog_form_details">Ao clicar em “assinar”, você concorda em receber
                                              e-mails do Espaço Namah a aceita nossos Termos de Uso
                                              e nossas Políticas de Privacidade.
                                        </span>
                                    </li>
                                </ul>
                                
                                
                               
                                

                            </Col>
                        </Row>
                        <Row className="class_blog_last_row">
                            <button className="class_blog_button_last_row">Veja todos os posts </button>
                        </Row>
                    </Col>
                    <Col md="2">
                    </Col>

                </Row>
    
            </Container>
            
        </>
    );
}
