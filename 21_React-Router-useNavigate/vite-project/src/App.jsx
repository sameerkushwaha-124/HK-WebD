import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();   // you can not use directly use useNavigate in App component
  // this should be somehow inside borwserRouter
  return (
    <>
      
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashbord />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

function AppBar() {
  const navigate = useNavigate();   // no any hard reload.

  return (
    <>
      <button
        onClick={() => {
          navigate("/dashboard"); // this is the right way to navigate')
        }}
      >
        FOR DASHBOARD PAGE
      </button>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        FOR LANDING PAGE
      </button>
    </>
  );
}

function Dashbord() {
  return <h1>Dashboard</h1>;
}

function Landing() {
  return <h1>Landing Page</h1>;
}

function ErrorPage() {
  return <h1>404 Page Not Found</h1>;
}

export default App;
