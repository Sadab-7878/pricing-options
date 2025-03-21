import React, { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/pricing", name: "Pricing" },
  ];

  return (
    <>
      <nav className="text-black bg-yellow-200 p-6">
        <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
          {open === true ? <IoCloseOutline /> : <HiOutlineMenuAlt1 />}
        </div>
        <ul className={` ${open ? "top-16" : "-top-60"} duration-1000  md:flex md:flex-row md:static absolute bg-yellow-200 px-6 `}>
          {routes.map((route) => (
            <Link key={route.id} route={route} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
