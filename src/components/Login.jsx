import React, { useRef, useState } from 'react';
import styles from './Login.module.css';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const emailRef=useRef(null);
  const passwordRef=useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    // 🔐 Optional: Dispatch login action or call Firebase
    // dispatch(authActions.login());

    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    emailRef.current.value='';
    passwordRef.current.value='';
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={submitHandler} className={styles.loginForm}>
        <h2>Login</h2>
        <div className={styles.control}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            ref={emailRef}
           
            required 
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            ref={passwordRef}
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
