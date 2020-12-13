import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Screens/Home/Home';
import Navbar from './Nav/Navbar';
import Error from './Error';
import SignIn from './Screens/SignIn/SignIn';
import SignUp from './Screens/SignUp/SignUp';
import ForgotPassword from './Screens/ForgotPassword/ForgotPassword';

const Routes: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/forgotpassword" component={ForgotPassword} exact />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default Routes;
