import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Reset from "./authentication/Reset";
import Body from "./components/Body";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/body" element={<Body />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
