import Footer from "../components/Footer.jsx";
import Navbar from "../components/navbar.jsx";
import Home from "./home.jsx";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full"> {/* tambahin w-full */}
        <Home />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
