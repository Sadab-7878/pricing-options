import React from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/pricing", name: "Pricing" },
  ];

  return (
    <>
      <nav>
        <HiOutlineMenuAlt1 />
        <ul className="md:flex ">
          {routes.map((route) => (
            <Link key={route.id} route={route} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
