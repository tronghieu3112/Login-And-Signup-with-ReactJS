import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./Form/Login/LoginForm";
import SignUpForm from "./Form/SignUp/SignUpForm";

function App() {
  return (
    <div>
      <LoginForm />
      <Router>
        <div>
          <Routes>
            <Route exact path="/signup" element={<SignUpForm />} />
            <Route exact path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
