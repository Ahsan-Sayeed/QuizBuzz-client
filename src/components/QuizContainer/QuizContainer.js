import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestions from "../QuizQuestions/QuizQuestions";

const QuizContainer = () => {
  const { data } = useLoaderData();
  console.log(data.questions);
  return (
    <div>
      <h1 className="text-center">Quiz of {data.name}</h1>
      {data.questions.map((value,index) => (
        <QuizQuestions
          key={value.id}
          questions={value.question}
          correctAns={value.correctAnswer}
          options={value.options}
          id={value.id}
          index={index}
        ></QuizQuestions>
      ))}
    </div>
  );
};

export default QuizContainer;
