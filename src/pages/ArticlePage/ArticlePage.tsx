import { RouteComponentProps } from 'react-router-dom';
import { articles } from '../../articles';
import Article from '../../components/Article/Article';
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
      {article ? <Article article={article} /> : <h1>Article Not Found</h1>}
    </div>
  );
};

export default ArticlePage;
