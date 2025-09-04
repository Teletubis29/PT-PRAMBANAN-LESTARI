import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import About from "./pages/About";
import Sale from "./pages/Sale";
import Gallery from "./pages/Gallery";


function App() {
  return (
    <Router>
      {/* Navigation */}
      {/* <nav style={{ padding: "10px", background: "#f5f5f5" }}>
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/tentang-kami" style={{ margin: "0 10px" }}>
          About
        </Link>
         <Link to="/properti" style={{ margin: "0 10px" }}>
          Sale
        </Link>
  
      </nav> */}

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
          path="/tentang-kami"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
         <Route
          path="/properti"
          element={
            <Layout>
              <Sale />
            </Layout>
          }
        />
          <Route
          path="/galeri"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
      </Routes>
      
    </Router>
  );
}

export default App;
