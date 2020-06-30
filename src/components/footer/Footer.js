/*Component imports */
import React,{useState,useEffect} from 'react';

import { render } from 'react-dom';
import {Link,Redirect} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Checkbox_end from '../material_ui/CheckBox';
import TextArea from '../material_ui/TextArea';
import {useSelector,useDispatch}from 'react-redux'


/*css imports */
import './Footer.css';

/* Img imports*/
import Instagram from '../../assets/imgs/Instagran_icon.png';
import img_visa_icon from '../../assets/imgs/img_visa_icon.png';
import img_mastercard_icon from '../../assets/imgs/img_mastercard_icon.png';
import img_boleto from '../../assets/imgs/img_boleto_icon.png';

    export default function Footer() {
      const dispatch_func = useDispatch();
      const store_data = useSelector(state => state)


          
          
      
      return (
        <>
          <Container >
              <Row className="class_footer_row_1">
                  <Col sm="2">
                    <span>
                      Namah
                    </span>
                  </Col>
                  <Col sm="2">
                      <img></img>
                      <img></img>
                      <img></img>
                  </Col>
                  <Col sm="2">
                    <ul>
                        Institucional
                        <li>Sobre Nos</li>
                        <li>Contato</li>
                    </ul>
                  </Col>
                  <Col sm="2">
                    <ul>
                        Loja
                        <li>Cadastre-se</li>
                        <li>Area do Cliente</li>
                    </ul>
                  </Col>
                  <Col sm="2">
                    <ul>
                        Atendimento
                        <li>olofomeht@hanah.com</li>
                        <li>(31)2515 6205</li>
                    </ul>
                  </Col>
                  <Col sm="2">
                    <ul>
                      Assine Nossa Newsletter
                      <li><Input></Input><Button>Assinar</Button></li>
                    </ul>
                  </Col>
                  
              </Row>
              <Row>
                  <Col sm="3">
                      <span>@2020 copyrigh</span>
                  </Col>
                  <Col sm="3">
                    <span>Formas de pagamento</span>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                  </Col>
                  <Col sm="2">
                    <img></img>
                    <span>Site Seguro</span>
                  </Col>
                  <Col sm="2">
                    <Link>
                      Duvidas Frequentes
                    </Link>
                    |
                    <Link>
                      Politicas Da Loja
                    </Link>
                  </Col>
                  <Col sm="2">
                    <span>
                      Site por
                    </span>
                    <Link>
                      Big bang shop
                    </Link>
                  </Col>
              </Row>
          </Container>
        </>
      )
 



    }

