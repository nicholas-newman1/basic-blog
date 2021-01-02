import styles from './recentArticles.module.css';
import { articles } from '../../articles';
import ArticleListing from '../ArticleListing/ArticleListing';
import Link from 'next/link';

const RecentArticles = () => {
  return (
    <section className={`${styles.container} container`}>
      <h2 className={styles.heading}>Recent Articles</h2>
      <ul className={styles.list}>
        {articles.map((article) => (
          <li className={styles.item} key={article.id}>
            <ArticleListing article={article} />
          </li>
        ))}
      </ul>
      <Link href='/articles'>
        <a className={`${styles.btn} btn`}>View All Articles</a>
      </Link>
    </section>
  );
};

export default RecentArticles;
