import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LayOut from "./components/Layout/LayOut";
import Home from "./page/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
