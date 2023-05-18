import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userActions'



const Header = ({history,setSearch}) => {
 
  const dispatch =useDispatch();
  const userLogin = useSelector(state =>state.userLogin);
  const { userInfo }= userLogin;

  const logoutHandler=()=>{
    dispatch(logout());
  }

  return (
    <div>
      <Navbar bg="success" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="/">LearnElite</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className='m-auto'>
               <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=> setSearch(e.target.value)}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
            </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
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
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header