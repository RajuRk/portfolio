import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-md-auto gap-2">
            <li className="nav-item rounded">
              <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-house-fill me-2"></i>Home</a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="#"><i className="bi bi-people-fill me-2"></i>About Me</a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="#"><i className="bi bi-telephone-fill me-2"></i>Skills</a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="#"><i className="bi bi-person-fill me-2"></i>Projects</a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="#"><i className="bi bi-person-fill me-2"></i>Contact Me</a>
            </li>
        </ul>
       </div>
      </div>
    </nav>     
  )
}

export default Header
