import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaGithubSquare, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../Component/Loading/Loading";
import auth from "../../../firebase.init";
const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const [signInWithEmailAndPassword, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const handleGithubSignIn = () => {
    signInWithGithub();
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
  const handleLogin = () => {
    signInWithEmailAndPassword(email, password);
  };
  if (googleUser || githubUser || user) {
    navigate(from, { replace: true });
  }
  useEffect(() => {
    const error = hookError || googleError || githubError || resetError;
    if (error) {
      console.log(error);
      switch (error?.code) {
        case "auth/user-not-found":
          toast("Please provide a valid email", { theme: "dark" });
          break;
        case "auth/invalid-email":
          toast("Please provide a valid email and password", { theme: "dark" });
          break;

        case "auth/wrong-password":
          toast("Wrong password.");
          break;
        case "auth/popup-closed-by-user":
          toast("having issue? Register with Email", { theme: "dark" });
          break;
        default:
          toast("something went wrong", { theme: "dark" });
      }
    }
  }, [hookError, googleError, githubError, resetError]);

  if (googleLoading || githubLoading || sending || loading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-center my-5">
        Welcome to <span className="text-info">Login</span>
      </h1>
      <div className="d-grid container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Button onClick={handleGoogleSignIn} className="mx-auto d-block mb-3 border-0 fw-bold" style={{ backgroundColor: "#4285F4" }}>
              <FaGoogle className="fs-4 me-2" />
              Log In with Google
            </Button>
          </div>
          <div className="col-md-12 col-sm-12">
            <Button onClick={handleGithubSignIn} className="mx-auto d-block fw-bold" variant="dark">
              <FaGithubSquare className="fs-4 me-2" />
              Log In with Github
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
          <Form.Control onBlur={handleEmailblur} type="email" placeholder="Enter email" className="border-info shadow-none text-info" required />
        </Form.Group>
        <p className="text-danger">{emailError}</p>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="text-info">Password</Form.Label>
          <Form.Control onBlur={handlePasswordblur} type="password" placeholder="Password" className="border-info shadow-none text-info" required />
        </Form.Group>
        <p className="text-danger">{passwordError}</p>
        <div>
          <Link
            onClick={async () => {
              await sendPasswordResetEmail(email);
              toast("Sent email");
            }}
            to="#"
            className="ms-2 text-decoration-none text-info fw-bold"
          >
            Forgot Password?
          </Link>
        </div>

        <Button onClick={handleLogin} className="w-50 mx-auto d-block text-white fw-bold" variant="info">
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
