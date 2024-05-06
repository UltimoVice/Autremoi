import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
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

function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="news" element={<NewsCatalogue />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="story" element={<PageStory/>}/>
          <Route path="terms" element={<TermP/>}/>
          <Route path="privacy" element={<PrivacyP/>}/>

        </Route>t
        <Route path="/user" element={<UserLayout />}>
          <Route path="" element={<UserDashboard />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dash" element={<HomeDashboard />} />
          <Route path="" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
