import styles from './articleListing.module.css';
import Link from 'next/link';

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
    <Link href={`/articles/${id}`}>
      <a className={`${styles.listing} ${small && styles.small}`}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.meta}>
          <span className={styles.author}>{author}</span>
          {' - '}
          <span className={styles.date}>
            <em>{date}</em>
          </span>
        </div>
        <p className={styles.description}>{description}</p>
      </a>
    </Link>
  );
};

export default ArticleListing;
