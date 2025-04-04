import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";

function Child({ sendMessage, items }) {
  const [x, setX] = useState("John! From child");
  return (
    <div>
      <h1>Child</h1>
      <button onClick={() => sendMessage("Hello World!")}>Send</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const items = [1, 2, 3, 4, 5, 6];
  const [message, setMessage] = useState("");

  const handleChildMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div className="bg-gray-800 h-[100vh] flex flex-col items-center ">
      <Child items={items} sendMessage={handleChildMessage} />
      {message}
    </div>
  );
}

export default App;
