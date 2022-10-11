import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const QuizQuestions = ({ questions, correctAns, options, index, notify }) => {
  return (
    <div
      className="container my-5 mx-auto px-5 py-4 d-flex flex-column rounded shadow p-3 mb-5 rounded"
      style={{ backgroundColor: "#F9FEFD", position: "relative" }}
    >
      <div>
        <div className="col-11">
          <h4>
            Quiz {index + 1}: {questions}
          </h4>
        </div>
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <button
            onClick={() => notify(correctAns)}
            className="bg-transparent border-0"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>
      <div>
        <form className="row mx-auto">
          {options.map((value, idx) => (
            <div key={idx} className="col-sm-6 d-flex align-items-center g-4">
              <input
                type="radio"
                id={value}
                name="option"
                value={value}
                onChange={() =>
                  value === correctAns && notify("Your answer is correct!!")
                }
              />
              <label htmlFor={value} className="ms-4">
                {value}
              </label>
            </div>
          ))}
          <br />
        </form>
      </div>
      <br />
    </div>
  );
};

export default QuizQuestions;
