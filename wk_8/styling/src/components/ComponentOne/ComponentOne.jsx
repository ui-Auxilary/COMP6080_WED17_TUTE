import React from "react";

import "./ComponentOne.css";

const ComponentOne = () => {
  return (
    <article className='container'>
      <div className='left'>
        <div>
          <h1>Title</h1>
          <span>Subtitle</span>
          <p>Cool</p>
        </div>

        <div>
          <button className='action-btn'>Action</button>
        </div>
      </div>
      <div className='right'></div>
    </article>
  );
};

export default ComponentOne;
