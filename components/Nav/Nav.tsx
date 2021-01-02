import Link from 'next/link';
import styles from './nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href='/'>
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/articles'>
            <a className={styles.link}>Articles</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
