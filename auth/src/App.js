import React from "react";
import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth'
});


export default ({ history, onSignedIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" exact>
              <SignIn onSignIn={onSignedIn} />
            </Route>
            <Route path="/auth/signup" exact>
              <SignUp onSignIn={onSignedIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};