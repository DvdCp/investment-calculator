import React from 'react';

const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

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
              <td>{yearStats.year.toFixed(2)}</td>
              <td>{formatter.format(yearStats.savingsEndOfYear)}</td>
              <td>{formatter.format(yearStats.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  yearStats.savingsEndOfYear - props.initialInvestment - yearStats.yearlyContribution * yearStats.year
                )}
              </td>
              <td>{formatter.format(props.initialInvestment + yearStats.yearlyContribution * yearStats.year)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
