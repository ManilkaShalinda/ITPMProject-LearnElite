import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';

const AdminHome = () => {
  return (
    <div>
          <divmain className='main'>
        <Container>
            <Row>
                <div className='intro-text'>
                  <div >
                    <h1 className='title'>Welcome to Admin Page</h1>
                    <p className='subtitle'>One safe place for all category</p>
                  </div>
                  <div className='buttonContainor'>
                    <a href='/userlogin'>
                        <Button size='lg' className='landingButton'>Login</Button>
                    </a>
                        <a href='/userregister'>
                        <Button 
                        size='lg' 
                        className='landingButton'
                        variant='outline-primary'
                        >
                            SignUp
                        </Button>
                    </a>
                  </div>
               </div>
            </Row>
        </Container>
    </divmain>
    </div>
  )
}

export default AdminHome