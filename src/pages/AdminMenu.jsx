import React, { useState } from 'react';

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, Card, CardBody, Button, CardText, CardTitle, CardSubtitle } from "reactstrap";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";


const cardPaneles = [{
    title:'Sucursales',
    describe:'En este panel usted puede agregar, editar y eliminar sucursales',
    image:'',
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
},
{
    title:'Sucursales',
    describe:'En este panel usted puede agregar, editar y eliminar sucursales',
    image:'',
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
},

{
    title:'Sucursales',
    describe:'En este panel usted puede agregar, editar y eliminar sucursales',
    image:'',
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
},

{
    title:'Sucursales',
    describe:'En este panel usted puede agregar, editar y eliminar sucursales',
    image:'',
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
},

{
    title:'Sucursales',
    describe:'En este panel usted puede agregar, editar y eliminar sucursales',
    image:'',
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
},
{
    title:'Sucursales',
    describe:'En este panel usted puede agregar, editar y eliminar sucursales',
    image:'',
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
}

]


const AdminMenu = ()=>{
const navigate = useNavigate();


    return (<Helmet title='Menu del Administrador'>
        <CommonSection title='Menu del Administrador'/>

       <section>
        <Row>
                <Col lg='12' style={{textAlign:'center'}}>
                    <h1>Dashboard</h1>
                </Col>
            </Row>
       </section>

       <section>
         <Row>
            {cardPaneles.map((item,index)=>{
                return (<Col lg="4" md="6" sm="6" key={index} className="mt-2 mb-5" style={{width:'19rem', marginLeft:'45px'}}>
                
                    <Card
                    style={{
                        width: '18rem'
                    }}
                    >
                    <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                        {item.title}
                        </CardTitle>
                        
                        <CardText>
                        {item.describe}
                        </CardText>
                        <Button className="Warning" >
                        
                        <Link to={item.path} style={{color:'white'}}>{item.buttonText}</Link>
                        </Button>
                    </CardBody>
                    </Card>
                </Col>)
            })}
        </Row>
       </section>
    </Helmet>)
}

export default AdminMenu;