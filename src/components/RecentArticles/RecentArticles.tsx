import './recentArticles.css';
import { articles } from '../../articles';
import ArticleListing from '../ArticleListing/ArticleListing';
import { Link } from 'react-router-dom';

const RecentArticles = () => {
  return (
    <section className='recent-articles container'>
      <h2 className='recent-articles__heading'>Recent Articles</h2>
      <ul className='recent-articles__list'>
        {articles.map((article) => (
          <li className='recent-articles__item' key={article.id}>
            <ArticleListing article={article} />
          </li>
        ))}
      </ul>
      <Link className='recent-articles__btn' to='/articles'>
        <button className='btn'>View All Articles</button>
      </Link>
    </section>
  );
};

export default RecentArticles;
