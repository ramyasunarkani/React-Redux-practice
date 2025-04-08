import React from 'react';
import styles from './Header.module.css';
import { useDispatch } from 'react-redux';
import Login from './Login';

const Header = () => {
  const dispatch = useDispatch();

 

  return (
    <>
      <header className={styles.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li><button>My Products</button></li>
          <li><button>My Sales</button></li>
          <li><button >Logout</button></li>
        </ul>
      </nav>
    </header>
    <Login/>
    </>
  );
};

export default Header;
