import React from 'react'

const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <span className="brand-primary">Career</span>
          <span className="brand-accent">Connect</span>
        </div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Jobs</a>
          <a href="#">Companies</a>
        </nav>

        <div className="nav-actions">
          <button className="btn outline">Job seeker</button>
          <button className="btn primary">Employer</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
