import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import ApartmentMain from "./components/ApartmentMain/ApartmentMain";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [admin, setAdmin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    fetch(`${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      });
  }, [loggedInUser.email]);
  console.log(loggedInUser);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="/admin-login">
                <AdminLogin></AdminLogin>
              </Route>
              <Route path="/ApartmentMain/:_id">
                <ApartmentMain></ApartmentMain>
              </Route>
              <Route path="/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <Route path="/booking">
                <ApartmentMain></ApartmentMain>
              </Route>
              <Route path="/signup">
                <SignUp></SignUp>
              </Route>
              <PrivateRoute path="/dashboard-admin">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path="/dashboard-user">
                <Dashboard></Dashboard>
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
