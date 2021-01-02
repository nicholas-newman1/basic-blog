import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
