import React from "react";

export function ShareButton({ icon, id, title, href, color }) {
  return (
    <a
      className="share-button rounded-1"
      id={id}
      title={title}
      target="_blank"
      href={href}
      style={{ backgroundColor: color }}
    >
      <i className={icon}></i>
    </a>
  );
}
