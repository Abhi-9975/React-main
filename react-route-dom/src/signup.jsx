import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  function handleSignup() {
    navigate("/login"); // corrected lowercase path
  }

  return (
    <div>
      <button onClick={handleSignup}>Click</button>
      <h1>I am the signup page</h1>
    </div>
  );
}

export default Signup;
