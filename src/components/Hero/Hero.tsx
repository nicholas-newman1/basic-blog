import hero from '../../images/hero-image-1.png';
import './hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container container'>
        <h1 className='hero__heading'>Welcome!</h1>
        <p className='hero__text'>
          Here You'll Find The Best Articles Ever Written
        </p>
        <button className='btn'>View Articles</button>
      </div>
    </section>
  );
};

export default Hero;
