import React from 'react';
import  {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navbar from './components/CommonSections/Navbar.jsx';
import HomePage from './components/Homepage/HomePage.jsx';
import CareersPage from './components/CareersPage/Careers.jsx';
import AboutPage from './components/AboutPage/About.jsx';
import SecurityPage from './components/SecurityPage/Security.jsx'
import SignUpPage from './components/SignUp/SignUp.jsx';
import LoginPage from './components/SignUp/Login.jsx';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/> <HomePage/></>
    },
    {
      path: "/Careers",
      element: <><Navbar/><CareersPage/></>
    },
    {
      path: "/About",
      element: <><Navbar/><AboutPage/></>
    },
    {
      path: "/Security",
      element: <><Navbar/><SecurityPage/></>
    },
    {
      path: "/SignUp",
      element: <><Navbar/><SignUpPage/></>
    },
    {
      path: "/Login",
      element: <><Navbar/><LoginPage/></>
    }

  ])


  return (
    <>
    <RouterProvider router = {router} />
    </>
  )
}

export default App;
