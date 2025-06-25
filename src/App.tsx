import { useState } from 'react';
import { Series } from './lib/Series';
import { BasicCard } from './components/basicCard';
import { FormCard } from './components/formCard';
import { Resultado } from './components/result';
import './App.css';

function App() {

  const [resultado, setResultado] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (n: number) => {
    try {
      const res = Series.calculateN(n);
      setResultado(res);
      setError(null);
    } catch (e) {
      setResultado(null);
      setError((e as Error).message);
    }
  };

  return (
    <>
      <BasicCard>
        <FormCard onSubmit={handleSubmit} />
        <Resultado result={resultado} error={error} />
      </BasicCard>
    </>
  );
}

export default App;
