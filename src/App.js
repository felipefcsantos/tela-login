import { useContext } from "react";
import "./App.css";
import { ContextNavigate } from "./context/ContextNavigate";
import BackCar from "./components/BackCar";


function App() {
  const {page} = useContext(ContextNavigate)
  return (
    <BackCar>
      {page}
    </BackCar>
  );
}

export default App;
