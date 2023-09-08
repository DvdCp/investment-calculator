import React from 'react';
import { Header } from './components/Header/Header';
import { SavingsForm } from './components/SavingsForm/SavingsForm';
import { ResultTable } from './components/ResultTable/ResultTable';

function App() {
  return (
    <div>
      <Header />

      <SavingsForm />

      <ResultTable />
    </div>
  );
}

export default App;
