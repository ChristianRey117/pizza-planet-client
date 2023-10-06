import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Sucursales from "../pages/Sucursales";
import AdminMenu from "../pages/AdminMenu";
import SucursalDashboard from "../pages/Sucursal/SucursalDashboard";
import InventarioDashboard from "../pages/Inventario/InventarioDashboard";
import InventarioForm from "../pages/Inventario/InventarioForm";
import SucursalForm from "../pages/Sucursal/SucursalForm";
import OfertasDashboard from "../pages/Ofertas/OfertasDashboard";
import OfertasForm from "../pages/Ofertas/OfertasForm";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/sucursales" element={<Sucursales />} />
      <Route path="/admin-menu" element={<AdminMenu />} />
      <Route path="/sucursales-dashboard" element={<SucursalDashboard />} />
      <Route path="/inventario-dashboard" element={<InventarioDashboard />} />
      <Route path="/inventario-form" element={<InventarioForm />} />
      <Route path="/sucursal-form" element={<SucursalForm />} />
      <Route path="/ofertas-dashboard" element={<OfertasDashboard />} />
      <Route path="/ofertas-form" element={<OfertasForm />} />
    </Routes>
  );
};

export default Routers;
