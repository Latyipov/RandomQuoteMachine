import React from "react";

export function ShareButton({ icon, id, title, href, style }) {
  return (
    <a
      className="share-button rounded-1"
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
