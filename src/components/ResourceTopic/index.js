import React from "react";

export default function ResourceTopic({ title, imgSrc, data }) {
  return (
    <div>
      <h2>{title}</h2>
      <div
        className="topic"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          border: "none",
        }}
      >
        {data.map((obj) => {
            return (<div><a href={obj.url} target="_blank">{obj.title}</a><br></br></div>)
        })}
      </div>
      
    </div>
  );
}
