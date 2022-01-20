import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Topic({ title, imgPath, query, click }) {
  let navigate = useNavigate();
  const handleClick = useCallback(
    (query) => navigate(`../questions/${query}`),
    [navigate]
  );

  function removespace(string) {
    return string.replace(/\s+/g, "");
  }

  return (
    <div>
      <h3 className="week-names">{title}</h3>
      <div
        id={removespace(title)}
        onClick={() => {
          handleClick(query);
        }}
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
