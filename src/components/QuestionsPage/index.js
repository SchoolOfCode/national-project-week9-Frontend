import React from "react";
import Topic from "../Topic";
import Question from "../Question";
import mockData from "../../lib";

export default function QuestionsPage() {



  return (
    <div className="question_Section">
      <form>
        <p>Questions</p>
        {mockData.payload.map((obj) => {
            return (
                <Question key={obj.id} question={obj.question}></Question>
            )
        })}
        <input type="submit"></input>
      </form>
    </div>
  );
}
