
/*Component imports */
import React,{useState} from 'react';
import {Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

/*css imports */
import './Page404.css'

/*img imports */



export default function PageNotFound(){

    
        return( 
            <Container className="class_404_page_container" fluid={true}>
                <Row className="class_404_page_row_up">
                    <Col md="12" className="class_404_page_col_up">
                      <span className="class_404_span_tittle">
                            404 Page Not Found
                      </span>
                    </Col>
                </Row>
                <Row className="class_404_page_row_down">
                    <Col md="12" className="class_404_page_col_down">                        

                    </Col>
                </Row>
            </Container>
        )
    
}
