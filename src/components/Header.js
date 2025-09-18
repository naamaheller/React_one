import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/world">World</Link>
        <Link to="/business">Business</Link>
      </nav>
    </header>
  );
}
