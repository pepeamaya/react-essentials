import './App.css';
import {useState} from "react";

function App() {
  const [checked, setChecked] = useState(false);

  function toggle() { // reducer
    setChecked((checked) => !checked);
  }


  return (
    <>
      <input 
        type="checkbox"
        value={checked} 
        onChange={toggle} 
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

export default App;
