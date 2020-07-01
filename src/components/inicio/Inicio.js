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
import livroImg from '../../assets/imgs/img_livro_acenda.png';
import camisetaImg from '../../assets/imgs/img_camisa_solidaria.png';
import passaroImg from '../../assets/imgs/img_passaro.png';

export default function Inicio(){
    window.scrollTo(0, 0); 

  
    return(
        <>           
            <Container className="class_inicio_container" fluid={true}>
                <Row>
                <Col sm="2">
                </Col>
                    <Col sm="8" className="class_inicio_col_1_womansmile_img">
                        <div className="class_inicio_col_1_texts">
                            <h3>Lorem Ipsum dolor sit amet</h3>
                            <h4>Lorem Ipsum dolor sit amet</h4>
                            <button className="class_inicio_col_1_button">LOREM IPSUM</button>
                        </div>


                    </Col>
                <Col sm="2">
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
                            <Col sm="8" className="class_inicio_col_viagem_img">
                                
                            </Col>
                            <Col sm="4">
                                <Row>
                                    <Col className="class_inicio_col_woman_group_img">

                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="class_inicio_col_woman_yoda">
                                    
                                    </Col>
                                    <Col className="class_inicio_col_condicionador">
                                    
                                    </Col>
                                </Row>
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
                    <Col sm="2"></Col>
                    <Col className="class_inicio_col_itens">
                        <Row>
                            <Col className="class_inicio_col_especialists_sugest">
                                <span>Nossos&nbsp;Especialistas <strong>Recomendam</strong></span>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                    <li><img src={livroImg} className="class_inicio_img_iten"></img></li>
                                    <li>description</li>
                                    <li>Carol Rache</li>
                                    <li>4545,89</li>
                                </ul>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                    <li><img src={camisetaImg} className="class_inicio_img_iten"></img></li>
                                    <li>description</li>
                                    <li>Tamanho Unico</li>
                                    <li>4545,89</li>
                                </ul>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                    <li><img src={passaroImg} className="class_inicio_img_iten"></img></li>
                                    <li>description</li>
                                    <li>4545,89</li>
                                </ul>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                <li><img src={livroImg} className="class_inicio_img_iten"></img></li>
                                    <li>description</li>
                                    <li>Carol Rache</li>
                                    <li>4545,89</li>
                                </ul>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                <li><img src={camisetaImg} className="class_inicio_img_iten"></img></li>
                                    <li>description</li>
                                    <li>Tamanho Unico</li>
                                    <li>4545,89</li>
                                </ul>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                    <li><img src={passaroImg} className="class_inicio_img_iten"></img></li>
                                    <li>description</li>
                                    <li>4545,89</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="2"></Col>

                </Row>
            </Container>
            
        </>
    );
}
