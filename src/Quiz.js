import React, { useState } from "react";
import "./index.css";

import question1 from "./gallery/question1.png";
import question2 from "./gallery/question2.png";
import question3 from "./gallery/question3.png";
import question4 from "./gallery/question4.png";

export const Quiz = () => {
  const [ans, setAns] = useState("");

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setAns((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const ansCheck = () => {
    if (ans.Q1 === "白") {
      alert("");
    }
  };

  return (
    <div>
      <h1>Q1</h1>
      <img src={question1} alt={"question1"} />
      <input
        placeholder="漢字１文字で解答"
        name="Q1"
        onChange={handleChange}
        value={ans.Q1 || ""}
      />
      <button type="submit">Check</button>
    </div>
  );
};
