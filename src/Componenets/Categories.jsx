import React from 'react'
import { FaTv } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaBullhorn } from "react-icons/fa";

export default function Categories() {
  return (
    <section className="categories">
      <h3>Popular job categories</h3>
      <div className="cat-grid">
        
        <div className="cat-card">
          <div className="cat-icon"><FaTv/></div>
          <div className="cat-title">Technology & IT</div>
          <div className="cat-sub">1350 Jobs available</div>
        </div>

        <div className="cat-card">
          <div className="cat-icon"><MdOutlineHealthAndSafety/></div>
          <div className="cat-title">Health care</div>
          <div className="cat-sub">578 Jobs available</div>
        </div>

        <div className="cat-card">
          <div className="cat-icon"><LuChartNoAxesCombined/></div>
          <div className="cat-title">Finance & Banking</div>
          <div className="cat-sub">842 Jobs available</div>
        </div>

        <div className="cat-card">
          <div className="cat-icon"><FaBullhorn/></div>
          <div className="cat-title">Marketing & Sales</div>
          <div className="cat-sub">573 Jobs available</div>
        </div>

      </div>
    </section>
  )
}
