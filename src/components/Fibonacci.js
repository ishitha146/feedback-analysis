import React, { useState } from "react";

function Fibonacci() {
  const [num, setNum] = useState("");
  const [sequence, setSequence] = useState([]);

  const generateFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSequence(generateFibonacci(Number(num)));
  };

  return (
    <div>
      <h2>Fibonacci Generator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter a number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          required
        />
        <button type="submit">Generate</button>
      </form>
      <p>{sequence.join(", ")}</p>
    </div>
  );
}

export default Fibonacci;
