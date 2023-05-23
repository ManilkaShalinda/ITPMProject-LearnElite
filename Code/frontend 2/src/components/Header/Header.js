import React from 'react'
import {Button, Badge,Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { adminLogout } from '../../actions/userActions'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {

  const dispatch = useDispatch();

  const admin_Login= useSelector((state)=> state.admin_Login);

  const { adminInfo } = admin_Login;

  const logoutHandler=()=>{
    dispatch(adminLogout());
  }
 
  return (
  

      <div>
      <Navbar style={{ backgroundColor: "#12af39" }} expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="/">LearnElite</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className='m-auto'>
            </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', paddingLeft: '60%' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link href="#action2">Courses</Nav.Link>
            <Nav.Link href="#action2">Events</Nav.Link>
            <Nav.Link href="#action2">Counseling</Nav.Link>
            <Nav.Link href="#action2"><Link to='/category'>Donation</Link></Nav.Link>
            <NavDropdown title="Features" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item ><Link to='/category'>Product</Link></NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item   onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
              <NavDropdown.Item   href="/userlogin">
                LogIn
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header