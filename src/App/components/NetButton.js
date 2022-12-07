import React from "react";

export function NetButton({ icon, id, title }) {
  return (
    <a className="button rounded-1" id={id} title={title} target="_blank">
      <i className={icon}></i>
    </a>
  );
}
