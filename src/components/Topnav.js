import React from 'react';
import {
  Nav,
  NavLink,
  NavMenuMobile,
  NavMenu,
  NavMobile
} from './NavbarElements.js';
import {FaHome, FaInfo, FaBloggerB} from "react-icons/fa";
import {AiTwotoneMail} from "react-icons/ai";


const Topnav = () => {
  return (
    <>
      <Nav className='desktop-navbar'>
        <NavMenu>
          <NavLink to='/home' activeStyle>
            My Intro
          </NavLink>
          <NavLink to='/about' activeStyle>
            About Me and my Skills
          </NavLink>
          <NavLink to='/blog' activeStyle>
            My Blog
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Me
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
      <NavMobile className='mobile-navbar'>
        <NavMenuMobile>
          <NavLink to='/' activeStyle>
            <FaHome></FaHome>
          </NavLink>
          <NavLink to='/about' activeStyle>
            <FaInfo></FaInfo>
          </NavLink>
          <NavLink to='/blog' activeStyle>
            <FaBloggerB></FaBloggerB>
          </NavLink>
          <NavLink to='/contact' activeStyle>
            <AiTwotoneMail></AiTwotoneMail>
          </NavLink>
        </NavMenuMobile>
      </NavMobile>
    </>
  );
};

export default Topnav;