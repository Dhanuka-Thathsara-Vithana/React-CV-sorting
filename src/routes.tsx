import { createBrowserRouter } from "react-router-dom";
import NavBar from './layout/navbar/NavBar'
import SideBar from './layout/sidebar/SideBar'
import Layout from "./layout/Layout";
import DashLayout from "./layout/DashLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Jobs from "./pages/jobs/Job";
import JobDec from "./pages/jobs/JobDec/JobDec";
import Education from "./pages/education/Education";
import Work from "./pages/workExperinece/Work";
import Home from "./pages/Home/Home";
import RegLayout from "./layout/RegLayout";
import Reg1 from "./pages/register/Reg1";
import Reg2 from "./pages/register/Reg2";

const router = createBrowserRouter([
    { path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        { path: 'user',
          element: <DashLayout/>,
          children: [
            { path: '',  element: <Dashboard/> },
            { path: 'jobs',  element: <Jobs/> },
            { path: 'jobs/:id', element: <JobDec/> },
            { path: 'education', element: <Education/> },
            { path: 'workExperience', element: <Work/>}
          ]
        }
      ]
    },
    {
      path: 'reg',
      element: <RegLayout/>,
      children: [
        { path: 'reg1', element: <Reg1/>},
        { path: 'reg2', element: <Reg2/>}
      ]
    }
])

export default router;