import { createBrowserRouter } from "react-router-dom";
import NavBar from './layout/navbar/NavBar'
import SideBar from './layout/sidebar/SideBar'
import Layout from "./layout/Layout";
import DashLayout from "./layout/DashLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Jobs from "./pages/jobs/jobs";

const router = createBrowserRouter([
    { path: '/',
      element: <Layout/>,
      children: [
        { path: '/',
          element: <DashLayout/>,
          children: [
            { path: 'dashboard',  element: <Dashboard/> },
            { path: 'jobs',  element: <Jobs/> }
          ]
        }
      ]
}
])

export default router;