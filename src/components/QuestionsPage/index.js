import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";

import { API_URL } from "../../config/index.js";

export default function QuestionsPage() {
  const [data, setData] = useState("");
  const [result, setResult] = useState(-1);
  const [userChoices, setUserChoices] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [shuffledAns, setShuffledAns] = useState([]);
  const [colorChange, setColorChange] = useState("");
  const params = useParams();
  const topic = params.query;

  useEffect(() => {
    async function getQuestions(topic) {
      try {
        const response = await fetch(`${API_URL}/questions?topic=${topic}`);
        let questionData = await response.json();
        setData(questionData.payload.slice(0, 6));
      } catch (error) {}
    }
    getQuestions(topic);
  }, [topic]);

  function handleClick(e) {
    e.preventDefault();
    let count = 0;
    for (let i = 0; i < userChoices.length; i++) {
      if (userChoices[i] === data[i].correct_answer) {
        setColorChange("green");
        count++;
      }
    }
    setResult(count);
  }
  function shuffleArray(array) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * i);
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }

  useEffect(() => {
    if (data) {
      let answerArray = data.map(({ correct_answer, incorrect_answers }) => [
        { answer: correct_answer, correct: true },
        ...incorrect_answers.map(function (ans) {
          return { answer: ans, correct: false };
        }),
      ]);
      setShuffledAns(answerArray.map((set) => shuffleArray(set)));
    }
  }, [data]);
  
  function handleUserChoice(e, i) {
    setUserChoices([
      ...userChoices.slice(0, i),
      e,
      ...userChoices.slice(i + 1),
    ]);
  }

  if (shuffledAns.length > 1 && data) {
    return (
      <div className="question_Section">
      <h2>{topic[0].toUpperCase() + topic.slice(1)} </h2>
        <form onSubmit={handleClick}>
          {data.map(({ question, id }, i) => (
            <div className="QuestionBox" key={id}>
              <h4>{question}</h4>
              {shuffledAns[i].map((obj) => (
                <label
                  key={nanoid()}
                  style={{
                    textDecoration:
                      obj.correct && colorChange !== ""
                        ? `underline ${colorChange}`
                        : "none",
                    color: obj.correct ? colorChange : "",
                  }}
                >
                  <input
                    type="radio"
                    value={obj.correct}
                    name={question}
                    checked={userChoices[i] === obj.answer}
                    onChange={() => handleUserChoice(obj.answer, i)}
                    required
                  />
                  {obj.answer}
                  <br></br>
                </label>
              ))}
            </div>
          ))}
          <div className="feedback">
            <button type="submit">Submit</button>
            {result > -1 ? (
              <h3 style={{ color: result > 4 ? "green" : "red" }}>
                You scored {result} out of 6.
              </h3>
            ) : (
              <></>
            )}
          </div>
        </form>
      </div>
    );
  } else {
    return <></>;
  }
}
