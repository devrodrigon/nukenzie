import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';

function Form({
  listTransactions,
  setListTransactions,
  showModal,
  setShowModal,
}) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('entrada');

  function addTransactions(event) {
    event.preventDefault();

    if (description.trim() === '' || value === '') {
      alert('Peencha todos os campos');
    } else {
      setListTransactions((prevTransactions) => [
        ...prevTransactions,
        {
          id: uuidv4(),
          description,
          value: type === 'entrada' ? value : -value,
          type,
        },
      ]);

      setDescription('');
      setValue('');
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          addTransactions(event);
          showModal && setShowModal(false);
        }}
        className={showModal ? 'form__modal' : 'form'}
      >
        <div className="form__description">
          <label htmlFor="description">Descrição</label>
          <input
            className="form__input"
            id="description"
            type="text"
            placeholder="Digite aqui sua descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <span className="form__helperText">Ex: Compra de roupa</span>
        </div>
        <div className="form__row">
          <div className="form__value">
            <label htmlFor="value">Valor</label>
            <input
              className="form__input"
              placeholder="R$"
              type="number"
              id="value"
              value={value}
              min={0}
              onChange={(event) => setValue(Number(event.target.value))}
            />
          </div>
          <div className="form__type">
            <label htmlFor="type">Tipo de valor</label>
            <select
              className="form__input"
              id="type"
              onChange={(event) => setType(event.target.value)}
            >
              <option value="entrada">Entrada</option>
              <option value="saída">Saída</option>
            </select>
          </div>
        </div>

        <button className="form__button">Inserir valor</button>
      </form>
    </>
  );
}

export default Form;
