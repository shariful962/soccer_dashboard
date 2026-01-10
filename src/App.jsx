import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
