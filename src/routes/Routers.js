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
import ComprasDashboard from "../pages/Compras/ComprasDashboard";
import SucursalForm from "../pages/Sucursal/SucursalForm";
import OfertasDashboard from "../pages/Ofertas/OfertasDashboard";
import OfertasForm from "../pages/Ofertas/OfertasForm";
import ProductDashboard from "../pages/Products/ProductDashboard";
import ProductForm from "../pages/Products/ProductForm";
import ProveedoresDashboard from "../pages/Proveedores/ProveedoresDashboard";
import ProveedorForm from "../pages/Proveedores/ProveedoresForm";
import CategoriasDashboard from "../pages/Categorias/CategoriasDashboard";
import CategoriasForm from "../pages/Categorias/CategoriasForm";
import VecindariosDashboard from "../pages/Vecindarios/VecindariosDashboard";
import VecindariosForm from "../pages/Vecindarios/VecindariosForm";
import UsuariosForm from "../pages/Usuarios/UsuariosForm";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import ComprasUsuario from "../pages/ComprasUsuario";
import RolesDashboard from "../pages/Roles/RolesDashboard";
import EstadisticasDashboard from "../pages/Estadisticas/EstadisticasDashboard";

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
     
    <Route element={<ProtectedRoutes></ProtectedRoutes>}>
      <Route path="/admin-menu" element={<AdminMenu />} />
      <Route path="/sucursales-dashboard" element={<SucursalDashboard />} />
      <Route path="/inventario-dashboard" element={<InventarioDashboard />} />
      <Route path="/compras-dashboard" element={<ComprasDashboard />} />
      <Route path="/roles-dashboard" element={<RolesDashboard />} />
      <Route path="/inventario-form" element={<InventarioForm />} />
      <Route path="/inventario-form/:id" element={<InventarioForm />} />
      <Route path="/sucursal-form" element={<SucursalForm />} />
      <Route path="/sucursal-form/:id" element={<SucursalForm />} />
      <Route path="/ofertas-dashboard" element={<OfertasDashboard />} />
      <Route path="/ofertas-form" element={<OfertasForm />} />
      <Route path="/ofertas-form/:id" element={<OfertasForm />} />
      <Route path="/product-dashboard" element={<ProductDashboard />} />
      <Route path="/product-form" element={<ProductForm />} />
      <Route path="/product-form/:id" element={<ProductForm />} />
      <Route path="/proveedores-dashboard" element={<ProveedoresDashboard />} />
      <Route path="/proveedores-form" element={<ProveedorForm />} />
      <Route path="/proveedores-form/:id" element={<ProveedorForm />} />
      <Route path="/categorias-dashboard" element={<CategoriasDashboard />} />
      <Route path="/estadisticas-dashboard" element={<EstadisticasDashboard />} />
      <Route path="/categorias-form" element={<CategoriasForm />} />
      <Route path="/categorias-form/:id" element={<CategoriasForm />} />
      <Route path="/vecindarios-dashboard" element={<VecindariosDashboard />} />
      <Route path="/vecindarios-form" element={<VecindariosForm />} />
      <Route path="/vecindarios-form/:id" element={<VecindariosForm />} />
      <Route path="/usuarios-form/:id" element={<UsuariosForm/>} />
      <Route path="/compras/usuario/:id" element={<ComprasUsuario/>} />

    </Route>

     
      
      



    </Routes>
  );
};

export default Routers;
