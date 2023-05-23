import React,{ useState,useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import Row from 'react-bootstrap/esm/Row';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import MainScreen from '../../components/MainScreen/MainScreen';
import Col from 'react-bootstrap/esm/Col';
import axios from 'axios';
import LoadingPages from '../../components/LoadingPages/LoadingPages';
import ErrorMessages from '../../components/Errormeesages/ErrorMessages';
import { adminLogin } from "../../actions/userActions";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

const UserLogin = () => {

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 //const [error,setError] = useState(false);
 //const [loading,setLoading] = useState(false);

 const dispatch = useDispatch();

 const admin_Login = useSelector((state) => state.admin_Login);
 const { loading, error } = admin_Login;

 
const submitHandler = (e) => {
  e.preventDefault();
  dispatch(adminLogin(email, password));
};

  return (
//     <MainScreen>
//     <div className='m-5'>
//     {error && <ErrorMessages variant='danger'>{error}</ErrorMessages>}
//     {loading && <LoadingPages />}
//     <h1>Login</h1>
//     <hr />
//     <Form onSubmit={submitHandler}>
//      <Form.Group className="mb-3" controlId="formBasicEmail">
//      <Form.Label>Email address</Form.Label>
//      <Form.Control 
//       type="email" 
//       placeholder="Enter email"
//       value={email}
//       onChange={(e)=> setEmail(e.target.value)}
//     />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control 
//     type="password" 
//     placeholder="Password" 
//     value={password}
//     onChange={(e)=> setPassword(e.target.value)}
//     />
//   </Form.Group>
//   <Button variant="primary" type="submit" className='p-2'>
//     Submit
//   </Button>
// </Form>
// <Row className='my-3'>
//     <Col>
//      New Customer ? <Link to='/register'>Register Here</Link>
//     </Col>
// </Row>
// </div>
// </MainScreen>


<MDBContainer fluid className='p-4'>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

    <h1 style={{color:'#79d279'}} className="my-5 display-3 fw-bold ls-tight px-3">
      The best offer <br />
      <span className="text-primary">for your Education</span>
    </h1>

    <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
    Welcome to our educational web platform designed for children in rural areas. 
    Our platform is dedicated to providing quality education and support to children 
    who may not have access to adequate learning resources.
    </p>

  </MDBCol>

  <MDBCol md='6'>

    <MDBCard className='my-5'>
       <MainScreen>
    <div className='m-5'>
    {error && <ErrorMessages variant='danger'>{error}</ErrorMessages>}
     {loading && <LoadingPages />}
     <h1>Login</h1>
    <hr />
     <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
     <Form.Control 
      type="email" 
      placeholder="Enter email"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Password" 
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    />
  </Form.Group>
  {/* <Button variant="primary" type="submit" className='p-2'>
    Login
  </Button> */}

<Button type="submit" style={{border:'none', color:'#ffffff',backgroundColor:'#79d279',fontSize:'15px'}} class="btn btn">Login Here</Button>
</Form>
<Row className='my-3'>
    <Col style={{fontSize:'20px'}} >
     New To Here ? <Link style={{color:'#79d279',fontSize:'15px'}} to='/register'>Register Here</Link>
    </Col>
</Row>
</div>
</MainScreen>
</MDBCard>
</MDBCol>
</MDBRow>
</MDBContainer>
  )
}

export default UserLogin