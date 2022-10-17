import Header from "../src/Components/Header/Header";
import Hero from "../src/Components/Hero/Hero";
import PortfolioMain from "../src/Components/PortfolioMain/PortfolioMain";
import WhoWeDo from "../src/Components/Who_We_Do/WhoWeDo";
import NeedToCrate from "../src/Components/Need_To_Create/NeedToCrate";
import Technology from "../src/Components/Technology/Technology";
import ContactUs from "../src/Components/contactUs/Contact_Us";
import Footer from "../src/Components/Footer/Footer";

export default function Home() {
  return (
    <div lang={"ru"} className="container">
        <Header/>
        <Hero/>
        <PortfolioMain/>
        <WhoWeDo/>
        <NeedToCrate/>
        <Technology/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
