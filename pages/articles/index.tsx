import { articles } from '../../articles';
import ArticleListing from '../../components/ArticleListing/ArticleListing';
import Layout from '../../layout/Layout';
import useScrollTop from '../../hooks/useScrollTop';
import styles from './articles.module.css';

const Articles = () => {
  useScrollTop();

  return (
    <Layout>
      <div className={`${styles.container} container`}>
        <h1 className={styles.heading}>All Articles</h1>
        <ul className={styles.list}>
          {articles.map((article) => (
            <li className={styles.item} key={article.id}>
              <ArticleListing article={article} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Articles;
