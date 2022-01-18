import React, { useEffect, useState } from "react";
import Topic from "../Topic";
import Question from "../Question";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import mockData from "../../lib";

export default function QuestionsPage() {
  const [data, setData] = useState("");
  const [userInput, setUserInput] = useState([]);
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

  function handleClick(e) {
    e.preventDefault();
    console.log(userInput)
    // collect the answers and compare to the corract answers
    // may need to make a correct ans array above.
  }
  return data ? (
    <div className="question_Section">
      <form onSubmit={handleClick} onChange={(e) => {console.log(e.target.value)}}>
        {data.map(
          (
            { correct_answer, incorrect_answers, question, topic, id },
            index
          ) => (
            <div className="QuestionBox" key={id}>
              <p>{question}</p>
              <label key={nanoid()}>
                <input
                  type="radio"
                  value={correct_answer}
                  name={question}
                />
                {correct_answer}
              </label>
              {incorrect_answers.map((ans) => (
                <label key={nanoid()}>
                  <input type="radio" value={ans} name={question} />
                  {ans}
                </label>
              ))}
            </div>
          )
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  ) : (
    <></>
  );
}
