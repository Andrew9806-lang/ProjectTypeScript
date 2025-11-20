// import Lesson
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
// import Lesson09 from "./Lesson/Lesson09/Lesson09"
// import Homework09 from "./Homework/Homework09/Homework"
// import Homework10 from "./Homework/Homework10/Homework10"

// import Lesson12 from "./Lesson/Lesson12/Lesson12";
// import Lesson10 from "./Lesson/Lesson10/Lesson10"
import GlobalStyles from "./styles/GlobalStyles";
import { v4 } from "uuid";
import { routesData } from "./routes/routes/routes";
import type { RoutePage } from "./routes/routes/types";

// import Lesson12 from "./Lesson/Lesson12/Lesson12"
// import Lesson10 from "./Lesson/Lesson10/Lesson10"
// import Homework12 from "./Homework/Homework12/Homework"
// import GlobalStyles from "./styles/GlobalStyles"

// import Lesson08 from "./Lesson/Lesson08/Lesson"

// import Homework07 from "./Homework/Homework07/Homework"

// import Lesson06 from "./Lesson/Lesson06/Lesson"

// import domamshnih rabot

function App() {
  const routes = routesData.map(({ path, element }: RoutePage) => {
    return <Route key={v4()} path={path} element={element} />;
  });
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes sobiraet vse marshruti prilozheniya  */}
        <Routes>
          {/* Rout eto komponent kotoriy peredaetsya v marshrut i v kontent  */}
          {routes}
        </Routes>
      </Layout>

      {/* lesson06 -TypeScript */}

      {/* <Lesson06 /> */}
      {/* <Homework07 /> */}
      {/* <Homework09 /> */}
      {/* lesson08 */}
      {/* <Lesson08 /> */}
      {/* <Lesson09 /> */}
      {/* <Lesson10 /> */}
      {/* <Homework10 /> */}
      {/* <Lesson12 /> */}
    </BrowserRouter>
  );
  {
    /* <Lesson06 /> */
  }
  {
    /* <Homework07 /> */
  }
  {
    /* <Homework09 /> */
  }
  {
    /* lesson08 */
  }
  {
    /* <Lesson08 /> */
  }
  {
    /* <Lesson09 /> */
  }
  {
    /* <Lesson10 /> */
  }
  {
    /* <Homework10 /> */
  }
  {
    /* <Lesson12 /> */
  }
  //  <Homework12 />
}

export default App;
