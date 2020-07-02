/*Component imports */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


/*functions import */
import axios from 'axios';
import { useCookies } from 'react-cookie';

/*css imports */
import './Podcasts.css';

/* import urls*/


/*import imgs */
import dancingImg from '../../assets/imgs/dancing.png';
import womanGroupImg from '../../assets/imgs/woman_group_little.png';
import beachDanceImg from '../../assets/imgs/beach_dancing.png';

import playIcon from '../../assets/icons/play_icon.png';

export default function Podcasts(){
    window.scrollTo(0, 0); 

  
    return(
        <>           
            <Container className="class_podcasts_container">
            <Row className="class_podcasts_row_1">
                    <Col md="4">
                        <img src={dancingImg} className="class_podcasts_imgs"></img>
                        <ul>
                            <li className="class_podcasts_namecast">Namacast #123</li>
                            <li className="class_podcasts_tittle">Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore</li>
                            <li className="class_podcasts_description">Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor</li>
                            <img src={playIcon} className="class_podcasts_play_icon"></img>
                        </ul>
                    </Col>
                    <Col md="4">
                        <img src={womanGroupImg} className="class_podcasts_imgs"></img>
                        <ul>
                            <li className="class_podcasts_namecast">Namacast #123</li>
                            <li className="class_podcasts_tittle">Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore</li>
                            <li className="class_podcasts_description">Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor</li>
                            <img src={playIcon} className="class_podcasts_play_icon"></img>
                        </ul>
                    </Col>
                    <Col md="4">
                        <img src={beachDanceImg} className="class_podcasts_imgs"></img>
                        <ul>
                            <li className="class_podcasts_namecast">Namacast #123</li>
                            <li className="class_podcasts_tittle">Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore</li>
                            <li className="class_podcasts_description">Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor</li>
                            <img src={playIcon} className="class_podcasts_play_icon"></img>
                        </ul>
                    </Col>
                </Row>
                <Row className="class_podcasts_row_2">
                    <button className="class_podcasts_button_3">VEJA TODOS OS podcasts</button>
                    
                </Row>
    
            </Container>
            
        </>
    );
}
