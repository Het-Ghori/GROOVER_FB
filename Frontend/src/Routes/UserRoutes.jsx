import React from 'react';
import Header from '../user/components/Header/Header';
import Footer from '../user/components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from '../user/containers/Home';
import Shop from '../user/containers/Shop';
import Wishlist from '../user/containers/Wishlist';
import Cart from '../user/containers/Cart';
import Checkout from '../user/containers/Checkout';
import Authentication from '../user/containers/Authentication';
import About from '../user/containers/About';
import Contact from '../user/containers/Contact';
import Faq from '../user/containers/Faq';
import StoreDirectory from '../user/containers/StoreDirectory';
import TermCondition from '../user/containers/TermCondition';
import SingleProduct from '../user/containers/SingleProduct';
import Blog from '../user/containers/Blog';
import TrackOrder from '../user/containers/TrackOrder';

function UserRoutes(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/shop' element={<Shop />} />
                <Route exact path="/wishlist" element={<Wishlist />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route exact path="/authentication" element={<Authentication />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/faq" element={<Faq />} />
                <Route exact path="/store-directory" element={<StoreDirectory />} />
                <Route exact path="/terms-conditions" element={<TermCondition />} />
                <Route exact path="/single-product" element={<SingleProduct />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route exact path="/track-order" element={<TrackOrder />} />
            </Routes>
            <Footer />  
        </>
    );
}

export default UserRoutes;