import React from "react";

export default function ResourceTopic({ title, imgSrc, data }) {
  return (
    <div>
      <div
        className="resource-topic"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          border: "none",
        }}
      ></div>
      <h2 className="resource-title">{title}</h2>

      {data.map((obj) => {
        return (
          <div>
            <a href={obj.url} target="_blank" rel="noreferrer">
              {obj.title}
            </a>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
