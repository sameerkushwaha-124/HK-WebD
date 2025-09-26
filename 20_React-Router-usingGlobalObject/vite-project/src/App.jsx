import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <>

      <button onClick={()=>{            // but this is not the right way to navigate 
            window.location.href = '/'  // from one page to another in client side rendering
      }}>FOR LANDING PAGE</button>    


      <button onClick={()=>{ 
            window.location.href = '/dashboard'
      }}>FOR DASHBOARD PAGE</button>

    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashbord />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
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
