"use client";
import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./CounterSlice";
import { useState } from "react";
import { setServers } from "dns";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const amountINcrementer = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="text-white flex mx-auto flex-col ring-1 w-80 items-center p-10 text-[32px]">
      <h3 className="text-[18px]">Redux complete Tutorial!</h3>
      <h1>{count}</h1>
      <div className="flex justify-between w-1/2 mx-auto ring-1 ">
        <button
          className="text-[20px] bg-white text-black rounded-full aspect-square px-5 active:text-white active: font-bold active:bg-black active:ring-3
        "
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="text-[20px] bg-white text-black rounded-full aspect-square px-5 active:text-white active: font-bold active:bg-black active:ring-3"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="w-full overflow-hidden pt-10 flex items-center flex-col gap-y-3">
        <input
          type="number"
          className="h-10 rounded-md w-full text-black pl-10"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button
          onClick={() => amountINcrementer()}
          className="mx-auto w-1/2 text-[16px] bg-white text-black py-1+"
        >
          Incrementer
        </button>
      </div>
    </div>
  );
};

export default Counter;
