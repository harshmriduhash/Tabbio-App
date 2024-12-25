import axios from "axios";
import { DATA_CENTER_TOKEN, useApp } from "./context/AppContext";
import { Fragment, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RouteLayout from "./layout/RouteLayout";
import GeneralPages from "./Pages/General/Index";
import CandidatePages from "./Pages/Candidate/Index";
import { Loader } from "./components/Loader";

import AuthPages from "./Pages/Authentication/Index";

axios.defaults.baseURL = "";

function App() {
  const { signOut, loadData } = useApp();
  const [loading, setLoading] = useState(false);
  const preloader = document.getElementById("preloader");

  axios.interceptors.request.use(
    (axiosConfig) => {
      const token = localStorage.getItem(DATA_CENTER_TOKEN);
      axiosConfig.headers.Authorization = `Bearer ${token}`;
      return axiosConfig;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response) {
        if (error?.response?.status === 401) {
          signOut();
        }
      }

      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
        setLoading(false);
      }, 100);
    }

    //
  }, [preloader]);

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <></>
            <>
              <Route path="/" element={<GeneralPages.ProfessionalLanding />} />
              <Route
                path="/company"
                element={<GeneralPages.CompanyLanding />}
              />
               <Route
                path="/about-us"
                element={<GeneralPages.AboutUs />}
              />
               <Route
                path="/affiliate"
                element={<GeneralPages.Affiliate />}
              />
               <Route
                path="/careers"
                element={<GeneralPages.Careers />}
              />
              <Route path="/signin" element={<AuthPages.Signin />} />
              <Route path="/signup" element={<AuthPages.Signup />} />
              <Route
                path="/email-verify"
                element={<AuthPages.EmailVerification />}
              />
              <Route
                path="/forgot-password"
                element={<AuthPages.ResetPassword />}
              />
              <Route
                path="/reset-password/:email/:token"
                element={<AuthPages.ResetPasswordForm />}
              />
              <Route
                path="/live-resume"
                element={<GeneralPages.LiveResume />}
              />
               <Route
                path="/:name"
                element={<GeneralPages.SmartResume />}
              />
            </>

            {/* Candidate Pages */}
            <>
              <Route path="/app" element={<RouteLayout />}>
                <Route
                  path="/app/candidate/smart-resume"
                  element={<CandidatePages.Dashboard />}
                />
                <Route
                  path="/app/candidate/smart-resume/edit"
                  element={<CandidatePages.EditSmartResume />}
                />
                <Route
                  path="/app/candidate/applications"
                  element={<CandidatePages.Applications />}
                />
                <Route
                  path="/app/candidate/resume-builder"
                  element={<CandidatePages.CreateLiveResume />}
                />
              </Route>
            </>
            {/* Candidate Pages */}
          </Routes>
        </Router>
      )}
    </Fragment>
  );
}

export default App;
