import React, {lazy, Suspense} from "react";
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import Progress from "./components/Progress";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const AuthLazy = lazy(()=> import('./components/AuthApp'));
const MarketingLazy = lazy(() => import("./components/MarketingApp"));

export default () => {
    return (
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header />
            <hr />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth" component={AuthLazy} />
                <Route path="/" component={MarketingLazy} />
              </Switch>
            </Suspense>
          </div>
        </StylesProvider>
      </BrowserRouter>
    );
}