import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/home/Home';
import PRAdmin from './PRAdmin';
import Dashboard from '../pages/admin/Dashboard';
import Categories from '../pages/admin/categories/Categories';
import SubCategories from '../pages/admin/subCategories/SubCategories';
import Entry from '../pages/entry/Entry';
import Search from '../pages/search/Search';
import Products from '../pages/admin/products/Products';
import ShopByCategory from '../pages/shop/ShopByCategory';
import Cart from '../pages/cart/Cart';

const AppRoutes = () => {
  return (
    <div className="screen">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route exact path="/entry" element={<PrivateRoute component={Entry} />} />
        <Route exact path="/home" element={<PrivateRoute component={Home} />} />
        <Route exact path="/search" element={<PrivateRoute component={Search} />} />
        <Route exact path="/cart" element={<PrivateRoute component={Cart} />} />
        <Route exact path="/home/shop-bct" element={<PrivateRoute component={ShopByCategory} />} />

        <Route exact path="/dashboard" element={<PRAdmin component={Dashboard} />} />
        <Route exact path="/categories" element={<PRAdmin component={Categories} />} />
        <Route exact path="/sub-categories/:id" element={<PRAdmin component={SubCategories} />} />
        <Route exact path="/products" element={<PRAdmin component={Products} />} />
        
        <Route path="*" element={<Fragment />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
