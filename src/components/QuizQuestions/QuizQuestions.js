import React from "react";

const QuizQuestions = ({ questions, correctAns, options, id,index }) => {
  return (
    <div className="container my-5 mx-auto px-5 py-4 d-flex flex-column" style={{border:'2px solid red'}}>
      <div>
       <h4>Quiz {index+1}: {questions}</h4>
     </div>
      <div>
        <form className="row mx-auto">
          {options.map((value,idx) => (
            <div key={idx} className='col-sm-6'>
            <label htmlFor={value} >
              <input type="radio" id={value} name="option" value={value} />
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
