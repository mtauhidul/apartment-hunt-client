import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Dashboard/Dashboard.css';

const BookingList = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('https://fierce-forest-06981.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setLists(data);
            })
    }, [])

    return (
        <div style={{ padding: '0px 10px 10px 20px' }}>
            <Row className="t-head d-flex justify-content-around" style={{ lineHeight: '40px', background: '#FFFFFF', borderRadius: '5px', fontWeight: '700', marginBottom: '5px' }}>
                <Col md={2}><small style={{ fontWeight: '700' }}>House</small></Col>
                <Col md={2}><small style={{ fontWeight: '700' }}>Email</small></Col>
                <Col md={2}><small style={{ fontWeight: '700' }}>Phone</small></Col>
                <Col md={3}><small style={{ fontWeight: '700' }}>Message</small></Col>
                <Col md={1}><small style={{ fontWeight: '700' }}>Status</small></Col>
            </Row>
            {
                lists.map(list =>
                    <Row className="t-head d-flex justify-content-around" style={{ lineHeight: '40px', background: '#FFFFFF', borderRadius: '5px', fontWeight: '700' }}>
                        <Col md={2}><small>{list.name}</small></Col>
                        <Col md={2}><small>{list.email}</small></Col>
                        <Col md={2}><small>{list.title}</small></Col>
                        <Col md={3}><small>{list.details}</small></Col>
                        <Col md={1}><small>Status</small></Col>
                    </Row>
                )
            }
        </div>
    );
};

export default BookingList;