import React, {lazy, Suspense, useState, useEffect} from "react";
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from "./components/Header";
import Progress from "./components/Progress";
import {createBrowserHistory} from 'history';

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const AuthLazy = lazy(()=> import('./components/AuthApp'));
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));
const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setSignedIn] = useState(false);
  useEffect(()=> {
    if(isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);
    return (
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header onSignOut={()=> setSignedIn(false)} isSignedIn={isSignedIn} />
            <hr />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth">
                  <AuthLazy onSignedIn={() => setSignedIn(true)} />
                </Route>

                <Route path="/dashboard">
                  {!isSignedIn && <Redirect to='/auth/signin'/>}
                  <DashboardLazy />
                </Route>

                <Route path="/">
                  <MarketingLazy onSignedIn={() => setSignedIn(true)} />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </StylesProvider>
      </Router>
    );
}