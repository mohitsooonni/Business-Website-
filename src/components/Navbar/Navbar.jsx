"use client";

import "./Navbar.css";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] =
    useState(false);

  return (
    <div className="n-wrapper">
      {/* desktop version */}
      <div className="container">
        <div className="n-container">
          <div className="n-logo">
            <span>Growbizz</span>
          </div>

          <div className="n-right">
            <div className="n-menu">
              <span>What we do</span>
              <span>How it works</span>
              <span>Who we invest in</span>
              <span>Testimonials</span>
            </div>
            <div className="fund-button">
              Get Funded
            </div>
          </div>
        </div>
      </div>

      <div className="nm-container">
        {/* Mobile Version */}
        <span>Growbizz</span>

        {/* menu icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight
            size={30}
            onClick={() =>
              setMobileMenuOpened(true)
            }
          />
        ) : (
          <RxCross2
            size={30}
            onClick={() =>
              setMobileMenuOpened(false)
            }
          />
        )}

        {/* mobile view */}
        <div
          className="nm-menu"
          style={{
            transform:
              mobileMenuOpened &&
              "translateX(0%)",
          }}
        >
          <span>What we do</span>
          <span>How it works</span>
          <span>Who we invest in</span>
          <span>Testimonials</span>

          <div className="m-funded-button">
            Get Funded
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
