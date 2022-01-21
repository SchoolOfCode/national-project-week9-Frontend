import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`./`);
  }

  function handleResourcesClick() {
    navigate(`./resources`);
  }
  return (
    <div className="header">
      <h1 onClick={handleClick} className="title">
        School of Quizzes
      </h1>
      <h2 className="resources-button" onClick={handleResourcesClick}>Extra Resources</h2>
    </div>
  );
}
