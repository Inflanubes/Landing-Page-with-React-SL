import React from "react";




const Navbar = () => {

return (

<nav className="navbar navbar-expand-lg p-3 bg-dark text-white position-fixed top-0 end-0 bottom-2">

  <div className="container-fluid">

    <a className="navbar-brand px-4 text-white" href="#">Start Bootstrap</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

      <span className="navbar-toggler-icon"></span>

    </button>

    <div className="collapse navbar d-flex justify-content-end pe-4" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

        <li className="nav-item">

          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>

        </li>

        <li className="nav-item">

          <a className="nav-link text-white" href="#">About</a>

        </li>

        <li className="nav-item dropdown">

          <a className="nav-link text-white" href="#" role="button"  aria-expanded="false">Services</a>

        </li>

        <li className="nav-item">

          <a className="nav-link disabled text-white" aria-disabled="true">Contact</a>

        </li>

      </ul>

    </div>

  </div>

</nav>










);

};

export default Navbar;