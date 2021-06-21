import { ReactNode } from 'react';
import styles from './Header.module.css'

interface IProps {
  children?: ReactNode,
}

function Header({ children }: IProps) {

  return (
    <header className={styles.header} >
      {children}
    </header >
  );
}

export default Header;
