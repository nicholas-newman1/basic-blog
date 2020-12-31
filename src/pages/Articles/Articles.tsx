import { articles } from '../../articles';
import ArticleListing from '../../components/ArticleListing/ArticleListing';
import useScrollTop from '../../hooks/useScrollTop';
import './articles.css';

const Articles = () => {
  useScrollTop();

  return (
    <div className='articles container'>
      <h1 className='articles__heading'>All Articles</h1>
      <ul className='articles__list'>
        {articles.map((article) => (
          <li className='articles__item' key={article.id}>
            <ArticleListing article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
