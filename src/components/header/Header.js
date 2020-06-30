/*Component imports */
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button,Collapse, Container, Row, Col, Form, FormGroup, Label, Input, FormText,Dropdown, DropdownMenu, DropdownToggle ,DropdownItem  } from 'reactstrap';
import {useSelector,useDispatch}from 'react-redux'


/*functions import */
import axios from 'axios';


/*css imports */
import './Header.css';

/*import imgs */
import store_icon from '../../assets/imgs/img_store.png';
import search_icon from '../../assets/imgs/img_icon_search.png';
import menu_icon from '../../assets/icons/menu_sanduich_icon.png';

export default function Header(){

    return(
        <>
            <Container></Container>
        </>
    );
}