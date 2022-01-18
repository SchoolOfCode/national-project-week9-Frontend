import React, { useEffect, useState } from "react";
import Topic from "../Topic";
import Question from "../Question";
import { useParams } from "react-router-dom";

import mockData from "../../lib";

export default function QuestionsPage() {
  const params = useParams();
  const topic = params.query;
  console.log(topic);

  useEffect(() => {
    async function getQuestions(topic) {
      try {
        const response = await fetch(`http://localhost:5000/questions?topic=${topic}`)
        const questionData = await response.json();
        console.log(questionData)
      } catch(error) {}
    }
    getQuestions(topic)
  }, [topic])


  return (
    <div className="question_Section">
      <form>
        <p>Questions</p>
        {mockData.payload.map((obj) => {
          return <Question key={obj.id} question={obj.question}></Question>;
        })}
        <input type="submit"></input>
      </form>
    </div>
  );
}
