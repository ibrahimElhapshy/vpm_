import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../i18next";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Team from './pages/team/Team';
import Contacts from './pages/contacts/Contacts';
import Invoices from './pages/invoices/Invoices';
import Form from './pages/form/Form';
import Calendar from './pages/calendar/Calendar';
import BarChart from './pages/barChart/BarChart';
import FAQ from './pages/faq/FAQ';
import PieChart from './pages/pieChart/PieChart';
import LineChart from './pages/lineChart/LineChart';
import Geography from './pages/geography/Geography';
import NotFound from './pages/notFound/NotFound';
import  Login  from './pages/login/Login';









const router = createBrowserRouter(
  createRoutesFromElements(



    <Route path="/" element={localStorage.getItem('token') == null ? <Login /> : <App /> }>



      <Route index element={ <Dashboard /> } />
      <Route path={"team"} element={ <Team /> } />
      <Route path={"contacts"} element={ <Contacts /> } />
      <Route path={"invoices"} element={ <Invoices /> } />
      <Route path={"form"} element={ <Form /> } />
      <Route path={"calendar"} element={ <Calendar /> } />
      <Route path={"bar"} element={ <BarChart /> } />
      <Route path={"faq"} element={ <FAQ /> } />
      <Route path={"pie"} element={ <PieChart /> } />
      <Route path={"line"} element={ <LineChart /> } />
      <Route path={"geography"} element={ <Geography /> } />
    
    
    <Route path= {"*"}  element={ <NotFound /> } />


    
    </Route>
  )
);







ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
