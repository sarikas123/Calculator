import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ABC />
    </div>
  );
}

const ABC = () => {
  const [Result, setResult] = useState("");

  const ClickHandler = (e) => {
    setResult(Result.concat(e.target.value));
  };

  const Clear = () => {
    setResult("");
  };

  const Calculate = () => {
    setResult(eval(Result).toString());
  };
  return (
    <div className="Clac" id="answer">
      <h1>Calculator</h1>
      <input type="text" placeholder="0" value={Result} />
      <br />
      <input
        type="button"
        value="9"
        className="button"
        onClick={ClickHandler}
      />
      <input
        type="button"
        value="8"
        className="button"
        onClick={ClickHandler}
      />
      <input
        type="button"
        value="7"
        className="button"
        onClick={ClickHandler}
      />
      <br />
      <input
        type="button"
        value="6"
        className="button"
        onClick={ClickHandler}
      />
      <input
        type="button"
        value="5"
        className="button"
        onClick={ClickHandler}
      />
      <input
        type="button"
        value="4"
        className="button"
        onClick={ClickHandler}
      />
      <br />
      <input
        type="button"
        value="3"
        className="button"
        onClick={ClickHandler}
      />
      <input
        type="button"
        value="2"
        className="button"
        onClick={ClickHandler}
      />
      <input
        type="button"
        value="1"
        className="button"
        onClick={ClickHandler}
      />
      <br />
      <input
        type="button"
        value="0"
        className="button"
        onClick={ClickHandler}
      />
      <input
        type="button"
        value="+"
        className="button"
        onClick={ClickHandler}
      />
      <input
        type="button"
        value="-"
        className="button"
        onClick={ClickHandler}
      />
      <br />
      <input
        type="button"
        value="*"
        className="button"
        onClick={ClickHandler}
      />
      <input
        type="button"
        value="/"
        className="button"
        onClick={ClickHandler}
      />
      <input
        type="button"
        value="."
        className="button"
        onClick={ClickHandler}
      />
      <br />
      <input
        type="button"
        value="00"
        className="button"
        onClick={ClickHandler}
      />
      <input type="button" value="=" className="button" onClick={Calculate} />
      <input
        type="button"
        value="%"
        className="button"
        onClick={ClickHandler}
      />
      <input type="button" value="clear" className="button" onClick={Clear} />
    </div>
  );
};
