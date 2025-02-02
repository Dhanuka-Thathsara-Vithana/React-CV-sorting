import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SideBar from './layout/sidebar/SideBar.tsx'
import { StyledEngineProvider } from '@mui/material/styles';
import NavBar from './layout/userLayout/navbar/NavBar.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'
import Dashboard from './pages/userDashboard/UserDashboard.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router}/>
    </StyledEngineProvider>
  </React.StrictMode>
)

// cat > app.js << EOF;
// const http = require("http");

// const hostname = "0.0.0.0";
// const port = 80;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Welcome to Cloud\n');
// });

// server.listen(port, hostname, () => {
// 	console.log("Server running at http://%s:%s/", hostname, port);
// });

// process.on("SIGINT", function () {
// 	console.log("Caught interrupt signal and will exit");
// 	process.exit();
// });
// EOF

// ....
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Welcome to Cloud\n');
// });
// ....