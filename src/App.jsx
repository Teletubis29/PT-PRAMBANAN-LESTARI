import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Sale from "./pages/Sale";
import Gallery from "./pages/Gallery";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Pembayaran from "./pages/Pembayaran";
import PropertyDetail from "./pages/PropertyDetail";
import PackageArchitect from "./components/Pembayaran/PackageArchitect";
import PackageInterior from "./components/Pembayaran/PackageInterior";
import PackageConstruction from "./components/Pembayaran/PackageConstruction";
import Architect from "./pages/Architect";

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
          path="/properti/:id"
          element={
            <Layout>
              <PropertyDetail />
            </Layout>
          }
        />
        <Route
          path="/pembayaran"
          element={
            <Layout>
              <Pembayaran />
            </Layout>
          }
        />
        <Route
          path="/jasa-arsitektur"
          element={
            <Layout>
              <Architect />
            </Layout>
          }
        />
          <Route
          path="/pembayaran/jasa-interior"
          element={
            <Layout>
              <PackageInterior />
            </Layout>
          }
        />
             <Route
          path="/pembayaran/jasa-konstruksi"
          element={
            <Layout>
              <PackageConstruction />
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
          <Route
          path="/our-experience"
          element={
            <Layout>
              <Experience />
            </Layout>
          }
        />
        <Route
          path="/kontak"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
