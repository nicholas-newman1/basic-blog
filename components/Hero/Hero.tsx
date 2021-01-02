import Link from 'next/link';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <h1 className={styles.heading}>Welcome!</h1>
        <p className={styles.text}>
          Here You'll Find The Best Articles Ever Written
        </p>
        <Link href='/articles'>
          <a className='btn'>View Articles</a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
