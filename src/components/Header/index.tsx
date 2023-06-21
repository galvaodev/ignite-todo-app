import React from 'react';
import Logo from '../../assets/logo.svg';

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Todo App" />
    </div>
  );
}

export default Header;