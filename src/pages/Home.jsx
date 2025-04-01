import Womenslider from "../Components/Womenslider";
import Browsercat from "../Components/Browsercat";
import Newarrival from "../Components/Newarrival";
import ShopNowBgPic from "../Components/ShopNowBgPic";
import Bestsalle from "../Components/Bestsalle";
import CustomerReviews from "../Components/CustomerReviews";
import WhyChooseKukuJewels from "../Components/WhyChooseKukuJewels";
import InstagramSection from "../Components/InstagramSection";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
// import Festive from "../Components/Festive";

const Home = () => {
    return (
       <>
       <Navbar/>
       <Womenslider/>
       <Browsercat/>
       <Newarrival/>
      <ShopNowBgPic/>
        <Bestsalle/>
        <CustomerReviews/>
        <WhyChooseKukuJewels/>
        <InstagramSection/>
        <Subscribe/>
        <Footer/>

       </>
    );
};

export default Home;
