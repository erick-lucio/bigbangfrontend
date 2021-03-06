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
import twitterIcon from '../../assets/icons/twitter_icon.png';
import instagramIcon from '../../assets/icons/instagram_icon.png';
import facebookIcon from '../../assets/icons/facebook_icon.png';

import lockIcon from '../../assets/icons/lock_icon.png';

import masterCardIcon from '../../assets/icons/master_icon.png';
import visaIcon from '../../assets/icons/visa_icon.png';
import boletoIcon from '../../assets/icons/boleto_icon.png';
import americanIcon from '../../assets/icons/america_icon.png';
import cieloIcon from '../../assets/icons/cielo_icon.png';

    export default function Footer() {
      const dispatch_func = useDispatch();
      const store_data = useSelector(state => state)
      function testFunction() {
        alert("test")
    }

      
      return (
        <>
          <Container fluid={true} className="class_footer_container">
              <Row className="class_footer_row_1">
                  <Col md="2">    
                    <span className="class_footer_svg_name">               
                        <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.6551 39.8763C30.813 42.5033 29.3015 43.9796 27.4013 44.7178C25.0261 45.6513 23.5362 44.175 23.0828 41.9388C22.6509 39.7895 22.435 37.575 22.4134 35.3822C22.327 28.348 22.3918 21.2921 22.3702 14.2579C22.3702 12.7816 22.2838 11.3053 22.1327 9.85066C22.0463 8.98223 21.7008 8.15723 20.7939 7.89671C19.8438 7.61447 19.196 8.26579 18.6994 8.96052C17.4038 10.871 16.173 12.825 14.8775 14.7355C14.1217 15.8645 13.4092 17.0368 12.5022 18.0355C11.509 19.1428 10.2566 20.0112 8.61553 19.4684C7.01766 18.9474 6.34828 17.6013 6.19713 16.0816C5.9812 14.1059 5.95961 12.1085 5.89483 10.1112C5.72209 3.79342 5.0743 3.35921 -2.25047e-05 6.15986C-0.0216154 3.72829 2.13767 0.840786 4.36174 0.688812C7.10403 0.493418 7.77341 2.46908 8.27005 4.68355C8.87465 7.48421 8.61553 10.35 8.80987 13.1724C8.89624 14.3447 8.98261 15.6474 10.2998 16.0382C11.5306 16.4072 12.1568 15.2783 12.7398 14.4316C14.2729 12.1737 15.7196 9.85065 17.2527 7.61447C18.5051 5.76908 19.8654 3.70657 22.4997 4.53157C24.9397 5.29144 25.0693 7.6796 25.0909 9.78552C25.1773 17.4493 25.1557 25.1349 25.1773 32.7987C25.1773 33.8408 25.1557 34.9046 25.1989 35.9467C25.3716 41.4395 26.3433 42.1125 31.6551 39.8763Z" fill="white"/>
                        </svg>                            
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.62962 0.227623C11.8537 0.401307 13.7323 1.16118 14.1425 3.70131C14.5312 6.06775 13.1924 7.50065 11.1195 8.23881C9.54325 8.78157 7.90219 9.08552 6.26113 9.47631C5.00874 9.78025 3.99387 10.3881 4.29617 11.821C4.62007 13.4059 5.93723 13.6447 7.2544 13.2105C8.33404 12.8631 9.30572 12.2118 10.3422 11.7125C10.7956 11.4954 11.2491 10.996 11.7241 11.5171C12.1776 11.9947 11.8321 12.4941 11.573 12.95C10.0399 15.5335 4.57688 16.5539 2.24485 14.7302C-0.0655875 12.9283 0.366272 9.2592 3.19494 8.0217C4.87918 7.28354 6.80095 7.00131 8.63634 6.58881C10.0183 6.26315 11.1195 5.63354 10.6661 4.04868C10.2342 2.50723 8.91705 2.42039 7.57829 2.8546C6.77936 3.11512 6.0452 3.50591 5.26785 3.83157C4.59848 4.0921 3.86432 5.32959 3.21653 4.17894C2.74149 3.35394 3.71317 2.6592 4.33936 2.13815C5.87245 0.857229 7.64307 0.292755 9.62962 0.227623Z" fill="white"/>
                        </svg>                               
                        <svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.173645 2.31184C0.411167 1.26973 1.10214 0.813811 1.92267 0.531574C3.26142 0.0539428 4.16832 0.661837 4.72974 1.83421C5.70142 3.87499 5.91735 6.06776 5.93894 8.28223C5.96053 9.71513 5.65823 11.5605 7.47203 12.0164C9.11309 12.4507 9.6961 10.7355 10.4303 9.65C11.9634 7.3921 13.3237 5.00394 14.9 2.78947C15.9364 1.31315 17.2752 -0.0328993 19.3265 0.423022C21.637 0.944074 21.8745 3.00658 22.1336 4.87368C22.3495 6.43684 22.2416 8.04342 22.4791 9.58486C22.6302 10.5618 22.8246 11.7993 24.1201 12.0164C25.243 12.2118 25.8044 11.2783 26.3226 10.5184C27.8989 8.17368 29.3888 5.7421 30.9651 3.39736C32.1527 1.6171 33.4698 -0.228293 35.9746 0.466444C38.5442 1.16118 38.6089 3.44078 38.6521 5.59013C38.6737 7.06644 38.6737 8.54276 38.7169 10.0191C38.7385 10.996 38.976 11.8862 39.7102 12.5809C40.2284 13.0803 41.6535 12.6895 41.2865 14.0572C41.0705 14.8171 40.3148 15.121 39.5806 15.3164C38.5226 15.5987 37.702 15.0776 37.1838 14.2309C35.9962 12.3638 36.2985 10.171 35.9098 8.13026C35.6291 6.67565 36.4713 4.56973 34.5495 3.98355C32.3902 3.31052 31.9583 5.63355 31.0514 6.91447C29.4536 9.12894 28.0716 11.4737 26.4306 13.6664C25.4805 14.9474 24.1849 16.0329 22.4143 15.5335C20.6221 15.0559 20.147 13.5362 19.9743 11.8645C19.8232 10.4099 19.6288 8.95526 19.4777 7.47894C19.3265 6.13289 19.4993 4.41776 17.9878 3.96184C16.2171 3.41907 15.5478 5.19934 14.7488 6.37171C13.6476 8.02171 12.6975 9.80197 11.5963 11.452C10.9053 12.4941 10.128 13.5362 9.22106 14.3612C6.73788 16.5539 4.557 15.8592 3.60691 12.6678C3.15346 11.1263 3.26142 9.54144 3.11027 7.97828C2.89434 6.04605 4.25469 3.22368 0.627093 2.94144C0.432757 2.96315 0.281609 2.50723 0.173645 2.31184Z" fill="white"/>
                        </svg>                             
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0291 4.24408C14.1371 6.56711 12.7119 7.71776 10.7902 8.32566C9.21389 8.825 7.55125 9.10724 5.93178 9.51974C4.80895 9.80197 3.92365 10.4316 4.13958 11.7125C4.3771 13.102 5.49993 13.623 6.75231 13.2757C7.93992 12.95 9.04115 12.2987 10.1856 11.7776C10.639 11.5605 11.0925 11.0829 11.5891 11.5605C12.0857 12.0382 11.6971 12.5375 11.438 12.9717C9.99124 15.4033 4.70099 16.5105 2.36896 14.8822C-0.114219 13.1454 0.101713 9.62829 2.8656 8.13027C4.63621 7.175 6.62276 6.89276 8.58771 6.52368C9.92646 6.26316 11.1573 5.63355 10.6822 4.02697C10.2504 2.59408 8.89 2.29013 7.57284 2.78948C6.40683 3.22369 5.34878 3.94013 4.26913 4.52632C3.88046 4.72171 3.4702 4.93882 3.1679 4.50461C3.01675 4.2875 2.99516 3.89671 3.05993 3.63618C3.42701 1.92105 7.3785 0.0105282 10.0344 0.292765C12.3449 0.531581 13.8564 1.70395 14.0291 4.24408Z" fill="white"/>
                        </svg>                             
                        <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.9999 40.5553C31.5465 41.1414 31.1362 41.7493 30.618 42.2704C29.4304 43.5079 28.1132 44.702 26.2562 44.1809C24.2481 43.5947 23.7515 41.8362 23.6003 39.9474C23.3844 37.125 23.1901 34.2809 22.9957 31.4585C22.931 30.373 22.823 29.2441 21.5922 28.8967C20.491 28.5711 19.8648 29.4829 19.3249 30.2428C17.7703 32.4789 16.2803 34.7803 14.7688 37.0382C14.0131 38.1888 13.2142 39.2743 11.9834 39.9691C9.91046 41.1414 8.33417 40.6638 7.49205 38.4059C6.86585 36.7125 6.69312 34.9322 6.69312 33.1303C6.69312 25.6618 6.67152 18.1934 6.60674 10.725C6.58515 9.35723 6.45559 7.98947 6.23966 6.64342C5.65666 2.97434 5.09524 2.73553 1.96428 4.81974C1.53242 5.10197 1.12216 5.64474 0.625521 5.25395C0.0425135 4.77631 0.193663 4.05987 0.625521 3.56052C2.09383 1.82368 3.36781 -0.434211 6.1317 0.0434203C8.59328 0.477631 8.874 2.71381 9.13311 4.68947C9.93205 10.877 9.34904 17.0862 9.50019 23.2737C9.58656 26.8559 9.54338 30.4164 9.60816 33.9987C9.62975 35.171 9.86726 36.4737 11.0549 36.9296C12.48 37.4724 13.063 36.0829 13.6892 35.2145C15.395 32.8263 16.9929 30.3513 18.6556 27.9197C19.7568 26.2914 21.0308 24.7717 23.2548 25.4664C25.4573 26.1395 25.6948 28.1586 25.8028 30.0908C25.954 32.5007 25.8028 34.9539 26.1483 37.3204C26.7097 41.1849 27.8325 41.5322 30.8987 39.1441C31.2226 38.9053 31.6329 38.7967 31.9999 38.623C31.9999 39.296 31.9999 39.9257 31.9999 40.5553Z" fill="white"/>
                        </svg>          
                    </span>           
                  </Col>
                  <Col md="2" className="class_footer_col_social_media_icons">
                      <Link><img src={instagramIcon} className="class_footer_img_socialmedia_icons"></img></Link>
                      <Link><img src={facebookIcon} className="class_footer_img_socialmedia_icons"></img></Link>
                      <Link><img src={twitterIcon} className="class_footer_img_socialmedia_icons"></img></Link>
                  </Col>
                  <Col xs="3" sm="3" md="1" className="class_footer_lists">
                    <ul>
                        <span className="class_footer_list_tittle">Institucional</span>
                        <li className="class_footer_list_item"><Link>Sobre Nos</Link></li>
                        <li className="class_footer_list_item"><Link>Contato</Link></li>
                    </ul>
                  </Col>
                  <Col xs="3" sm="3" md="1" className="class_footer_lists">
                    <ul>
                        <span className="class_footer_list_tittle">Loja</span>
                        <li className="class_footer_list_item"><Link>Cadastre-se</Link></li>
                        <li className="class_footer_list_item"><Link>Area do Cliente</Link></li>
                    </ul>
                  </Col>
                  <Col xs="3" sm="3" md="1" className="class_footer_lists">
                    <ul>
                        <span className="class_footer_list_tittle">Atendimento</span>
                        <li className="class_footer_list_item">olofomeht@hanah.com</li>
                        <li className="class_footer_list_item">(31)2515 6205</li>
                    </ul>
                  </Col>
                  <Col md="5" className="class_footer_newsletter_col">
                      <ul>
                      <span xs="12" sm="12" className="class_footer_list_tittle">Assine Nossa Newsletter</span>                            
                      <li><Input className="class_footer_list_input" placeholder="Seu Email"></Input><button xs="12" sm="12" className="class_footer_list_button" onClick={()=>testFunction()}>Assinar</button></li>
                      </ul>
                  </Col>
              </Row>
              <Row className="class_footer_row_2">
                  <Col md="4" className="class_footer_col_copiryght">
                      <span>© 2020 Espaço Namah. Todos os direitos reservados. CNPJ: 19.035.854/0001-31.</span>
                  </Col>
                  <Col md="3" className="class_footer_col_payment_methods">
                    <span>Formas de pagamento:</span>
                    <img src={visaIcon} className="class_footer_payment_imgs_icon"></img>
                    <img src={masterCardIcon} className="class_footer_payment_imgs_icon"></img>
                    <img src={cieloIcon} className="class_footer_payment_imgs_icon"></img>
                    <img src={americanIcon} className="class_footer_payment_imgs_icon"></img>
                    <img src={boletoIcon} className="class_footer_payment_imgs_icon"></img>               
                  </Col>
                  <Col md="2" className="class_footer_secure_website_col">
                    <img src={lockIcon} className="class_footer_lock_img_icon"></img>
                    <span>Site Seguro</span>
                  </Col>
                  <Col md="2" className="class_footer_faq_col">
                    <Link>
                      Duvidas Frequentes 
                    </Link>
                    &nbsp;|	&nbsp;
                    <Link>
                      Politicas Da Loja
                    </Link>
                  </Col>
                  <Col md="1" className="class_footer_made_by">
                    <span>
                      Site por&nbsp;
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

