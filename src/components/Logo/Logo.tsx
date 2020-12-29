import './logo.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className='logo'>
      <img className='logo__img' src={logo} alt='logo' />
      <span className='logo__text'>Basic Blog</span>
    </Link>
  );
};

export default Logo;
