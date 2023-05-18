import React from "react";

function NavBar() {
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
  ];

  const navLinks = links.map(({ id, label }) => {
    return (
      <a key={id} href={`#${id}`}>
        {label}
      </a>
    );
  });

  return <nav>{navLinks}</nav>;
}
export default NavBar;
