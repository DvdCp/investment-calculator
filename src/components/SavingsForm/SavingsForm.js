import React, { useState } from 'react';

export const SavingsForm = (props) => {
  const [userInput, setUserInput] = useState({
    'current-savings': 0,
    'yearly-contribution': 0,
    'expected-return': 0,
    duration: 0
  });

  const inputOnChangeHandler = (inputId, value) => {
    setUserInput((prevState) => ({
      ...prevState,
      [inputId]: value
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);

    console.log(userInput);
  };

  const resetHandler = (event) => {
    event.preventDefault();

    setUserInput(() => ({
      'current-savings': 0,
      'yearly-contribution': 0,
      'expected-return': 0,
      duration: 0
    }));
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler} onReset={resetHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) => inputOnChangeHandler('current-savings', event.target.value)}
              value={userInput['current-savings']}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) => inputOnChangeHandler('yearly-contribution', event.target.value)}
              value={userInput['yearly-contribution']}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Expected Interest (%, per year)</label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) => inputOnChangeHandler('expected-return', event.target.value)}
              value={userInput['expected-return']}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) => inputOnChangeHandler('duration', event.target.value)}
              value={userInput['duration']}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};
