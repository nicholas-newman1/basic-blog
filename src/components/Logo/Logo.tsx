import './logo.css';
import logo from '../../images/logo.png';

const Logo = () => {
  return (
    <a href='/' className='logo'>
      <img className='logo__img' src={logo} alt='logo' />
      <span className='logo__text'>Basic Blog</span>
    </a>
  );
};

export default Logo;
