import Hero from "./components/Hero";
import Course from "./components/Course";
import Review from "./components/Review";
import Statistic from "./components/Statistic";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Course />
      <Statistic/>
      <Review />
    </>
  );
}
