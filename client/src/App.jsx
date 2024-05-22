import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import CartPayment from "./pages/CartPayment";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import HomeDashboard from "./pages/admin/HomeDashboard";
import UserDashboard from "./pages/users/UserDashboard";
import NewsCatalogue from "./components/shared/NewsCatalogue";
import Product from "./components/shared/Product";
import PageStory from "./components/PageStory";
import Products from "./pages/admin/Products";
import TermP from "./components/shared/footerElements/TermP";
import PrivacyP from "./components/shared/footerElements/PrivacyP";
import { useSelector } from "react-redux";
import { selectUser } from "./components/features/userSlice";
import Logout from "./components/shared/Logout";
import WishListPage from "./pages/WishListPage";

import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
import UsersList from './features/users/UsersList'

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          {/* <Route path="login" element={user ? <Logout/> : <LoginPage />} /> */}
          <Route path="login" element={<Login />} />
          {/* protected Routes */}
          <Route path="cart" element={<CartPayment />} />

          <Route path="wishlist" element={<WishListPage />} />
          <Route path="news" element={<NewsCatalogue />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="story" element={<PageStory/>}/>
          <Route path="terms" element={<TermP/>}/>
          <Route path="privacy" element={<PrivacyP/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route element={<RequireAuth />}>
            <Route path="" element={<HomeDashboard />} />
            <Route path="prods" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
