import React from 'react';
import { Button, Container, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
                <div>
                    <h1 className='title'>Welcome to LearnElite</h1>
                    <p className='suntitle'>DD</p>
                </div>
                <div className='buttonContainer'>
                    <a href='/login'>
                        <Button>Login</Button>
                    </a>
                    <a href='/register'>
                        <Button>Register</Button>
                    </a>
                </div>
            </Row>
        </Container>

    </div>
  )
}

export default LandingPage