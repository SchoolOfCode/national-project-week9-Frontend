import React from "react";
import { useNavigate } from "react-router-dom";

export default function Topic({ title, imgPath }) {

    let navigate = useNavigate();
    function handleClick() {
        navigate("../questions");
    }

  return (
    <div>
      <p>{title}</p>
      <div onClick={handleClick}
        className="topic"
        style={{
          backgroundImage: `url(${imgPath})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}
