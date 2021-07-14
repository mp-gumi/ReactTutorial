import React, { useState } from "react";

export const Tutorial = () => {
  const [count, setCount] = useState(0);
  //useStateは、クラスや関数内で宣言する
  const lightOn = "#FFFF48";
  const lightOff = "#000000";

  const [light, setLight] = useState(lightOn);
  const divStyle = { backgroundColor: light };
  function toggleLight() {
    if (light === lightOn) {
      setLight(lightOff);
    } else {
      setLight(lightOn);
    }
  }

  return (
    <div className="Tutorial" style={divStyle}>
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
        onClick={toggleLight}
        src="https://2.bp.blogspot.com/-QpIzYIhX_R0/VrN1H-ENQYI/AAAAAAAA3xU/v8lJEBoRMGA/s800/denkyuu_on.png"
        alt={"light_bulb"}
        width={"200px"}
      />
    </div>
  );
};
