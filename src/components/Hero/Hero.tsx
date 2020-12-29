import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container container'>
        <h1 className='hero__heading'>Welcome!</h1>
        <p className='hero__text'>
          Here You'll Find The Best Articles Ever Written
        </p>
        <Link to='/articles' className='hero__btn'>
          <button className='btn'>View Articles</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
