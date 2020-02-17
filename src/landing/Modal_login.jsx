import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form, Modal } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Modal_register from './Modal_register';
// component modal_login untuk manampilkan modal saat tombol login di klik
class Modal_login extends Component {     
  state = { show: false };

  showModalLogin = () => {
    this.setState({ show: true });
  };

  hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500)
  };


  render() {
    return (
      <main>
      <Modal show={this.state.show} handleClose={this.hideModalLogin} id="modal_box_login">
{/* halaman login dengan html dan css*/}
       
        <form class="login-form">
        <h1>Login</h1>

        <div class="txtb">
          <input type="email" placeholder="email"/>
        </div>

        <div class="txtb">
          <input type="password" placeholder="password"/>
        </div>
        <Link to="/index">
        <input type="submit" class="logbtn_login" value="Login" />
        </Link>
        <input type="submit" class="logbtn_close" value="Close" onClick={this.hideModalLogin}/>
        <div class="bottom-text_add_pet">
          Don't have account?
          <a href="#" >Sign up</a>
        </div>
      </form>
      
        </Modal>
        <Button variant="light" onClick={this.showModalLogin} className="tombol-login">
        Login</Button>

      </main>
    );
  }
}





export default Modal_login;