import { Link } from 'react-router-dom';
import './articleListing.css';

interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  image: { src: string; alt: string };
  description: string;
  body: string;
}

interface Props {
  article: Article;
  small?: Boolean;
}

const ArticleListing = ({ article, small = false }: Props) => {
  const { id, title, description, author, date } = article;
  return (
    <Link
      className={`article-listing ${small ? 'article-listing--small' : ''}`}
      to={`/articles/${id}`}
    >
      <h2 className='article-listing__title'>{title}</h2>
      <div className='article-listing__meta'>
        <span className='article-listing__author'>{author}</span>
        {' - '}
        <span className='article-listing__date'>
          <em>{date}</em>
        </span>
      </div>
      <p className='article-listing__description'>{description}</p>
    </Link>
  );
};

export default ArticleListing;
