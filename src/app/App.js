import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom'
import AppHeader from '../app/AppHeader';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../app/NotFound';
import LoadingIndicator from '../app/LoadingIndicator';
import { getCurrentUser, login } from '../service/OnlineService';
import PrivateRoute from '../app/PrivateRoute';
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import ViewStores from '../pages/ViewStores'
import AddStore from '../pages/AddStore'
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';

export const ACCESS_TOKEN = 'accessToken';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    console.log("this is first component running ")

    return (
      <div className="app">
        <div className="app-top-box">
          <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
        </div>
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home}></Route>           
              <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={Profile}></PrivateRoute>
              <PrivateRoute path="/addstore" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={AddStore}></PrivateRoute>  
              <PrivateRoute path="/seeStores" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                component={ViewStores}></PrivateRoute>
            <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
            <Route path='/about' component={AboutUs} ></Route>
            <Route path="/contact" component={ContactUs}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <Alert stack={{limit: 3}} 
          timeout = {5000}
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}

export default App;
