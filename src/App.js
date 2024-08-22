import React, { Suspense, lazy } from 'react';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Navbar from './components/CommonSections/Navbar.jsx';
import Loading from './components/CommonSections/Loading.jsx';

const HomePage = lazy(() => import('./components/Homepage/HomePage.jsx'));
const CareersPage = lazy(() => import('./components/CareersPage/Careers.jsx'));
const AboutPage = lazy(() => import('./components/AboutPage/About.jsx'));
const SecurityPage = lazy(() => import('./components/SecurityPage/Security.jsx'));
const SignUpPage = lazy(() => import('./components/SignUp/SignUp.jsx'));
const LoginPage = lazy(() => import('./components/SignUp/Login.jsx'));

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <><Navbar/><HomePage/></>
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
    },
    {
      path: "*",
      element: <Navigate to="/" replace />, // Redirect to homepage
    }
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
