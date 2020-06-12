import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './HOC/Home'
import Profile from './HOC/Profile'
import NotFound from './HOC/NotFound'
import Navbar from './Components/Nav'
import LogOut from './HOC/LogOut'
import CallAssign from './Components/Cards/HomeCards/CallAssign'
import DropPending from './Components/Cards/HomeCards/DropPending'
import DropCompleted from './Components/Cards/HomeCards/DropCompleted'
import Complete from './Components/Cards/CompleteCards/Complete'
import CustomerDetails from './Components/Cards/CustomerCards/CustomerDetails'
import Pickup from './Components/Cards/PickupCards/Pickup'
import Drop from './Components/Cards/DropCards/Drop'
import Login from './HOC/Login'
import { logout } from './Actions/auth'
export class App extends Component {


  render() {
    return (

      <Router>
        <Navbar logout={logout} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/call-assign' component={CallAssign} />
          <Route exact path='/call-assign/customer-details/:customer_token/' component={Pickup} />
          <Route exact path='/call-assign/customer-details/pickup' component={Pickup} />
          <Route exact path='/call-assign/customer-details/Drop' component={Drop} />
          <Route exact path='/drop-pending' component={DropPending} />
          <Route exact path='/drop-pending/customer-details/:customer_token/' component={Drop} />
          <Route exact path='/drop-completed' component={DropCompleted} />
          <Route exact path='/drop-completed/customer-details/:customer_token/' component={Complete} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={LogOut} />
          <Route component={NotFound} />
        </Switch>
      </Router>

    )
  }
}



export default App;