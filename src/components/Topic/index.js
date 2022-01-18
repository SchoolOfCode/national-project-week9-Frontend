import React from "react";

export default function Topic({ title, imgPath }) {
  return (
    <div
      className="topic"
      style={{
        backgroundImage: `url(${imgPath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p>{title}</p>
    </div>
  );
}
