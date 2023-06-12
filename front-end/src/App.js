import { Routes, Route, Navigate, useLocation } from "react-router-dom"

import { useAuthContext } from "./hooks/useAuthContext";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages

// MAIN AUTHORIZATION PAGES
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

// PAYMENT PAGE
import StripePayment from "./pages/StripePayment/StripePayment";


// MORE IMP PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";


// DATA RELATED PAGES
import TimeLine from "./pages/TimeLine/TimeLine";
import KnowledgeCenter from "./pages/KnowledgeCenter/KnowledgeCenter";
import Faq from "./pages/Faq/Faq";


// DETECT VIDEO PAGES
import Scanner from "./pages/Scanner/Scanner";

import Dashboard from "./pages/Dashboard/Dashboard";


// BOTTOM LINKS
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";

import './App.css';

function App() {

  const { user } = useAuthContext();
  const { pathname } = useLocation();

  console.log("Route : ", pathname);

  const excludedRoutes = ['/login', '/signUp'];

  return (
    <>

      {/* dont show navbar on the login page*/}

      {
        !excludedRoutes.includes(pathname) && <Navbar />
      }
      <Routes>

        <Route
          path="login"
          element={!user ? <Login /> : <Navigate to="/" />} />

        <Route
          path="signUp"
          element={<SignUp></SignUp>} />


        <Route
          path="dashboard"
          element={<Dashboard></Dashboard>} />

        <Route
          path="/"
          element={<Home />} />


        <Route
          path="about"
          element={<About />} />


        <Route
          path="contact"
          element={<Contact />} />

        <Route
          path="scanner"
          element={user ? <Scanner /> : <Navigate to="/login" />} />


        <Route
          path="blog"
          element={<Blog></Blog>} />



        <Route
          path="knowledge-center"
          element={<KnowledgeCenter></KnowledgeCenter>} />


        <Route
          path="faq"
          element={<Faq></Faq>} />


        <Route
          path="deepfakes-timeline"
          element={<TimeLine></TimeLine>} />


        <Route
          path="privacy-policy"
          element={<PrivacyPolicy></PrivacyPolicy>} />


        <Route
          path="terms-of-service"
          element={<TermsOfService></TermsOfService>} />



        <Route
          path="payments"
          element={user ? <StripePayment /> : <Navigate to="/login" />} />


      </Routes>

      {
        !excludedRoutes.includes(pathname) && <Footer />
      }

    </>
  );
}



export default App
