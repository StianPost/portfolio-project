import React from 'react';

function Projcard({ titleprop, imgprop }) {
  return (
    <div>
      <div>
        <div>
          <img src={imgprop} alt={titleprop}></img>
        </div>
      </div>
      <div>
        <h2>{titleprop}</h2>
        <p>1</p>
      </div>
    </div>
  );
}

export default Projcard;
