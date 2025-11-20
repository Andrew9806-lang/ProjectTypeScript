// import Lesson14 from "../../Lesson/Lesson14/Lesson14";
// import About from "../../pages/pages/About/About";
// import Clients from "../../pages/pages/Clients/Clients";
// import FaceBook from "../../pages/pages/Clients/Components/Facebook/Facebook";
// import Gmail from "../../pages/pages/Clients/Components/Gmail/Gmail";
// import Mercedes from "../../pages/pages/Clients/Components/Mercedes/Mercedes";
// import Home from "../../pages/pages/Home/Home";
// import User from "../../pages/pages/Users/components/User/User";
// import Users from "../../pages/pages/Users/Users";
// import type { RoutePage } from "./types";

import CreateEmployes from "../../Pages/component/CreateEmployee/CreateEmployee";
import Employee from "../../Pages/component/Employees/Employees";
import type { RoutePage } from "./types";

export const routesData: RoutePage[] = [
  // { path: "/", element: <Home /> },
  // { path: "/about", element: <About /> },
  // { path: "/users", element: <Users /> },
  // { path: "/users/user", element: <User /> },
  // { path: "/clients", element: <Clients /> },
  // { path: "/clients/amazon", element: <Gmail /> },
  // { path: "/clients/facebook", element: <FaceBook /> },
  // { path: "/clients/google", element: <Mercedes /> },
  //   { path: "/lesson14", element: <Lesson14 /> },
    // {path:"/homewoek14",element:<Homework14 />}
      {path:"/createemployee",element:<CreateEmployes />},
        {path:"/employees",element:<Employee />},
    
      { path: "*", element: "Page not found" },
];
