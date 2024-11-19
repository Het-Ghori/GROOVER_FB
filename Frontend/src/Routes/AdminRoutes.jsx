import React from 'react';
import Layout from '../admin/component/Layout';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../admin/container/Dashboard';
import AddCategory from '../admin/container/Add_Category/AddCategory';
import AddSubcategory from '../admin/container/Add_Subcategory/AddSubcategory';
import AddProduct from '../admin/container/Add_Product/AddProduct';

function AdminRoutes(props) {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/add-category' element={<AddCategory />} />
                <Route path='/add-subcategory' element={<AddSubcategory />} />
                <Route path='/add-product' element={<AddProduct />} />
            </Routes>
        </Layout>
    );
}

export default AdminRoutes;