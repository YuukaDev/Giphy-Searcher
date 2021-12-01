import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className="container">
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          const value = e.target.elements.input.value;
          if (!value) {
            alert('Enter gif name!');
          } else {
            alert(value);
          }
        }}
      >
        <div className="wrapper-form">
          <input type="text" id="input" placeholder="Enter name..." />
          &nbsp;&nbsp;&nbsp;
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Content;
