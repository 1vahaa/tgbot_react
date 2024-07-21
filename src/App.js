import './App.css';
import {useEffect} from "react";
import {useTg} from "./hooks/useTg";

function App() {

    const {onToggleButton} = useTg();
    useEffect(() => {
        tg.ready();
    }, []);


  return (
    <div className="App">
        жопа
        жопа
        <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
