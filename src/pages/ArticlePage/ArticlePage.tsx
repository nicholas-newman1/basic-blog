import { Link, RouteComponentProps } from 'react-router-dom';
import { articles } from '../../articles';
import Article from '../../components/Article/Article';
import ArticleListing from '../../components/ArticleListing/ArticleListing';
import './articlePage.css';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const ArticlePage = (props: Props) => {
  const id = props.match.params.id;
  const article = articles.find((article) => article.id === +id);
  return (
    <div className='article-page container'>
      {article ? (
        <div className='article-page__article'>
          <Article article={article} />
        </div>
      ) : (
        <h1>Article Not Found</h1>
      )}
      <aside className='article-page__aside'>
        <h2 className='article-page__aside-title'>Recommended</h2>
        <ul className='article-page__recommended-articles'>
          {articles.map((article) => (
            <li key={article.id} className='article-page__recommended-article'>
              <ArticleListing article={article} small={true} />
            </li>
          ))}
        </ul>
        <Link to='/articles'>
          <button className='btn'>View More Articles</button>
        </Link>
      </aside>
    </div>
  );
};

export default ArticlePage;
