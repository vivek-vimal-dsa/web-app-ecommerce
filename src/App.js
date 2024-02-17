import { Routes, Route } from "react-router-dom";
import { SignUpInMaster } from "./pageComponents/sign-up-in";
import CartmasterPage from "./pages/cartMasterPage";
import HomeMasterPage from "./pages/homeMasterPage";
import NoPageFoundMasterPage from "./pages/noPageFound";
import ProductMasterPage from "./pages/productPage";
import DashboardPage from "./pages/dashboardPage";
import { Toaster } from "react-hot-toast";
import AccountPageMaster from "./pages/accountPage";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init({ duration: 2000 });
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<SignUpInMaster />} />
        <Route path="/home" element={<HomeMasterPage />} exact />
        <Route path="/cart" element={<CartmasterPage />} exact />
        <Route path="/product" element={<ProductMasterPage />} exact />
        <Route path="/dashboard" element={<DashboardPage />} exact />
        <Route path="/account" element={<AccountPageMaster />} exact />
        <Route path="/*" element={<NoPageFoundMasterPage />} />
      </Routes>
    </>
  );
}

export default App;
