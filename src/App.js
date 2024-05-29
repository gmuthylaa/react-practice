import React from "react";

import CustomerForm from './components/CustomerForm';
import ItemSelection from './components/items/ItemSelection';

import './App.css';

import SelectedItemsContextProvider from "./components/items/SelectedItemsContextProvider";
import OrderInfo from "./components/orders/OrderInfo";
import CustomerContextProvider from "./components/CustomerContextProvider";

function App() {

  return (
    <CustomerContextProvider>
      <CustomerForm />
      <SelectedItemsContextProvider>
        <div className="items-orders-info-wrapper">
          <div className="items-info">
            <ItemSelection />
          </div>
          <div className="order-info">
            <OrderInfo />
          </div>
        </div>
      </SelectedItemsContextProvider>
    </CustomerContextProvider>
  );
}

export default App;
