import DOMPurify from 'dompurify';
import styles from './article.module.css';

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
    <div className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.meta}>
        <span className={styles.author}>{author}</span>
        {' - '}
        <span className={styles.date}>
          <em>{date}</em>
        </span>
      </div>
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
      />
    </div>
  );
};

export default Article;
