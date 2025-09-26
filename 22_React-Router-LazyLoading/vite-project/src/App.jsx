import  React, { Suspense }  from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

function App() {
 
  return (
    <>
      
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      </BrowserRouter>
      
    </>
  );
}

function AppBar() {
  const navigate = useNavigate(); 

  return (
    <>
      <button
        onClick={() => {
          navigate("/dashboard"); 
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



function ErrorPage() {
  return <h1>404 Page Not Found</h1>;
}

export default App;
