import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
function App() {
  let [result, setResult] = useState("");

  const onButtonClickHandler = (buttonName) => {
    if (buttonName === "C") {
      setResult("");
      return;
    }
    if (buttonName === "=") {
      const newResult = eval(result);
      setResult(newResult);
      return;
    }
    if (buttonName === "<=") {
      if (!result || !result.length || result.length === 1) {
        setResult("");
        return;
      }
      const newResult = result.slice(0, -1);
      setResult(newResult);
      return;
    }

    const newResult = result + buttonName;
    setResult(newResult);
  };

  return (
    <div className={styles.calculator} id="calculator">
      <Display result={result} />
      <ButtonsContainer onButtonClickHandler={onButtonClickHandler} />
    </div>
  );
}

export default App;
