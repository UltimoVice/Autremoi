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
import PaymentForm from "./components/shared/PaymentForm";
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from "./config/stripeConfig";


function App() {
  const user = useSelector(selectUser);

  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={user ? <Logout /> : <LoginPage />} />
          <Route path="cart" element={<CartPayment />} />
          <Route path="payment" element={
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          } />
          <Route path="wishlist" element={<WishListPage />} />
          <Route path="news" element={<NewsCatalogue />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="story" element={<PageStory />} />
          <Route path="terms" element={<TermP />} />
          <Route path="privacy" element={<PrivacyP />} />
        </Route>
        <Route path="/prods" element={<AdminLayout />}>
          <Route path="" element={<Products />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<HomeDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
