import Link from 'next/link';
import { useRouter } from 'next/router';
import { articles } from '../../articles';
import Article from '../../components/Article/Article';
import ArticleListing from '../../components/ArticleListing/ArticleListing';
import Layout from '../../layout/Layout';
import styles from './articlePage.module.css';

const ArticlePage = () => {
  const router = useRouter();
  const id = router.query.article;
  const article = articles.find((article) => article.id === +id);
  return (
    <Layout>
      <div className={`${styles.container} container`}>
        {article ? (
          <div className={styles.article}>
            <Article article={article} />
          </div>
        ) : (
          <h1>Article Not Found</h1>
        )}

        <aside className={styles.aside}>
          <h2 className={styles.aside_title}>Recommended</h2>
          <ul className={styles.recommended_articles}>
            {articles.map((article) => (
              <li key={article.id} className={styles.recommended_article}>
                <ArticleListing article={article} small={true} />
              </li>
            ))}
          </ul>
          <Link href='/articles'>
            <a className='btn'>View More Articles</a>
          </Link>
        </aside>
      </div>
    </Layout>
  );
};

export default ArticlePage;
