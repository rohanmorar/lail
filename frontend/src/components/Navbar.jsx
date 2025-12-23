import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import logo from "../assets/lail.png";
import NameLink from "../components/NameLink";

function Navbar(props) {
  return (
    <div className="navbar">
      <div
        className={
          "border-b border-b-gray-600 py-8 container mx-auto px-32 flex justify-between items-center"
        }
      >
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={logo} width="42" height="42"></img>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-x-6">
            <li>
              <NameLink name="pomodoro" to="/pomodoro"></NameLink>
            </li>
            <li>
              <NameLink name="settings" to="/settings"></NameLink>
            </li>
            <li>
              <a>sign in</a>
            </li>
            {/* <li>
              <details>
                <summary>...</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
