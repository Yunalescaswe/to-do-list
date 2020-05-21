import React from 'react';
import './List.css';

function ListItem(props) {
  return (
    <div className="ListItem">
      <button
      className="ListItem-button"
      type="button"
      onClick={props.onClick}
      >x</button>
      <div>{props.text}</div>
    </div>
  );
}

export default ListItem;
