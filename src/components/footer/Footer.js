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
          <Container className="class_footer_root_container" fluid={true}>
              <Row className="class_footer_row1">
                  <Col md="12" xs="12" >
                    <h3 className="class_footer_payment_methods_title">
                      Formas de Pagamentos
                    </h3>
                  </Col>
                  <Col  xs="4" sm="4" md="2" className="class_footer_payment_methods">
                    <img src={img_visa_icon} className="class_footer_each_img_payment_method"></img>
                 
                  </Col>
                  <Col  xs="4" sm="4" md="2" className="class_footer_payment_methods">
                    <img src={img_mastercard_icon} className="class_footer_each_img_payment_method"></img>
                   
                  </Col>
                  <Col xs="4" sm="4" md="2" className="class_footer_payment_methods">
                    <img src={img_boleto} className="class_footer_each_img_payment_method"></img>
                   
                  </Col>
                  
                  
              </Row>
              <Row className="class_footer_row2">
                <Col>
                  <span className="class_footer_adress_tittle">
                  Pedro Leopoldo MG CEP 33600000  Rua 
                  </span>
                   
                </Col>
              </Row>
              <Row className="class_footer_row3">
                <Col>
                    Desenvolvido por <a href="https://dragonborndev.com/" target="_blank">Erick Dev</a> 2020
                </Col>
              </Row>
          </Container>
        </>
      )
 



    }

