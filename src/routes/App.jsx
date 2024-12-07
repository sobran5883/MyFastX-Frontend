import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import LandingPage1 from "../pages/customer/landing_page/LandingPage";
import LandingPage2 from "../pages/customer/landingPage1/newLandingPage";
import LandingPage from "../pages/customer/landingPage2/LandingPage2";
import Home from "../pages/customer/home/HomePage";
import OrderSummeryCard from "../pages/customer/OrderSummary/Components/OrderSummaryCard/OrderSummaryCard";
import Feedbacks from "../pages/customer/Feedback/Feedback";
import ChatWithDeliveryPartner from '../pages/customer/ChatWithDeliveryPatner/ChatWithdeliveryPatner'
import About from "../pages/customer/about/About";
import Culture from "../pages/customer/culture/culture";
import TrackOrder from '../pages/customer/track_order/TrackOrder'
import Terms from "../pages/customer/terms_of_use/TermsOfUse";
import Privacy from "../pages/customer/privacy_policy/PrivacyPolicy";
import FAQs from '../pages/customer/faqs/FAQs'
// import SignIn from "../pages/customer/Signup/Signup";
import Login from "../pages/customer/Login/Login";
import ForgotPassord from "../pages/customer/ForgotPassword/ForgotPassword";
import CustomerLayout from "../layout/Layout";
import Myprofile from "../pages/customer/profile/Myprofile";
import Profile from "../pages/customer/profile/Asides";
import Order from "../pages/customer/profile/Order";
import OrderDetails from "../pages/customer/profile/OrderDetails";
import Tracking from '../pages/customer/Tracking/Tracking'
import Wallet from "../pages/customer/profile/Wallet";
import Refer from "../pages/customer/profile/Refer";
import ChatWithAgent from "../pages/customer/profile/ChatWithAgent";
import ContactUs from "../pages/customer/profile/Contactus";
import Help from "../pages/customer/profile/Help";
import Help1 from "../pages/customer/help/help";
import Feedback from "../pages/customer/profile/Feedback";
import Pricing from "../pages/customer/profile/Pricing";
import RemoveAccount from "../pages/customer/RemoveAccount/RemoveAccount";
import PricingDetails from "../components/pricing_details/PricingDetails";
import ScrollTop from "../components/scroll_top/ScrollTop";
import Investors from "../pages/customer/invesstors/Investors";
import Whatsapp from "../components/whatsapp/whatsapp";
import ShippingRate from "../pages/customer/home/components/ShippingRate";
import RestrictedItems from '../pages/customer/home/components/RestrictedItems'
import ParcelGuide from '../pages/customer/home/components/ParcelGuide'
import PackagingGuide from '../pages/customer/home/components/PackagingGuide'
import Signup from "../pages/customer/Signup/Signup";
import PackagingInstruction from "../pages/customer/packagingInstruction/PackagingInstruction";
import WhatWeDo from '../pages/customer/whatWeDo/WhatWeDo'
import Career from "../pages/customer/career/Career";

//Admin Panel
import AdminSignUp from "../pages/admin/AdminSignUp";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminForgotPassord from "../pages/admin/ForgotPassword";
import Asides from "../pages/admin/Asides";
import Dashboard from "../pages/admin/Dashboard";
import OrderList from "../pages/admin/OrderList";
import OrderDetail from "../pages/admin/OrderDetail";
import Invoice from "../pages/admin/Invoice";
import Customer from "../pages/admin/Customer";
import CustomerDetails from '../pages/admin/CustomerDetails'
import Vouchers from "../pages/admin/Vouchers";
import AddCoupon from "../pages/admin/AddCoupon";
import DriverList from "../pages/admin/DriverList";
import PendingVerification from '../pages/admin/PendingVerification'
import PendingVerificationDetails from '../pages/admin/PendingVerificationDetails'
import Driverdetails from "../pages/admin/DriverDetails";
import ChatSupport from "../pages/admin/ChatSupport";
import OpenChat from "../pages/admin/ChatSupport2";
import Reviews from "../pages/admin/Reviews";
import Setting from "../pages/admin/Setting";
import AdminProfile from "../pages/admin/Profile";
import ChangePassword from "../pages/admin/ChangePassword";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import AdminPrivateRoute from '../components/adminPrivateRoute/privateRoute'

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Whatsapp/>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="1" element={<LandingPage1 />} />
          <Route path="2" element={<LandingPage2 />} />
          <Route path="shipping_rate" element={<ShippingRate/>} />
          <Route path="prohibited-items" element={<RestrictedItems/>} />
          <Route path="parcel-guide" element={<ParcelGuide/>} />
          <Route path="packaging-guide" element={<PackagingGuide/>} />
          <Route path="packaging-instruction" element={<PackagingInstruction/>} />
          <Route path="ordersummery_card" element={<OrderSummeryCard />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="feedbacks" element={<Feedbacks />} />
          <Route path="chat_with_delivary_partner" element={<ChatWithDeliveryPartner/>} />
          <Route path="about" element={<About />} />
          <Route path="culture" element={<Culture />} />
          <Route path="investors" element={<Investors />} />
          <Route path="careers" element={<Career />} />
          <Route path="term-of-use" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="track-order" element={<TrackOrder />} />
          <Route path="faq" element={<FAQs />} />
          <Route path="help" element={<Help1 />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="pricing-details" element={<PricingDetails/>}/>
          <Route path="forgot_password" element={<ForgotPassord />} />
          <Route path="privacy/account/delete" element={<RemoveAccount />} />
          <Route path="what-we-do?" element={<WhatWeDo />} />
          <Route path="home" element={<Home />} />
          <Route element={<PrivateRoute/>}>
            <Route path="profile" element={<Profile />}>
              <Route path="myprofile" element={<Myprofile />} />
              <Route path="order" element={<Order />} />
              <Route path="order_details" element={<OrderDetails />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="refer" element={<Refer />} />
              <Route path="chat_with_agent" element={<ChatWithAgent />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="help" element={<Help />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="pricing" element={<Pricing />} />
            </Route>
          </Route>
        </Route>

        <Route path="admin/signup" element={<AdminSignUp />} />
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin_forgot_password" element={<AdminForgotPassord />} />

        <Route element={<AdminPrivateRoute/>}>
          <Route path="fastx/admin" element={<Asides />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="order_list" element={<OrderList />} />
            <Route path="order_detail" element={<OrderDetail />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="customer" element={<Customer />} />
            <Route path="customer_details" element={<CustomerDetails />} />
            <Route path="vouchers" element={<Vouchers />} />
            <Route path="add_coupon" element={<AddCoupon />} />
            <Route path="driver_list" element={<DriverList />} />
            <Route path="pending_verfication" element={<PendingVerification/>} />
            <Route path="pending_verification_details" element={<PendingVerificationDetails/>} />
            <Route path="driver_details" element={<Driverdetails />} />
            <Route path="chat_support" element={<ChatSupport />} />
            <Route path="open_chat" element={<OpenChat />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="setting" element={<Setting />}>
              <Route path="profile" element={<AdminProfile />} />
              <Route path="change_password" element={<ChangePassword />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
