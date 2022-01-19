import React, { useEffect, useState } from "react";
import Topic from "../Topic";
import Question from "../Question";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import mockData from "../../lib";

export default function QuestionsPage() {
  const [data, setData] = useState("");
  const [result, setResult] = useState(null);
  const [userChoices, setUserChoices] = useState([null, null, null, null, null, null])
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
    // let userInput = document.querySelectorAll('input[value=true]:checked')
    // setResult(console.loguserInput.length)
    console.log(userChoices)
    // collect the answers and compare to the corract answers
    // may need to make a correct ans array above.
  }
  function shuffleArray(array) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * i);
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }

  let answerArray = []
  let shuffledAns = []
  if (data) {
    answerArray= data.map(({correct_answer, incorrect_answers}) => [
      { answer: correct_answer, correct:true} , ...incorrect_answers.map(function(ans) {
        return {answer:ans, correct: false}
      }),
    ]);  
  shuffledAns = answerArray.map(set => shuffleArray(set))
  console.log(shuffledAns)
  }


 if (shuffledAns !== [] && data) {
   return (
    <div className="question_Section">
      <form onSubmit={handleClick} >
        {data.map(
          ({ question, id }, i) => (
            <div className="QuestionBox" key={id}>
              <h4>{question}</h4> 
        {shuffledAns[i].map((obj) => (
              <label key={nanoid()}>
              <input
                type="radio"
                value={obj.correct}
                name={question}
                onChange={(e) => setUserChoices([...userChoices.slice(0, i),e.target.value,...userChoices.slice(i+1)])}
              />
              {obj.answer}
              <br></br></label>))}
              </div>))}
        <button type="submit">Submit</button>
        {result?<div>
          {result}
        </div>:<></>}
      </form>
      
    </div>
  )} 
  else {
    return(
      <></>
    );
  } 
}
