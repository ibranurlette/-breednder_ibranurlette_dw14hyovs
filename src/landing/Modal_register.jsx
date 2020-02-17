import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form, Modal } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// component modal_register untuk manampilkan modal saat tombol register di klik
class Modal_register extends Component {
  state = { show: false };

  showModalRegister = () => {
    this.setState({ show: true });
  };

  hideModalRegister = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 100)
  };

  render() {
    return (
      <main>
          <Modal show={this.state.show} handleClose={this.hideModalRegister} className="modal_box_regist">
            <form class="login-form_register">
        <h1 id="judul_register">Register</h1>

        <div class="txtb">
          <input type="text" placeholder="bredner"/>
        </div>

        <div class="txtb">
          <input type="email"  placeholder="email"/>
        </div>
        <div class="txtb">
          <input type="password"  placeholder="password"/>
        </div>
        <div class="txtb">
          <input type="text"  placeholder="hp"/>
        </div>
        <div class="txtb">
          <textarea placeholder="addres"></textarea>
        </div>
        <div class="txtb">
          <input type="text"  placeholder="nama"/>
        </div>
        <div class="txtb">
          <select>
            <option>your pet gender</option> 
            <option>male</option>
            <option>female</option>
          </select>
        </div>
        <div class="txtb">
          <select>
            <option>select your pet</option>
            <option>kucing</option>
            <option>singa</option>
            <option>rubah</option>
          </select>
        </div>
        <div class="txtb">
          <select>
            <option>your pet age</option>
            <option>kucing</option>
            <option>singa</option>
            <option>rubah</option>
          </select>
        </div>
        <Link to="/index">
        <input type="submit" class="logbtn_login" value="Register" />
        </Link>
        <input type="submit" class="logbtn_close" value="Close" onClick={this.hideModalRegister}/>
      </form>

      </Modal>


          <div className="right">
        { /* <p id="para">have account or not ?</p> */ }
              <Button variant="light" onClick={this.showModalRegister} className="mt-3 mr-3 tombol_register ">Sign up</Button>
          </div>
      </main>
    );
  }
}

export default Modal_register;