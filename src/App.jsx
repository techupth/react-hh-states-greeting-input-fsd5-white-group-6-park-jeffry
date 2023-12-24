import "./App.css";
import { useState } from "react";
function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [changeMessage, setChangMessage] = useState("");
  const handleChange = (event) => setChangMessage(event.target.value);
  const uniqueText = () => setGreetingMessage(changeMessage);
  const thai = () => setGreetingMessage("สวัสดี!");
  const english = () => setGreetingMessage("Hi !");
  const chaina = () => setGreetingMessage("你好!");
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={handleChange}
          value={changeMessage}
        />
      </div>

      <div className="buttons">
        <button onClick={uniqueText}>UpdateText</button>
        <button onClick={thai}>สวัสดี!</button>
        <button onClick={english}>Hi!</button>
        <button onClick={chaina}>你好!</button>
      </div>
    </div>
  );
}

export default App;
