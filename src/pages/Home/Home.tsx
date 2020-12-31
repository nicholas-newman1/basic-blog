import Hero from '../../components/Hero/Hero';
import RecentArticles from '../../components/RecentArticles/RecentArticles';
import useScrollTop from '../../hooks/useScrollTop';

const Home = () => {
  useScrollTop();

  return (
    <div>
      <Hero />
      <RecentArticles />
    </div>
  );
};

export default Home;
