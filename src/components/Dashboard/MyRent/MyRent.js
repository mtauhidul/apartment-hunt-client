import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap'
import '../Dashboard/Dashboard.css';

const MyRent = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://fierce-forest-06981.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })

    }, [])

    return (
        <div style={{ padding: '0px 10px 10px 20px' }}>
            <Row className="t-head d-flex justify-content-around" style={{ lineHeight: '40px', background: '#FFFFFF', borderRadius: '5px', fontWeight: '700', marginBottom: '5px' }}>
                <Col md={3}><small style={{ fontWeight: '700' }}>House Name</small></Col>
                <Col md={4}><small style={{ fontWeight: '700' }}>Price</small></Col>
                <Col md={3}><small style={{ fontWeight: '700', marginLeft: '30px' }}>Action</small></Col>
            </Row>
            {
                orders.map(list =>
                    <Row className="t-head d-flex justify-content-around" style={{ lineHeight: '40px', background: '#FFFFFF', borderRadius: '5px', fontWeight: '700' }}>
                        <Col md={3}><small>House Name</small></Col>
                        <Col md={4}><small>Price</small></Col>
                        <Col md={3}><small>{<Button style={{ background: '#275A53' }}>View Details</Button>}</small></Col>
                    </Row>
                )
            }
        </div>
    );
};

export default MyRent;