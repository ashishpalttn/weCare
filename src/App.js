import logo from "./logo.svg";
import "./App.css";
// import { Counter } from './features/counter/Counters';
import SideDrower from "./components/ClippedDrawer";
import ResponsiveAppBar from "./components/PrimarySearchAppBar";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/routesConfig";
import RootPage from "./pages/Rootpage";

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        {/* <SideDrower /> */}
        {/* <ResponsiveAppBar /> */}
        <RootPage/>
      </RouterProvider>
    </div>
  );
}

export default App;
