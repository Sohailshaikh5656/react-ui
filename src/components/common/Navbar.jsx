export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-white bg-white py-2 px-3">
        <div className="container-fluid justify-content-between">
          {/* LEFT - LOGO */}
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <i className="bi bi-activity"></i>&nbsp;Krist
            </a>
          </div>
  
          {/* HAMBURGER BUTTON */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          {/* CENTER + RIGHT */}
          <div className="collapse navbar-collapse align-items-center" id="navbarMenu">
            
            {/* CENTER - LINKS */}
            <div className="d-flex justify-content-center flex-grow-1">
              <ul className="navbar-nav mb-2 mb-lg-0 d-flex gap-4 align-items-center">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#shop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#casual">Casual Wear</a></li>
                    <li><a className="dropdown-item" href="#western">Western Wear</a></li>
                    <li><a className="dropdown-item" href="#ethnic">Ethnic Wear</a></li>
                    <li><a className="dropdown-item" href="#kids">Kids Wear</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#story">Our Story</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
  
            {/* RIGHT - ICONS + LOGIN */}
            <div className="d-flex align-items-center">
              <ul className="navbar-nav flex-row gap-3 align-items-center">
                <li className="nav-item">
                  <a className="nav-link" href="#search"><i className="bi bi-search"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#like"><i className="bi bi-heart"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#cart"><i className="bi bi-cart"></i></a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-dark d-flex align-items-center gap-1" href="#login">
                    Login <i className="bi bi-person"></i>
                  </a>
                </li>
              </ul>
            </div>
  
          </div>
        </div>
      </nav>
    );
  }
  