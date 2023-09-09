import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { SavingsForm } from './components/SavingsForm/SavingsForm';
import { ResultTable } from './components/ResultTable/ResultTable';

function App() {
  const [result, setResults] = useState([]);
  const [initialInvestment, setInitialInvestment] = useState();

  const calculateHandler = (userInput) => {
    console.log(userInput);

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings'];
    setInitialInvestment(currentSavings);

    const expectedReturn = +userInput['expected-return'] / 100; // as percentage
    const yearlyContribution = +userInput['yearly-contribution'];
    const duration = +userInput['duration'];

    let totalInvestment = 0;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInvestment += yearlyContribution;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution,
        totalInvestment
      });
    }

    setResults(yearlyData);
  };

  return (
    <div>
      <Header />

      <SavingsForm onCalculate={calculateHandler} />

      <ResultTable result={result} initialInvestment={initialInvestment} />
    </div>
  );
}

export default App;
