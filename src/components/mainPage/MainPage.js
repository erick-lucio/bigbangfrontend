/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import jsonteste from '../../ServerJsonStore';

/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './MainPage.css';

/* import urls*/


/*import imgs */
import img_box from '../../assets/imgs/img_box_exp.png'

export default function MainPage(){
    window.scrollTo(0, 0); 
    const itens = [
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"56,93",product_id:1},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"53,96",product_id:2},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"554,96",product_id:3},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"54,46",product_id:4},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"345,96",product_id:5},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"67,96",product_id:6},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"67,96",product_id:7},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"78,96",product_id:8},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"45,96",product_id:9},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"45,96",product_id:10},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"45,96",product_id:11},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"67,96",product_id:12},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"56,96",product_id:13},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"23,96",product_id:14},
    {img_ulr:img_box,product_tittle:"CAIXA DE PAPELÃO - Para armazanagem de produtos - 25x UN - Embalagens",product_price:"34,96",product_id:15},
    ]
  
    return(
        <>
            
            
            <Container fluid={true} className="class_mainpage_container">
            
                <Row className="class_mainpage_products_row" >
                
                {itens.map((element, i) => {   
                    let product_url = "/product/"+element.product_id
                    return (
                        <Col md="3" sm="6" xs="12" className="class_mainpage_each_product_col" key={i}>
                            <Link to={product_url}> 
                                <img src={element.img_ulr} className="class_mainpage_each_product_img"></img>
                                <h3 className="class_mainpage_each_product_tittle">{element.product_tittle}</h3>                              
                                <h3 className="class_mainpage_each_product_price"><strong>R$ {element.product_price} A Vista</strong></h3>
                            </Link>
                        </Col>
                    ) 
                })}
                </Row>
            </Container>
            
        </>
    );
}
/*
                    <Col md="3" className="class_mainpage_each_product_col" onClick={()=>alert("f")}>
                        <img src={img_box} className="class_mainpage_each_product_img"></img>
                        <h3 className="class_mainpage_each_product_tittle">Caixa de armazanamento</h3>
                        <span className="class_main_page_each_product_description">Caixa feita de acrilico perfeita para Viagens de longa...</span>
                        <h3 className="class_mainpage_each_product_price"><strong>R$ 59,95</strong></h3>
                    </Col>

*/