/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './Loja.css';

/* import urls*/


/*import imgs */
import perfumeImg from '../../assets/imgs/perfume.png';
import cremeImg from '../../assets/imgs/creme.png';
import ovoPascoaImg from '../../assets/imgs/ovo_pascoa.png';
import desodoranteImg from '../../assets/imgs/desdorante.png';

import hearthIcon from '../../assets/icons/hearth.png';


export default function Loja(){
    window.scrollTo(0, 0); 

  
    return(
        <>           
            <Container className="class_loja_container">
                <Row className="class_loja_row_1">
                    <Col md="3">
                        <img src={ovoPascoaImg} className="class_loja_imgs"></img>
                        <img src={hearthIcon} className="class_loja_hearth_icon"></img>
                        <ul>
                            <li className="class_loja_img_tittle">Ovo de Páscoa de Paçoca</li>
                            <li className="class_loja_img_description">Lorem ipsum dolor</li>
                            <li className="class_loja_img_price">R$ 65,00</li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <img src={hearthIcon} className="class_loja_hearth_icon"></img>
                        <img src={desodoranteImg} className="class_loja_imgs"></img>
                        <ul>
                            <li className="class_loja_img_tittle">Chantighee com Wasabi 200g</li>
                            <li className="class_loja_img_description">Lorem ipsum dolor</li>
                            <li className="class_loja_img_price">R$ 32,00</li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <img src={hearthIcon} className="class_loja_hearth_icon"></img>
                        <img src={perfumeImg} className="class_loja_imgs"></img>
                        <ul>
                            <li className="class_loja_img_tittle">Shampoo Sólido Namah</li>
                            <li className="class_loja_img_description">Lorem ipsum dolor</li>
                            <li className="class_loja_img_price">R$ 49,00</li>
                        </ul>
                    </Col>
                    <Col md="3">
                         <img src={hearthIcon} className="class_loja_hearth_icon"></img>
                         <img src={cremeImg} className="class_loja_imgs"></img>
                         <ul>
                            <li className="class_loja_img_tittle">Condicionador Namah</li>
                            <li className="class_loja_img_description">Lorem ipsum dolor</li>
                            <li className="class_loja_img_price">R$ 69,00   </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="class_loja_row_2">
                    <button className="class_loja_button_1">Veja Todos os Produtos</button>
                
                </Row>
            </Container>
            
        </>
    );
}
