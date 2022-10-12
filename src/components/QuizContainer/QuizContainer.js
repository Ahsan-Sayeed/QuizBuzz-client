import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestions from "../QuizQuestions/QuizQuestions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizContainer = () => {
  const { data } = useLoaderData();
  const notify = (e) => toast(e);

  return (
    <div className="my-5 container">
      <div className="container">
      <h1 className="text-center">Quiz of {data.name}</h1>
      {data.questions.map((value, index) => (
        <QuizQuestions
          key={value.id}
          questions={value.question}
          correctAns={value.correctAnswer}
          options={value.options}
          index={index}
          notify={notify}
        ></QuizQuestions>
      ))}
      <ToastContainer />
      </div>
    </div>
  );
};

export default QuizContainer;
