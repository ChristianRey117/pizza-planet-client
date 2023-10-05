import React, { useState } from 'react';

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col, Card, CardBody, Button, CardText, CardTitle, CardSubtitle } from "reactstrap";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import imageSuc1 from "../assets/images/PizzaPlaneta1.jpg";
import imageSuc2 from "../assets/images/PizzaPlaneta2.jpg";
import imageSuc3 from "../assets/images/PizzaPlaneta3.jpg";

const cardPaneles = [{
    name:'Luna',
    describe:'Con 20 empleados de turno matutino y despertino',
    image:imageSuc1,
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
},
{
    name:'Jupiter',
    describe:'En este panel usted puede agregar, editar y eliminar sucursales',
    image: imageSuc2,
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
},

{
    name:'Marte',
    describe:'En este panel usted puede agregar, editar y eliminar sucursales',
    image: imageSuc3,
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
},

{
    name:'Sucursales',
    describe:'En este panel usted puede agregar, editar y eliminar sucursales',
    image:'',
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
},

{
    name:'Sucursales',
    describe:'En este panel usted puede agregar, editar y eliminar sucursales',
    image:'',
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
},
{
    name:'Sucursales',
    describe:'En este panel usted puede agregar, editar y eliminar sucursales',
    image:'',
    path:'/sucursales-dashboard',
    buttonText:'Ir a Sucursal'
}

]


const SucursalDashboard = ()=>{
const navigate = useNavigate();



const goTo = (path)=>{
navigate(path,{replace:true})
}

    return (<Helmet title='Sucursal'>
        <CommonSection title='Sucursal Adimistrador'/>

       <section>
        <Row>
                <Col lg='12' style={{textAlign:'center'}}>
                    <h1>Sucursal Dashboard</h1>
                </Col>
            </Row>
       </section>

       <section style={{paddingTop:'0px', paddingBottom:'0px'}}>
        <Row>
            <Col lg='12' style={{paddingLeft:'75px'}}>
                <Button size='lg' color='success'>Agregar</Button>
            </Col>
        </Row>
       </section>

       <section>
        <Row>
        {cardPaneles.map((item,index)=>{
                return (<Col lg="4" md="6" sm="6" key={index} className="mt-2 mb-5" style={{width:'36rem', marginLeft:'45px'}}>
                
                    <Card
                    style={{
                        width: '34rem'
                    }}
                    >
                   
                    <CardBody>

                        <Row>
                            <Col lg='6'>
                                <img
                                    alt="Sample"
                                    src={item.image}
                                    // src="https://picsum.photos/300/200"
                                    style={{width:'250px'}}
                                />
                            </Col>

                            <Col lg='6'>
                                <CardTitle tag="h5">
                                {item.name}
                                </CardTitle>
                                
                                <CardText>
                                {item.describe}
                                </CardText>
                                <div style={{position:'absolute',bottom:'15px'}}>
                                    <Row>
                                        <Col lg='6'>
                                            <Button color="warning" >
                                            <Link to={item.path} style={{color:'white'}}>Editar</Link>
                                            </Button>
                                        </Col>
                                        <Col lg='6'>
                                            <Button color="danger" >
                                            <Link to={item.path} style={{color:'white'}}>Eliminar</Link>
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        
                    </CardBody>
                    </Card>
                </Col>)
            })}
        </Row>
       </section>



       
    </Helmet>)
}

export default SucursalDashboard;