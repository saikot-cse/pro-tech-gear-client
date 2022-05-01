import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithubSquare,FaGoogle } from 'react-icons/fa';
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from '../../../Component/Loading/Loading';
const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = ()=>{
    signInWithGoogle();
  }
  const handleGithubSignIn = ()=>{
    signInWithGithub();
  }
  if(googleUser || githubUser){
    navigate(from, { replace: true })
  }
  if(googleError || githubError){

  }
  if(googleLoading || githubLoading){
    return <Loading />
  }
  return (
    <div>
      <h1 className="text-center my-5">Welcome to <span className="text-info">Login</span></h1>
      <div className="d-grid container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Button onClick={handleGoogleSignIn} className="mx-auto d-block mb-3 border-0 fw-bold" style={{ backgroundColor: "#4285F4" }}>
              <FaGoogle className="fs-4 me-2"/>Log In with Google
            </Button>
          </div>
          <div className="col-md-12 col-sm-12">
            <Button onClick={handleGithubSignIn} className="mx-auto d-block fw-bold" variant="dark">
              <FaGithubSquare className="fs-4 me-2"/>Log In with Github
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
          <Form.Label className="text-info">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="border-info shadow-none text-info" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="text-info">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="border-info shadow-none text-info" required />
        </Form.Group>
        <div>
          <Link to="#" className="ms-2 text-decoration-none text-info fw-bold">
            Forgot Password?
          </Link>
        </div>

        <Button className="w-50 mx-auto d-block text-white fw-bold" variant="info">
          Login
        </Button>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <div style={{ height: "2px", backgroundColor: "#d9dadb" }} className="w-50"></div>
          <p className="text-info mx-2 mt-2">or</p>
          <div style={{ height: "2px", backgroundColor: "#d9dadb" }} className="w-50"></div>
        </div>
        <div className="fw-bold">
          <span>Don't have any account?</span>
          <Link className="text-info ms-2 text-decoration-none" to="/register">
            Please Register
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
