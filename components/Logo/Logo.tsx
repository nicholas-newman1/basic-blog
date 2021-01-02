import styles from './logo.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <a className={styles.logo}>
        <Image
          className={styles.img}
          src='/images/logo.png'
          alt='logo'
          width='45'
          height='45'
        />
        <span className={styles.text}>Basic Blog</span>
      </a>
    </Link>
  );
};

export default Logo;
