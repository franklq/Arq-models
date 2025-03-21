import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main className="pt-23">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;