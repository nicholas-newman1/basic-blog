import styles from './logo.module.css';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <a className={styles.logo}>
        <img
          className={styles.img}
          src={require('../../images/logo.png')}
          alt='logo'
        />
        <span className={styles.text}>Basic Blog</span>
      </a>
    </Link>
  );
};

export default Logo;
