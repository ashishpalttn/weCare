import { Outlet } from "react-router-dom";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import ClippedDrawer from "../components/ClippedDrawer";

export default function RootPage() {
  return (
    <div>
      {/* <PrimarySearchAppBar /> */}

      <ClippedDrawer />
      {/* <Outlet /> */}
    </div>
  );
}
