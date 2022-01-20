import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`./`);
  }
  return (
    <div className="header">
      <h1 onClick={handleClick} className="title">
        School of Quizzes
      </h1>
    </div>
  );
}
