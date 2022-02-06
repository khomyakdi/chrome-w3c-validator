import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <button onClick={onClick}>+</button>
      {counter}
    </div>
  );
}

export default App;