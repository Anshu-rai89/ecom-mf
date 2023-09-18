import React from "react";
import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth'
});


export default ({history}) => {
    return (
      <div>
        <StylesProvider generateClassName={generateClassName}>
          <Router history={history}>
            <Switch>
              <Route path="/auth/signin" component={SignIn} exact />
              <Route path="/auth/signup" component={SignUp} exact />
            </Switch>
          </Router>
        </StylesProvider>
      </div>
    );
}