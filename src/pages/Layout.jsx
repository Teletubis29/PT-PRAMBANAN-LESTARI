import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full ">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
