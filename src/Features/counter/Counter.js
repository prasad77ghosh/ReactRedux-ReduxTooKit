import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decreament,
  reset,
  increamentByAmout,
} from "./counterSlice";
import "./Counter.css";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const value = Number(amount) || 0;
  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <>
      <section>
        <p>{count}</p>
        <div className="btn_cont">
          <button className="btn" onClick={() => dispatch(increament())}>
            +
          </button>
          <button className="btn" onClick={() => dispatch(reset())}>
            reset
          </button>

          <button className="btn" onClick={() => dispatch(decreament())}>
            -
          </button>
        </div>
        <br />
        <input
          type="text"
          
          onChange={(e) => setAmount(e.target.value)}
        />

        <div>
          <button
            className="btn"
            onClick={() => dispatch(increamentByAmout(value))}
          >
            Add Amount
          </button>
          <button className="btn" onClick={resetAll}>All Reset</button>
        </div>
      </section>
    </>
  );
};

export default Counter;
