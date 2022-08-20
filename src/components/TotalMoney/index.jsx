import './styles.css';

function TotalMoney({ listTransactions }) {
  return (
    <div className="total__container">
      <div>
        <h3 className="total">Valor Total:</h3>
        <span className="total__description">O valor se refere ao saldo</span>
      </div>
      <h3 className="value">
        ${' '}
        {listTransactions.reduce(
          (total, currentValue) => currentValue.value + total,
          0
        )}
      </h3>
    </div>
  );
}

export default TotalMoney;
