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

          </Container>
        </>
      )
 



    }

