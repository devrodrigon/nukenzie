import logo from '../../assets/nu-kenzie.svg';

import './styles.css';

function Header({ setShowLandPage }) {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="logo" />
        <button
          onClick={() => setShowLandPage(true)}
          className="header__button"
        >
          Inicio
        </button>
      </div>
    </header>
  );
}

export default Header;
