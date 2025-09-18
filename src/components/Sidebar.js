import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/world">World</Link></li>
        <li><Link to="/business">Business</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </aside>
  );
}
