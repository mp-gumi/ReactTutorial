import React, { useState } from "react";

export const Tutorial = () => {
  const [count, setCount] = useState(0);
  //useStateは、クラスや関数内で宣言する

  return (
    <div className="Tutorial">
      <h1>My Profile</h1>
      <p>
        <button onClick={() => setCount(count + 1)}>Push me!</button>
      </p>
      <p>You pushed {count} times!</p>
      <input placeholder={"Your Name"} />
      <p>
        Please Follow me on
        <a
          href={"https://twitter.com/mp_gumi"}
          target="_blank" //リンクを別タブで開く
          rel="noopener noreferrer" //タブを開いたあとに、リンク先から参照できないようにする
        >
          Twitter!
        </a>
      </p>
      <img
        src="https://1.bp.blogspot.com/-uo_TRiIGFsQ/X9lJhr3IuFI/AAAAAAABc6M/u2rxPd_7ED4mhwmywANaBAbe0RisJ-9pwCNcBGAsYHQ/s608/money_kinbut.png"
        alt={"money-pig"}
        width={"200px"}
      />
    </div>
  );
};
