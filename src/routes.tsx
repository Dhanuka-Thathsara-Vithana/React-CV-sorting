import { createBrowserRouter } from "react-router-dom";
import NavBar from './layout/navbar/NavBar'
import SideBar from './layout/sidebar/SideBar'
import Layout from "./layout/Layout";

const router = createBrowserRouter([
    { path: '/',
      element: <Layout/>,
      children: [
        { path: '/',
          element: <SideBar/>
        }
      ]
}
])

export default router;