import React, { useState } from 'react';

function Fibonacci() {
  const [num, setNum] = useState('');
  const [sequence, setSequence] = useState([]);

  const generateFibonacci = () => {
    const n = parseInt(num);
    if (isNaN(n) || n <= 0) return setSequence([]);

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    setSequence(fib.slice(0, n));
  };

  return (
    <div className="fib-container">
      <h2>Fibonacci Generator</h2>
      <input type="number" placeholder="Enter count" value={num} onChange={e => setNum(e.target.value)} />
      <button onClick={generateFibonacci}>Generate</button>
      <div className="fib-result">
        {sequence.join(', ')}
      </div>
    </div>
  );
}

export default Fibonacci;
