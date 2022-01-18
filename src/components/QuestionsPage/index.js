import React from 'react'
import Topic from "../Topic";
import Question from "../Question";

export default function QuestionsPage() {
    return (
        <div className='question_Section'>
        <p>Questions</p>
            <Question question="What is your favorite color?"></Question>
        </div>
    )
}