import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import LandPage from './components/LandPage';

import './App.css';
import Modal from './components/Modal';

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [showLandPage, setShowLandPage] = useState(true);
  const [showModal, setShowModal] = useState(false);
  //   [
  //   { description: 'Salário recebido', type: 'entrada', value: 2500 },
  //   { description: 'Conta de luz', type: 'saída', value: -150 },
  // ]

  function deleteTransaction(id) {
    setListTransactions((prevListTransaction) =>
      prevListTransaction.filter((transaction) => transaction.id !== id)
    );
  }

  return (
    <div className="App">
      {showLandPage ? (
        <LandPage setShowLandPage={setShowLandPage} />
      ) : (
        <>
          <Header setShowLandPage={setShowLandPage} />
          <main className="container">
            <aside>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </aside>
            <section>
              <List
                listTransactions={listTransactions}
                deleteTransaction={deleteTransaction}
              />
            </section>
            <button onClick={() => setShowModal(true)} className="btnPlus">
              <AiFillPlusCircle size={36} color={'#FD377E'} />
            </button>
          </main>
          {showModal && (
            <Modal setShowModal={setShowModal}>
              <Form
                showModal={showModal}
                setShowModal={setShowModal}
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </Modal>
          )}
        </>
      )}
    </div>
  );
}

export default App;
