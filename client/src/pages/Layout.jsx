//resource: copilot
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <div className="app-container">
        <header className="app-header">
          <Navbar />
        </header>
        <nav className="app-nav">
          <Link to="/"></Link>
          <Link to="/about"></Link>
        </nav>
        <main className="app-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
