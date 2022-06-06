import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import GoogleIcon from '../../Icon/google.png';
import { UserContext } from '../../App';
import { handleGoogleSignIn, initializer } from '../AuthManager/AuthManager';
import './AdminLogin.css';
import NavBar from '../NavBar/NavBar';





const AdminLogin = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
    });


    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    initializer();

    const googleSignIn = (event) => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res)
            })
        event.preventDefault();
    }



    const handleResponse = (res) => {

        if (res.success) {
            setUser(res);
            setLoggedInUser(res);
            history.replace("/dashboard-admin");

        } if (!res.success) {
            setUser(res);
            setLoggedInUser(res);
        }

    }





    return (
        <Container style={{ paddingBottom: '100px' }}>
            <NavBar></NavBar>
            <br />
            <br />
            <div className="adminLoginBox">
                <h3 style={{ color: '#275A53', fontWeight: "bold" }}>Login with admin credentials</h3>
                <br />
                <div className='socialAdminLoginButton'>
                    <button onClick={googleSignIn} ><img className='socialIconAdmin' src={GoogleIcon} alt="" /> Continue with Google</button>
                </div>
            </div>
        </Container>
    );
};

export default AdminLogin;
