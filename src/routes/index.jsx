import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';

/**
 * App Routing Component
 *
 * @returns {JSX.Element} Element
 */
export function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
