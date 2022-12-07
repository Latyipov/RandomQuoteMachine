import React from "react";

export function NetButton({ icon, id, title, href, style }) {
  return (
    <a
      className="button rounded-1"
      id={id}
      title={title}
      target="_blank"
      href={href}
      style={style}
    >
      <i className={icon}></i>
    </a>
  );
}
