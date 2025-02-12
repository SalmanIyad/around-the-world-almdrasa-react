import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen  bg-gray-100 font-alamiri dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
