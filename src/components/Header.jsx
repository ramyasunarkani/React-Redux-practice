import React from 'react';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {
  const dispatch=useDispatch();
  const isAuthenticated=useSelector(state=>state.auth.isAuthenticated)
  const logoutHandler=()=>{
    dispatch(authActions.logout())
  }

  return (
    <>
      <header className={styles.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated&&(<nav>
        <ul>
          <li><button>My Products</button></li>
          <li><button>My Sales</button></li>
          <li><button onClick={logoutHandler}>Logout</button></li>
        </ul>
      </nav>)}
    </header>
    
    </>
  );
};

export default Header;
