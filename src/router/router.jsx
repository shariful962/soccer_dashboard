import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Error from "../pages/Error";
import SignIn from "../pages/auth/Signin";
import ForgotPassword from "../pages/auth/ForgotPassword";
import OTP from "../pages/auth/OTP";
import UpdatePassword from "../pages/auth/UpdatePassword";
import Dashboard from "../pages/dashboard/Dashboard";
import ClubManagement from '../pages/club management/ClubManagement'
import Report from '../pages/report/Report'
import Settings from '../pages/settings/Settings'
import DashboardLayout from '../layout/DashboardLayout'
import Billing from "../pages/bill/Billing";
import ChangePassword from "../pages/settings/ChangePassword";
import Faq from "../pages/settings/Faq";
import TermsCondition from "../pages/settings/TermsCondition";
import Profile from "../pages/settings/Profile";
import PrivacyPolicy from "../pages/settings/PrivacyPolicy";





const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
    errorElement: <Error/>,
    children: [
      { index: true, element: <SignIn /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
      { path: "otp", element: <OTP /> },
      { path: "resetpassword", element: <UpdatePassword/>}
    ],
  },
  {
    element: <DashboardLayout/>,
    children: [
      {path: "dashboard", element: <Dashboard /> },
      {path: "user", element: <ClubManagement /> },
      {path: 'billing', element: <Billing />},
      {path: "report", element: <Report/> },
      {path: "settings", element: <Settings />},
      {path: "settings/profile", element: <Profile /> },
      {path: "settings/changepass", element: <ChangePassword /> },
      {path: "settings/Policy", element: <PrivacyPolicy /> },
      {path: "settings/terms", element: <TermsCondition /> },
      {path: "settings/faq", element: <Faq /> },
    ]
  }
 
]);

export default router;
