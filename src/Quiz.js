import React, { useState } from "react";
import "./index.css";

import question1 from "./gallery/question1.png";
import question2 from "./gallery/question2.png";
import question3 from "./gallery/question3.png";
import question4 from "./gallery/question4.png";

export const Quiz = () => {
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ans3, setAns3] = useState("");
  const [ans4, setAns4] = useState("");

  return (
    <div>
      <h1>第一問</h1>
      <img src={question1} alt={"question1"} />
      <input placeholder="解答を入力してください" />
      <button type="submit">Check</button>
    </div>
  );
};
