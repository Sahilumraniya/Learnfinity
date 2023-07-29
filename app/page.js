import Hero from "./components/Hero";
import Course from "./components/Course";
import { ToastContainer } from "react-toastify";
import Review from "./components/Review";
import Statistic from "./components/Statistic";

export default function Home() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Hero />
      <Course />
      <Statistic/>
      <Review />
    </>
  );
}
