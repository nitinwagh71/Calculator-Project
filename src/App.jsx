import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";

function App() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [currVal, setVal] = useState("");

  const handleOnClick = (buttonText) => {
    // console.log(event.target.firstChild.data); we wil get all button
    // console.log(buttonText);
    if (buttonText === "C") {
      setVal("");
    } else if (buttonText === "=") {
      let result = eval(currVal);
      setVal(result);
    } else {
      let displayNewVal = currVal + buttonText;
      setVal(displayNewVal);
    }
  };

  return (
    <center>
      <h1 className={styles.heading}>Calculator App</h1>
      <div className={styles.container}>
        <Display displayVal={currVal}></Display>
        <ButtonContainer
          buttonNames={buttonNames}
          handleOnClick={handleOnClick}
        ></ButtonContainer>
      </div>
    </center>
  );
}

export default App;
