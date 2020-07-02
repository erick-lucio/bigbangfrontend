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

import upArrowImg from '../../assets/imgs/up_arrow.png';

import travelImg from '../../assets/imgs/img_woman_praising.png';
import womanSmileImg from '../../assets/imgs/img_woman_inicio.png';
import womanGroup from '../../assets/imgs/img_womans_group.png';
import womanYoda from '../../assets/imgs/img_woman_yoga.png';
import condicionadorImg from '../../assets/imgs/img_condiciodor.png';



export default function Inicio(){
    window.scrollTo(0, 0); 
    function gotoTop(){
        window.scrollTo(0, 0);  
    }
    function alertMsg(){
        alert("test")
    }
  
    return(
        <>           
            <Container className="class_inicio_container" fluid={true}>
                <Row>
                <Col md="2" >
                </Col>
                    <Col md="8" className="class_inicio_col_1_womansmile_img">
                        <img src={womanSmileImg} className="class_inicio_womansmile_img"></img>
                        <div className="class_inicio_col_1_texts">
                            <h3 className="class_inicio_strong_text">Lorem Ipsum dolor sit amet</h3>
                            <h4 className="class_inicio_text_description_1">Lorem Ipsum dolor sit amet</h4>
                            <button className="class_inicio_col_1_button d-none d-lg-flex">LOREM IPSUM</button>
                        </div>


                    </Col>
                <Col md="2">
                </Col>
                </Row>    
                <Row>
                    <Col md="2" >
                        <Row>
                            <Col className="d-none d-md-flex">                                
                                <div className="class_inicio_what_is_namah" onClick={()=>alertMsg()}>
                                    O que e Namah?
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="8">
                        <Row>
                            <Col md="8" className="class_inicio_col_viagem_img ">
                                <img src={travelImg} className="class_inicio_col_img"></img>
                                <span className="class_inicio_col_viagem_tittle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </span>
                                <span className="class_inicio_col_viagem_desc">
                                    Viagem   por Fulano
                                </span>
                            </Col>
                            <Col md="4" className="">
                                <Row>
                                    <Col className="class_inicio_col_woman_group_img">
                                        <img src={womanGroup} className="class_inicio_woman_group_img"></img>
                                        <span className="class_inicio_col_woman_group_tittle">
                                        Namahcast #122
                                        </span>
                                        <span className="class_inicio_col_woman_group_desc">
                                        Nome do episódio do podcast lorem ipsum dolor sit amet consectetur eli...
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="class_inicio_col_woman_yoda">
                                        <img src={womanYoda} className="class_inicio_woman_yoda"></img>
                                        <span className="class_inicio_col_woman_yoda_tittle">
                                        CURSO - 04 ABR
                                        </span>
                                        <span className="class_inicio_col_woman_yoda_desc">
                                        Imersão Vinyasa Flow
                                        </span>
                                    </Col>
                                    <Col className="class_inicio_col_condicionador">
                                        <img src={condicionadorImg} className="class_inicio_condicionador_img"></img>
                                        <span className="class_inicio_col_condicionador_tittle">
                                        Condicionador Namah
                                        </span>
                                        <span className="class_inicio_col_condicionador_desc">
                                        COMPRE AGORA
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="2" >
                        <Row>
                            <Col className="d-none d-md-flex">
                                <div className="class_inicio_up_arrow" onClick={()=>gotoTop()}>
                                    <img src={upArrowImg} className="class_inicio_up_arrow_img"></img>
                                </div>
                            </Col>  
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="2"></Col>
                    <Col className="class_inicio_col_itens">
                        <Row>
                            <Col className="class_inicio_col_especialists_sugest">
                                <span>Nossos&nbsp;Especialistas <strong className="class_inicio_strong_text">Recomendam</strong></span>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                    <li><img src={livroImg} className="class_inicio_img_iten"></img></li>
                                    <li><strong>Livro Acenda a Sua Luz</strong></li>
                                    <li>Carol Rache</li>
                                    <li>R$ 4545,89</li>
                                </ul>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                    <li><img src={camisetaImg} className="class_inicio_img_iten"></img></li>
                                    <li><strong>Camiseta Solidária</strong></li>
                                    <li>Tamanho Unico</li>
                                    <li>R$ 4545,89</li>
                                </ul>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                    <li><img src={passaroImg} className="class_inicio_img_iten"></img></li>
                                    <li><strong>Tapete Viagem Pássaro</strong></li>
                                    <li>R$ 4545,89</li>
                                </ul>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                <li><img src={livroImg} className="class_inicio_img_iten"></img></li>
                                    <li><strong>Livro Acenda a Sua Luz</strong></li>
                                    <li>Carol Rache</li>
                                    <li>R$ 4545,89</li>
                                </ul>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                <li><img src={camisetaImg} className="class_inicio_img_iten"></img></li>
                                    <li><strong>Camiseta Solidária</strong></li>
                                    <li>Tamanho Unico</li>
                                    <li>R$ 4545,89</li>
                                </ul>
                            </Col>
                            <Col className="class_inicio_col_itens_img">
                                <ul>
                                    <li><img src={passaroImg} className="class_inicio_img_iten"></img></li>
                                    <li><strong>Tapete Viagem Pássaro</strong></li>
                                    <li>R$ 4545,89</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="2"></Col>

                </Row>
            </Container>
            
        </>
    );
}
