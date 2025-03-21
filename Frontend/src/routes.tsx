import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./layout/Layout";
import DashLayout from "./layout/DashLayout";
import UserDashboard from "../src/pages/userDashboard/UserDashboard"
import Jobs from "./pages/jobs/Job";
import JobDec from "./pages/jobs/JobDec/JobDec";
import Education from "./pages/education/Education";
import Work from "./pages/workExperinece/Work";
import Home from "./pages/Home/Home";
import RegLayout from "./layout/RegLayout";
import Reg1 from "./pages/register/Reg1";
import Reg2 from "./pages/register/Reg2";
import Reg3 from "./pages/register/Reg3";
import Reg4 from "./pages/register/Reg4";
import Reg5 from "./pages/register/Reg5";
import LoginLayout from "./layout/LoginLayout";
import JobApplyForm from "./pages/jobs/ApplyJob/ApplyJobForm";
import ComDashboard from "./pages/companyDashboard/ComDashboard";
import ComDashLayout from "./layout/ComDashLayout";
import AddJob from "./pages/jobs/addNewJob/AddJob";
import AddJob2 from "./pages/jobs/addNewJob/AddJob2";
import ComJob from "./pages/jobs/publishedJobs/ComJob";
import Candidates from "./pages/jobs/candidates/Candidates";
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './util/ProtectedRoute';
import Unauthorized from './pages/Unauthorized'; // Create this component

// Create an AuthWrapper component
const AuthWrapper = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

const router = createBrowserRouter([
  {
    element: <AuthWrapper />,
    children: [
      { 
        path: '/',
        element: <Layout/>,
        children: [
          {
            path: '/',
            element: <Home/>
          },
          { 
            path: 'user',
            element: (
              <ProtectedRoute requiredRole="user">
                <DashLayout/>
              </ProtectedRoute>
            ),
            children: [
              { path: '',  element: <UserDashboard/> },
              { path: 'jobs',  element: <Jobs/> },
              { path: 'jobDec', element: <JobDec/> },
              { path: 'education', element: <Education/> },
              { path: 'workExperience', element: <Work/>},
              { path: 'jobApply', element: <JobApplyForm/>}
            ]
          },
          { 
            path: 'com',
            element: (
              <ProtectedRoute requiredRole="com">
                <ComDashLayout/>
              </ProtectedRoute>
            ),
            children: [
              { path: '', element: <ComDashboard/> },
              { path: 'newjob', element: <AddJob/> },
              { path: 'newjob2', element: <AddJob2/> },
              { path: 'publishedJobs', element: <ComJob/> },
              { path: 'jobDec', element: <JobDec/> },
              { path: 'candidates', element: <Candidates/> }
            ]
          }
        ]
      },
      {
        path: 'reg',
        element: <RegLayout/>,
        children: [
          { path: '', element: <Reg1/>},
          { path: 'reg2', element: <Reg2/>},
          { path: 'reg3', element: <Reg3/>},
          { path: 'reg4', element: <Reg4/>},
          { path: 'reg5', element: <Reg5/>}
        ]
      },
      {
        path: 'login',
        element: <LoginLayout/>,
      },
      {
        path: 'unauthorized',
        element: <Unauthorized />, // Create this component
      }
    ]
  }
]);

export default router;