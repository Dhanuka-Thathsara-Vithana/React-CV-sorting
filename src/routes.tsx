import { createBrowserRouter } from "react-router-dom";
import NavBar from './layout/navbar/NavBar'
import SideBar from './layout/sidebar/SideBar'

const router = createBrowserRouter([
    { path: '/dashboard',
      element: <NavBar/>,
      children: [
        { path: '/',
          element: <SideBar/>
        }
      ]
}
])

export default router;