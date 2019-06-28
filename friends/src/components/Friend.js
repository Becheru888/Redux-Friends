import React from "react";

const Friend = props => {
  return (
    <li key={props.friend.key}>
      {props.friend.name}
      <span>{props.friend.age}</span>
      <p>{props.friend.email}</p>
    </li>
  );
};

export default Friend;