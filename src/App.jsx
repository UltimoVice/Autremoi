import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/users/UserDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/user" element={<UserLayout />}>
          <Route path="" element={<AdminDashboard />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<UserDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
