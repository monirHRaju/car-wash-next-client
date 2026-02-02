"use client";
import React, { use } from "react";
import Container from "./Container";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Logo from "./Logo";
import { UserContext } from "@/context/user.context";

const Navbar = () => {
  const {user} = use(UserContext)

  return (
    <div className="bg-primary text-primary-content">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="lg:hidden flex gap-2 items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                <Logo />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-200 text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavLinks />
              </ul>
            </div>
            <div className="text-xl hidden lg:block">
              <Logo/>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLinks/>
            </ul>
          </div>
          <div className="navbar-end">
            {
              user ? (
                <Link href="/dashboard" className="btn btn-outline">
                  Dashboard
                </Link>
              ) : (
                <Link href={'/login'} className="btn btn-white btn-outline">Login</Link>
              ) 
            }

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
