import image from '../../assets/landpage.svg';
import logo from '../../assets/nu-kenzie-landpage.svg';

import './styles.css';

function LandPage({ setShowLandPage }) {
  return (
    <div className="landpage__main">
      <div className="container__landpage">
        <div>
          <img className="landpage__logo" src={logo} alt="" />
          <h1 className="landpage__title">
            Centralize o controle das suas finanças
          </h1>
          <span className="landpage__subtitle">de forma rápida e segura</span>
          <button
            onClick={() => setShowLandPage(false)}
            className="landpage__button"
          >
            Iniciar
          </button>
        </div>
        <img className="landpage" src={image} alt="" />
      </div>
    </div>
  );
}

export default LandPage;
