import React from "react";
import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mss'
});


export default ({history}) => {
    return (
      <div>
        <StylesProvider generateClassName={generateClassName}>
          <Router history={history}>
            <Switch>
              <Route path="/pricing" exact component={Pricing} />
              <Route path="/" exact component={Landing} />
            </Switch>
          </Router>
        </StylesProvider>
      </div>
    );
}