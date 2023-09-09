import React from 'react';

export const ResultTable = (props) => {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>

          {props.result.map((yearStats) => (
            <tr key={yearStats.id}>
              <td>{yearStats.year}</td>
              <td>{yearStats.savingsEndOfYear}</td>
              <td>{yearStats.yearlyInterest}</td>
              <td>
                {yearStats.savingsEndOfYear - props.initialInvestment - yearStats.yearlyContribution * yearStats.year}
              </td>
              <td>{props.initialInvestment + yearStats.yearlyContribution * yearStats.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
