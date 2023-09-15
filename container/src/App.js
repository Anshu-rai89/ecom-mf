import React from "react";
import MarketingApp from "./components/MarketingApp";
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import {BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
    return (
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header />
            <hr />
            <MarketingApp />
          </div>
        </StylesProvider>
      </BrowserRouter>
    );
}