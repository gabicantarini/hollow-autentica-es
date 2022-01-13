import React from "react";
import { Switch, Route } from 'react-router-dom';

import Login from './page/login';
import Home from './page/home';

export default () => {

    return(
        <Switch>
             
            <Route exact path='/login'>
               <Login />

            </Route>   

            <Route exact path='/home'>
               <Home />

            </Route>       

        </Switch>
    );
}