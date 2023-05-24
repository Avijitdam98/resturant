import { useState } from "react";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";

import "./App.css";
import Transactionlist from "./Components/Transactionlist";
import AddTransaction from "./Components/AddTransaction";

function App() {
  return <>
  <Header/>
  <div className="container">
    <Balance/>
  </div>
  <div>
    <IncomeExpenses/>
  </div>
  <div>
    <Transactionlist/>
  </div>
  <div>
    <AddTransaction/>
  </div>
  </>;
}

export default App;
