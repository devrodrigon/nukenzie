import { FaTrash } from 'react-icons/fa';
import { motion } from 'framer-motion';

import './styles.css';

function Card({ index, description, type, value, deleteTransaction }) {
  return (
    <motion.li
      className={type === 'entrada' ? 'card entrada' : 'card saida'}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
    >
      <div>
        <h3 className="card__description">{description}</h3>
        <span className="card__type">{type}</span>
      </div>
      <span className="card__value">
        {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
      <button onClick={() => deleteTransaction(index)} className="card__button">
        <FaTrash size={9} />
      </button>
    </motion.li>
  );
}

export default Card;
