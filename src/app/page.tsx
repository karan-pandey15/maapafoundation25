  
import AboutUs from "./about/page";
import Footer from "./components/footer/Footer";  
import HomePageCarousel from "./components/home/Home";
export default function Home() {
  return (
    <>
      <div className="pt-[35px] md:pt-[105px]"> 
        <HomePageCarousel />
        <AboutUs /> 
      </div>
    </>
  );
}
