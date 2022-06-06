import { Col, Container, Row } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Dashboard.css';
import Logo from '../../../Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus, faBars } from '@fortawesome/free-solid-svg-icons'
import AddRent from "../AddRent/AddRent";
import BookingList from "../BookingList/BookingList";
import MyRent from "../MyRent/MyRent";
import { useContext } from "react";
import { UserContext } from "../../../App";

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);




    const location = window.location.pathname;
    if (location.match(/dashboard-user/)) {
        return (
            <Router>
                <Container className="admin-dashboard" fluid >
                    <Row className="dashboard-top">
                        <Col md={2} className="logo-container" style={{ justifyContent: 'center' }}>
                            <img src={Logo} style={{ height: "54px", width: "100px" }} className="logo main-logo" alt="" />
                        </Col>
                        <Col md={10} className="d-flex justify-content-between">
                            <div>
                                <h3>My Rent</h3>
                            </div>
                            <div className="d-flex" style={{ marginRight: '40px' }}>
                                <img style={{ height: '40px', width: '40px', borderRadius: '50%', marginRight: '10px' }} src={loggedInUser.photo} alt="User Avatar" />
                                <p style={{ fontWeight: '700' }}><small>{loggedInUser.name}</small></p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} className="db-list-container" >
                            <ul style={{ listStyle: 'none' }}>
                                <li>
                                    <Link className="list-group-item none-style clicked" to="/admin/my-rent"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faUserPlus} />My Rent</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col md={10} className="main-container">
                            <div style={{ padding: '20px 20px 80px 0px' }}>
                                <MyRent></MyRent>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Router>
        );


    } else {
        return (<Router>
            <Container className="admin-dashboard" fluid >
                <Row className="dashboard-top">
                    <Col md={2} className="logo-container" style={{ justifyContent: 'center' }}>
                        <img src={Logo} style={{ height: "54px", width: "100px" }} className="logo main-logo" alt="" />
                    </Col>
                    <Col md={10} className="d-flex justify-content-between">
                        <Switch>
                            <Route exact path="/admin/booking-list">
                                <h3>Booking List</h3>
                            </Route>
                            <Route path="/admin/add-rent">
                                <h3>Add Rent</h3>
                            </Route>
                        </Switch>
                        <div className="d-flex" style={{ marginRight: '40px' }}>
                            <img style={{ height: '40px', width: '40px', borderRadius: '50%', marginRight: '10px' }} src={loggedInUser.photo} alt="User Avatar" />
                            <p style={{ fontWeight: '700' }}><small>{loggedInUser.name}</small></p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} className="db-list-container" >
                        <ul style={{ listStyle: 'none' }}>
                            <li>
                                <Link className="list-group-item none-style clicked" to="/admin/booking-list"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faBars} />Booking List</Link>
                            </li>
                            <li>
                                <Link className="list-group-item none-style clicked" to="/admin/add-rent"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faPlus} />Add Rent</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={10} className="main-container">
                        <div style={{ padding: '20px 20px 80px 0px' }}>
                            <Switch>
                                <Route exact path="/admin/booking-list">
                                    <BookingList></BookingList>
                                </Route>
                                <Route path="/admin/add-rent">
                                    <AddRent></AddRent>
                                </Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Router>)
    }
}

export default Dashboard;