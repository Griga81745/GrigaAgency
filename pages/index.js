import Header from "../src/Components/Header/Header";
import Hero from "../src/Components/Hero/Hero";
import PortfolioMain from "../src/Components/PortfolioMain/PortfolioMain";
import WhoWeDo from "../src/Components/Who_We_Do/WhoWeDo";
import NeedToCrate from "../src/Components/Need_To_Create/NeedToCrate";
import Technology from "../src/Components/Technology/Technology";
import ContactUs from "../src/Components/contactUs/Contact_Us";
import Footer from "../src/Components/Footer/Footer";
import OrderMenu from "../src/Components/OrderMenu/OrderMenu";
import {store} from "../src/store/store"
import {Provider} from "react-redux";

export default function Home() {
  return (
    <div className="container">
        <Provider store={store}>
            <OrderMenu/>
            <Header/>
            <Hero/>
            <PortfolioMain/>
            <WhoWeDo/>
            <NeedToCrate/>
            <Technology/>
            <ContactUs/>
            <Footer/>
        </Provider>
    </div>
  )
}
