import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Main from './pages/Main';
import Biography from './pages/Biography';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <Main />} />
            <Route path="/biography/:id" component={Biography} />
        </Switch>
    </BrowserRouter>
)

export default Routes;