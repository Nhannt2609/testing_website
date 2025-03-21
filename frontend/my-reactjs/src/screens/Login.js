import React, { Component } from 'react';
import SimpleLayout from '../layouts/SimpleLayout';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'; // THÊM IMPORT AXIOS

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    axios.post('http://localhost:5051/api/user/login', {
      email: email,
      password: password
    }, config)
      .then(response => {
        setMessage("You're logged in");
        navigate('/home'); // điều hướng user sang trang home.
      })
      .catch(error => {
        console.log(error);
        setErrorMessage("Login failed");
      });
  };


  return (
    <SimpleLayout>
      <form>
        <h3>Please login.</h3>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className='form-group' style={{marginTop: '2vh'}}>
            <button type="submit" className="btn btn-primary">Submit</button>
            &nbsp; <a href="/">Back to Home</a>
          </div>
        </form>
      </SimpleLayout>
    );
}

export default Login;