import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import About from "./pages/About";
import Sale from "./pages/Sale";


function App() {
  return (
    <Router>
      {/* Navigation */}
      <nav style={{ padding: "10px", background: "#f5f5f5" }}>
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "0 10px" }}>
          About
        </Link>
         <Link to="/sale" style={{ margin: "0 10px" }}>
          Sale
        </Link>
      </nav>

      {/* Routing */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
         <Route
          path="/sale"
          element={
            <Layout>
              <Sale />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
