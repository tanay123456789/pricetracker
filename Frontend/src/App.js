import { useRef, useState } from 'react';
import './App.css';
import InputComp from './components/inputcomp';
import ShowList from './components/showlist';

function App() {
  const [result, setResult] = useState(null);
  const checkfor = (value) => {
    setResult(value);
  };

  return (
    <div className="App">
      <InputComp getValue={checkfor}></InputComp>
      {result ? <ShowList res={result}></ShowList> : undefined}
    </div>
  );
}

export default App;
