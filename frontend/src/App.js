import "./App.css";
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChatPage from "./pages/ChatPage"
import FourOFour from "./pages/PageNotFound"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;
