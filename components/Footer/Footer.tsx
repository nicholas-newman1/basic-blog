import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <Nav />
    </footer>
  );
};

export default Footer;
