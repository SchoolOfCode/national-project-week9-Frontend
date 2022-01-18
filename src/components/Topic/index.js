import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Topic({ title, imgPath, query }) {

    let navigate = useNavigate();
    const handleClick = useCallback(
      (query) => navigate(`../questions/${query}`),
      [navigate])

  return (
    <div>
      <h3>{title}</h3>
      <div onClick={() =>{handleClick(query)}}
        className="topic"
        style={{
          backgroundImage: `url(${imgPath})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          border: "none",
        }}
      ></div>
    </div>
  );
}
