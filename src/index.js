import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import Dashboard from './components/Admin/Content/DashBoard';
import ManageUser from './components/Admin/Content/ManageUser';
import DataTable from './components/Bai1/DataTable';
import ImageGrid from './components/Bai2/ImageGrid';
import ImageGrid1 from './components/Bai2/test';
import Labyrinth from './components/Bai3_Bai4/Labyrinth';
import Mario from './components/Bai3_Bai4/Mario';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
          <Route path="users" element={<User />} />
        </Route>

        <Route path="/admins" element={<Admin />} >
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<ManageUser />} />
        </Route>
        <Route path="/bai1" element={<DataTable />} >
        </Route>
        <Route path="/bai2" element={<ImageGrid />} >
        </Route>
        <Route path="/bai21" element={<ImageGrid1 />} >
        </Route>
        <Route path="/bai3-4" element={<Labyrinth />} >
        </Route>
        <Route path="/mario" element={<Mario />} >
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
