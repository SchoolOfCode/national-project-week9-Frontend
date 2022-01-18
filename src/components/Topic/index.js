import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Topic({ title, imgPath, query }) {

    let navigate = useNavigate();
    // function handleClick(query) {
    //     navigate("");
    // }

    const handleClick = useCallback(
      (query) => navigate(`../questions/${query}`),
      [navigate])

  return (
    <div>
      <p>{title}</p>
      <div onClick={() =>{handleClick(query)}}
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
