import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppPage from './Subpages/AppPage';
import PageNotFound from './Subpages/PageNotFound';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutMeSubpage from './Subpages/AboutMeSubpage';
import WorkExperienceSubpage from './Subpages/WorkExperience/WorkExperienceSubpage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-white dark:bg-slate-800 dark:text-white'>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
          <Route path=":slug" element={<AppPage />} />
          <Route path="/aboutme" element={<AboutMeSubpage />} />
          <Route path="/workexperience" element={<WorkExperienceSubpage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  </BrowserRouter>
    </div>
  </React.StrictMode>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
