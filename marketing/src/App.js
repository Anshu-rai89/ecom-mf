import React from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mss'
});


export default () => {
    return (
      <div>
        <StylesProvider>
          <BrowserRouter generateClassName={generateClassName}>
            <Switch>
              <Route path="/pricing" exact component={Pricing} />
              <Route path="/" exact component={Landing} />
            </Switch>
          </BrowserRouter>
        </StylesProvider>
      </div>
    );
}