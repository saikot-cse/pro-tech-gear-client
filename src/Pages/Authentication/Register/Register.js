import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithubSquare,FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div>
      <h1 className="text-center text-info my-5">Register Here</h1>

      <div className="d-grid container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Button className="mx-auto d-block mb-3 border-0 fw-bold" style={{ backgroundColor: "#4285F4" }}>
              <FaGoogle className="fs-4 me-2"/>Register with Google
            </Button>
          </div>
          <div className="col-md-12 col-sm-12">
            <Button className="mx-auto d-block fw-bold" variant="dark">
              <FaGithubSquare className="fs-4 me-2 "/>Register with Github
            </Button>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3">
        <div style={{ height: "2px", backgroundColor: "#d9dadb" }} className="w-25"></div>
        <p className="text-info mx-2 mt-2">or</p>
        <div style={{ height: "2px", backgroundColor: "#d9dadb" }} className="w-25"></div>
      </div>
      <Form className="w-50 mx-auto">
        <Form.Group controlId="formGroupEmail">
          <Form.Label className="text-white">Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" className="border-info shadow-none text-info" required />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="border-info shadow-none text-info" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="border-info shadow-none text-info" required />
        </Form.Group>

        <Button className="w-50 mx-auto d-block text-white fw-bold" variant="info">
          Register
        </Button>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <div style={{ height: "2px", backgroundColor: "#d9dadb" }} className="w-50"></div>
          <p className="text-info mx-2 mt-2">or</p>
          <div style={{ height: "2px", backgroundColor: "#d9dadb" }} className="w-50"></div>
        </div>
        <div className='fw-bold'>
          <span>Already have any account?</span>
          <Link className="text-info ms-2 text-decoration-none" to="/login">
            Please Login
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;