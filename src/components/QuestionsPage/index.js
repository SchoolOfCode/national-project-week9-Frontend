import React, { useEffect, useState } from "react";
import Topic from "../Topic";
import Question from "../Question";
import { useParams } from "react-router-dom";

import mockData from "../../lib";

export default function QuestionsPage() {
  const [data, setData] = useState("");
  const params = useParams();
  const topic = params.query;
  console.log(topic);

  useEffect(() => {
    async function getQuestions(topic) {
      try {
        const response = await fetch(
          `http://localhost:5000/questions?topic=${topic}`
        );
        let questionData = await response.json();
        setData(questionData.payload.slice(0, 6));
      } catch (error) {}
    }
    getQuestions(topic);
  }, [topic]);

  if (data) {
    console.log(data);
  }
  return (
    <div className="question_Section">
      <form>
        {data.map(({correct_answer, incorrect_answers, question, topic, id}) => (
          <div className="QuestionBox" key={id}>
          <p>{question}</p>
          <input type="radio">{correct_answer}</input>
          {incorrect_answers.map((ans) => (
             <input type="radio">{ans}</input>
          ))}
          </div>
        ))}

        <button type="submit"></button>
      </form>
    </div>
  );
}
