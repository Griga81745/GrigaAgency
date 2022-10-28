import React from 'react';
import Footer from "../src/Components/Footer/Footer";
import Header from "../src/Components/Header/Header";
import {store} from "../src/store/store";
import {Provider} from "react-redux";
import Portfolio_ from "../src/Components/Portfolio/Portfolio_";
import OrderMenu from "../src/Components/OrderMenu/OrderMenu";
import ContactUs from "../src/Components/contactUs/Contact_Us";

function Portfolio() {
    return (
        <div>
            <Provider store={store}>
                <Header/>
                <OrderMenu/>
                <Portfolio_/>
                <ContactUs/>
                <Footer/>
            </Provider>
        </div>
    );
}

export default Portfolio;