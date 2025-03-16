import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-2 w-100">
      <div className="container-fluid px-4 py-2">
        <NavLink className="navbar-brand fw-bold text-dark px-3" to="/">
          Seuss Treasury
        </NavLink>
        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link mx-2 px-2 ${isActive ? "active" : ""}`
                }
                to="/"
              >
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link mx-2 px-2 ${isActive ? "active" : ""}`
                }
                to="/quotes"
              >
                Quotes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
