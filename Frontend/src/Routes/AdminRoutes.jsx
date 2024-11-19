import React from 'react';
import Layout from '../admin/component/Layout';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../admin/container/Dashboard';

function AdminRoutes(props) {
    return (
        <Layout>
            <Routes>
                <Route exact path='/' element={<Dashboard />} />
            </Routes>
        </Layout>
    );
}

export default AdminRoutes;