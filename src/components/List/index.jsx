import Card from '../Card';

import noCard from '../../assets/NoCard.svg';

import './styles.css';
import { useEffect, useState } from 'react';

function List({ listTransactions, deleteTransaction }) {
  const [filteredTransactions, setFilteredTransactions] =
    useState(listTransactions);

  const [isActiveAll, setIsActiveAll] = useState(true);
  const [isActiveIncome, setIsActiveIncome] = useState(false);
  const [isActiveSpending, setIsActiveSpending] = useState(false);

  useEffect(() => {
    if (isActiveAll) {
      setFilteredTransactions(listTransactions);
    } else if (isActiveIncome) {
      filterTransactions('entrada');
    } else {
      filterTransactions('saída');
    }
  }, [listTransactions]); // eslint-disable-line

  function filterTransactions(filterBy) {
    if (filterBy === 'Todos') {
      setFilteredTransactions(listTransactions);
    } else {
      setFilteredTransactions(
        listTransactions.filter(({ type }) => type === filterBy)
      );
    }
  }

  return (
    <>
      <div className="list__header">
        <h3 className="list__title">Resumo financeiro</h3>
        <div className="filters">
          <button
            onClick={() => {
              filterTransactions('Todos');
              setIsActiveAll(true);
              setIsActiveIncome(false);
              setIsActiveSpending(false);
            }}
            className={`btnfilter ${isActiveAll && 'active'}`}
          >
            Todos
          </button>
          <button
            onClick={() => {
              filterTransactions('entrada');
              setIsActiveAll(false);
              setIsActiveIncome(true);
              setIsActiveSpending(false);
            }}
            className={`btnfilter ${isActiveIncome && 'active'}`}
          >
            Entradas
          </button>
          <button
            onClick={() => {
              filterTransactions('saída');
              setIsActiveAll(false);
              setIsActiveIncome(false);
              setIsActiveSpending(true);
            }}
            className={`btnfilter ${isActiveSpending && 'active'}`}
          >
            Despesas
          </button>
        </div>
      </div>

      <ul className="cards">
        {filteredTransactions.length ? (
          filteredTransactions.map((card) => (
            <Card
              key={card.id}
              index={card.id}
              description={card.description}
              type={card.type}
              value={card.value}
              deleteTransaction={deleteTransaction}
            />
          ))
        ) : (
          <>
            <h2 className="msg__noTransactions">
              Você ainda não possui nenhum lançamento
            </h2>
            <img className="img__noCard" src={noCard} alt="" />
            <img className="img__noCard" src={noCard} alt="" />
            <img className="img__noCard" src={noCard} alt="" />
          </>
        )}
      </ul>
    </>
  );
}

export default List;
