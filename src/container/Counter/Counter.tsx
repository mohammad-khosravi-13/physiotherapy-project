import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-20 w-20">
      <div>
        <button
          onClick={increment}
          className="w-[24px] h-[24px] flex items-center justify-center bg-[#FF7A00] rounded-full text-white"
        >
          +
        </button>
      </div>

      <div className="text-[20px] text-center w-[24px] h-[24px] text-[#4A4A4A]">
        {count}
      </div>
      <div>
        {count > 1 && (
          <button
            onClick={decrement}
            className="w-[24px] h-[24px] flex items-center justify-center bg-[#4A4A4A] rounded-full text-white"
          >
            -
          </button>
        )}
      </div>
    </div>
  );
};

export default Counter;
