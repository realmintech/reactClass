import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Users from "./components/Users";
import DashboardContent from "./components/DashboardContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardContent />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
