import React from 'react'

const Hero = () => {
  return (
   <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Find Your <span className="accent">Dream Job</span> Faster
        </h1>
        <p className="hero-sub">
          Discover top opportunities from leading companies. Personalized job matches, easy applications, real-time updates <span>— all in one place.</span>
        </p>

        <div className="search-row">
          <div className="search-inputs">
            <input className="input" placeholder="Enter job title, keywords or company..." />
            <input className="input small" placeholder="Location" />
          </div>
          <button className="btn explore">Explore jobs</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          <img
            src="src\img.jpg"
            alt="img"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
