import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import styles from './layout.module.css';

const Layout: React.FC = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
