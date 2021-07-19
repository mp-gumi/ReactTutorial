import React from "react";

export const MyFavoriteList = () => {
  const faves = ["Riddle", "Insects", "Mahjong"];
  const favesWiki = faves.map((fave) => (
    <p>
      {fave}
      <a
        href={"https://en.wikipedia.org/wiki/" + fave}
        target="_blank"
        rel="noopener noreferrer"
      >
        <sub style={{ fontSize: "10px" }}>[wiki]</sub>

        <br />
      </a>
    </p>
  ));
  return <div>{favesWiki}</div>;
};
