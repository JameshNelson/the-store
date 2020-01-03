import React from 'react'; 
import {Switch, Route} from 'react-router-dom'; 
import Login from './Components/Login';
import Dash from './Components/Dash/Dashboard'; 
import Cart from './Components/Cart/Cart'; 

export default(
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/dash' component={Dash} />
        <Route path='/cart' component={Cart} />
    </Switch>
)