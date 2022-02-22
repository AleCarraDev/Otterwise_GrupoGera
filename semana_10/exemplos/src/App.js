import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("renderizou");

  let count2 = 0;

  return (
    <div>
      <p>{count}</p>
      <p>{count2}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => count2++}> + 1(2)</button>
    </div>
  );
}

export default App;
