import React from "react";

import "./ComponentTwo.css";

const ComponentTwo = () => {
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

export default ComponentTwo;
