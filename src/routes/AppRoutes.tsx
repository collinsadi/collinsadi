import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route
          path="*"
          element={
            <div className=" w-full h-dvh flex items-center justify-center">
              <h3 className="text-xl font-bold">Oops, Not Found!</h3>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
