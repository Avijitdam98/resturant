import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  function handelText(e) {
    setText(e.target.value);
  }
  function handelAmount(e) {
    setAmount(e.target.value);
  }
  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={handelText}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br></br>
            (negative-expense,positive-incone)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter Amonunt..."
            value={amount}
            onChange={handelAmount}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
