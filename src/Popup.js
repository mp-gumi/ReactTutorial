import React, { useState } from "react";
//コピペして成形しただけ
export const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  function closePopup() {
    function togglePopup() {
      setShowPopup((prev) => !prev);
    }
    return (
      <div className="ClosePopup">
        <button onClick={togglePopup}>show popup</button>
        {showPopup ? <Popup text="Close Me" closePopup={togglePopup} /> : null}
      </div>
    );
  }

  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>aaa</h1>
        <button onClick={closePopup}>close me</button>
      </div>
    </div>
  );
};
