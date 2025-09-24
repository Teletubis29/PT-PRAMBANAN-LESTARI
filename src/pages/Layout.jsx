import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full pt-[64px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
