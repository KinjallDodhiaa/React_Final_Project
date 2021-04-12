import React, { useState } from "react";

const Menu = () => {
  const initState = {
    isActive: false,
  };

  const [state, setState] = useState(initState);

  console.log(state.isActive);

  return (
    <>
      <div className={state.isActive ? "main-container show-nav" : "main-container"}>
        <div className="circle-container">
          <div className="circle">
            <button id="close" onClick={() => setState({ isActive: false })}>
              <i className="fas fa-times"></i>
            </button>
            <button id="open" onClick={() => setState({ isActive: true })}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

      </div>

      <nav>
        <ul>
          <li>
            <i className="fas fa-home"></i> Home
          </li>
          <li>
            <i className="fas fa-search"></i> Search
          </li>
          <li>
            <i className="fas fa-film"></i> Movie
          </li>
          <li>
            <i className="fas fa-play-circle"></i> Series
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;