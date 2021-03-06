import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/Footer.css';
import './css/Header.css';
import './css/Jumbo.css';
import './css/Modal_login.css';
import './css/Modal_register.css';
import './css/Homepage.css';
import './css/Profile.css';
import './css/Editprofile.css';
import './css/Modal_add_pet.css';
import './css/Modal_add_pet_premium.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './landing/Header';
import Footer from './landing/Footer';
import Jumbo from './landing/Jumbo';
import HomePage from './home/HomePage';
import Profile from './profiles/Profile';
import Edit_profile from './profiles/Edit_profile';

{/* class App untuk menagkap semua componenet */}
class App extends Component {
  render() {
    return (
      // Router untuk menangkap link
      <Router >
      <Switch >
      <Route path = "/index" >
      <HomePage />
      </Route>
      <Route path = "/profile" >
      <Profile />
      </Route>
      <Route path = "/edit_profile" >
      <Edit_profile />
      </Route>
      <Route path = "/back_profile" >
      <HomePage />
      </Route>
      <Route path = "/logout" >
      <Landing />
      </Route>
      <Route path = "/" >
      <Landing/>
      </Route>
      </Switch>
      </Router>
    );
  }
}
// menampilkan halamaan landing page yang terdiri atas header, jumbo, dan footer
class Landing extends Component {
  render() {
    return ( <div className = "app-body" >
      <Header />
      <Jumbo />
      <Footer />
      </div>
    )
  }
}

export default App;