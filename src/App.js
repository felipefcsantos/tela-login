import { useContext } from "react";
import "./App.css";
import { ContextNavigate } from "./context/ContextNavigate";


function App() {
  const {page} = useContext(ContextNavigate)
  return (
    <div className="App">
      {page}
    </div>
  );
}

export default App;
