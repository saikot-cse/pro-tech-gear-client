import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaGithubSquare,FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../../Component/Loading/Loading';
const Register = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const [createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignUp = () => {
    signInWithGoogle();
  };
  const handleGithubSignUp = () => {
    signInWithGithub();
  };
  if (googleUser || githubUser) {
    navigate(from, { replace: true });
  }
  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleEmailblur = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setEmail(e.target.value);
      setEmailError("");
    } else {
      setEmailError("Invalid Email");
    }
  };
  const handlePasswordblur = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setPassword(e.target.value);
      setPasswordError("");
    } else {
      setPasswordError("Must content eight characters, at least one letter and one number");
    }
  };
  const handleConfirmPasswordblur = (e) => {
    if (e.target.value === password) {
      setConfirmPassword(e.target.value);
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Password Dosen't Match");
    }
  };
  const handleRegister = () => {
    createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user,navigate,from]);
  useEffect(() => {
    const error = hookError || googleError || githubError;
    if (error) {
      switch (error?.code) {
        case "auth/email-already-in-use":
          toast("Email already used. Please try another email", { theme: "dark" });
          break;
        case "auth/invalid-email":
          toast("Please provide a valid email and password", { theme: "dark" });
          break;
        case "auth/wrong-password":
          toast("Wrong password.", { theme: "dark" });
          break;
        case "auth/popup-closed-by-user":
          toast("having issue? Register with Email", { theme: "dark" });
          break;
        default:
          toast("something went wrong", { theme: "dark" });
      }
    }
  }, [hookError, googleError, githubError]);
  if (loading || googleLoading || githubLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center text-info my-5">Register Here</h1>
      <div className="d-grid container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Button onClick={handleGoogleSignUp} className="mx-auto d-block mb-3 border-0 fw-bold" style={{ backgroundColor: "#4285F4" }}>
              <FaGoogle className="fs-4 me-2"/>Register with Google
            </Button>
          </div>
          <div className="col-md-12 col-sm-12">
            <Button onClick={handleGithubSignUp} className="mx-auto d-block fw-bold" variant="dark">
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
        <Form.Group controlId="formGroupName">
          <Form.Label className="text-info">Name</Form.Label>
          <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your Name" className="border-info shadow-none text-info" required />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label className="text-info">Email address</Form.Label>
          <Form.Control onBlur={handleEmailblur} type="email" placeholder="Enter email" className="border-info shadow-none text-info" required />
        </Form.Group>
        <p className="text-info">{emailError}</p>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="text-info">Password</Form.Label>
          <Form.Control onBlur={handlePasswordblur} type="password" placeholder="Password" className="border-info shadow-none text-info" required />
        </Form.Group>
        <p className="text-info">{passwordError}</p>
        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
          <Form.Label className="text-info">Confirm Password</Form.Label>
          <Form.Control onBlur={handleConfirmPasswordblur} type="password" placeholder="Confirm Password" className="border-info shadow-none text-info" required />
        </Form.Group>
        <p className="text-warning">{confirmPasswordError}</p>
        <Button onClick={handleRegister} className="w-50 mx-auto d-block text-white fw-bold" variant="info">
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