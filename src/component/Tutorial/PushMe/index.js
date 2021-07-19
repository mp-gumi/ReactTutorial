import React, { useState } from "react";

export const PushMe = () => {
  const [count, setCount] = useState(0);
  const hintText = () => {
    if (count < 10) {
      return "Push button 10 times or more.";
    }
    return 'The answer is "INSECT".'; //早期リターン
  };

  return (
    <div>
      <p>
        <button onClick={() => setCount(count + 1)}>Push me!</button>
        <br />
        [You pushed {count} times]
      </p>
    </div>
  );
};
