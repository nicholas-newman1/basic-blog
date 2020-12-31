import DOMPurify from 'dompurify';
import './article.css';

interface ArticleProp {
  id: number;
  title: string;
  author: string;
  date: string;
  image: { src: string; alt: string };
  description: string;
  body: string;
}

const Article = (props: { article: ArticleProp }) => {
  const { title, author, date, body } = props.article;

  const cleanHTML = DOMPurify.sanitize(body);

  return (
    <div className='article'>
      <h1 className='article__title'>{title}</h1>
      <div className='article__meta'>
        <span className='article__author'>{author}</span>
        {' - '}
        <span className='article__date'>
          <em>{date}</em>
        </span>
      </div>
      <div
        className='article__body'
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
      />
    </div>
  );
};

export default Article;
