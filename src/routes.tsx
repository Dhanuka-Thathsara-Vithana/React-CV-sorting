import { createBrowserRouter } from "react-router-dom";
import NavBar from './layout/navbar/NavBar'
import SideBar from './layout/sidebar/SideBar'
import Layout from "./layout/Layout";
import DashLayout from "./layout/DashLayout";

const router = createBrowserRouter([
    { path: '/',
      element: <Layout/>,
      children: [
        { path: '/',
          element: <DashLayout/>
        }
      ]
}
])

export default router;