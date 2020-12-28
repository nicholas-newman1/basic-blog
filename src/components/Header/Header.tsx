import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className=' header__container container'>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
