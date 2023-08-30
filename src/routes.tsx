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
            { path: 'user/',  element: <Dashboard/> },
            { path: 'user/jobs',  element: <Jobs/> },
            { path: 'user/jobs/:id', element: <JobDec/> },
            { path: 'user/education', element: <Education/> },
            { path: 'user/workExperience', element: <Work/>}
          ]
        }
      ]
}
])

export default router;