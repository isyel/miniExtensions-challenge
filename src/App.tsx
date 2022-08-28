import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Student from "./pages/Student";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student/:id" element={<Student />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
