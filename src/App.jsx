import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [inputGreetingMessage, setInputGreetingMessage] = useState("");
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={() => {
            setInputGreetingMessage(event.target.value);
          }}
          value={inputGreetingMessage}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreetingMessage(inputGreetingMessage);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
