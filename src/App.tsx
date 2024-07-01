import React, { createContext } from 'react';
import "./App.css"
import Products from './pages/Products';

interface IModalVisible {
  modalVisible: boolean
  showModal: () => void
  hideModal: () => void 
}

const ModalContext = createContext<any>(null)


function App() {
  return (
    <div className="App">
      <ModalContext.Provider value={{
        modalVisible: false,
        showModal() {
          this.modalVisible = true 
        },
        hideModal() {
          this.modalVisible = false
        }
      }}>
        <Products/>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
