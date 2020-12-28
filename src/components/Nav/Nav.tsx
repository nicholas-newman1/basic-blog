import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link className='nav__link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/'>
            About
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
