import React from 'react'
import logo1 from '../assets/Images/google.png'
import logo2 from '../assets/Images/microsoft.png'
import logo3 from '../assets/Images/wipro.png'
import logo4 from '../assets/Images/tcs.png'
import logo5 from '../assets/Images/accenture.png'
import logo6 from '../assets/Images/amazon.png'


function Companies() {
  return (
    <section className="companies">
      <h2>Top Companies hiring currently</h2>
      <div className="logo-row">
        <img src={logo1} alt="Google" className="logo" />
        <img src={logo2} alt="Microsoft" className="logo" />
        <img src={logo3} alt="Wipro" className="logo" />
        <img src={logo4} alt="TCS" className="logo" />
        <img src={logo5} alt="Accenture" className="logoAC" />
        <img src={logo6} alt="Amazon" className="logoA" />
      </div>
    </section>
  )
}

export default Companies



