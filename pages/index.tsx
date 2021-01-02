import Hero from '../components/Hero/Hero';
import Layout from '../layout/Layout';
import RecentArticles from '../components/RecentArticles/RecentArticles';
import useScrollTop from '../hooks/useScrollTop';

const Home = () => {
  useScrollTop();

  return (
    <Layout>
      <Hero />
      <RecentArticles />
    </Layout>
  );
};

export default Home;
