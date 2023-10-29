import { Navigate, Outlet } from "react-router-dom";

const routesWithOutUser = [
  "/",
  "/home",
  "/foods",
  "/foods/:id",
  "/checkout",
  "/login",
  "/register",
  "/contact",
  "/cart",
  "/sucursales",
];

const routesUserOne = [
  "/",
  "/home",
  "/foods",
  "/foods/:id",
  "/checkout",
  "/login",
  "/register",
  "/contact",
  "/cart",
  "/sucursales",
];

const routesUserTwo = [
  "/",
  "/home",
  "/foods",
  "/foods/:id",
  "/checkout",
  "/login",
  "/register",
  "/contact",
  "/cart",
  "/sucursales",
];

const ProtectedRoutes = () => {
  const dataUser = JSON.parse(localStorage.getItem("datosUser"));
  const currentPath = window.location.pathname;

  console.log(dataUser);

  if (dataUser === null) {
    return <Navigate to={"/home"} replace></Navigate>;
  }

  if (currentPath.split("/")[1] === "usuarios-form") {
    routesUserOne.push(
      "/" + currentPath.split("/")[1] + "/" + dataUser?.id_usuario
    );
  }

  if (dataUser?.tipo_usuario === 1) {
    if (routesUserOne.indexOf(currentPath) < 0) {
      return <Navigate to={"/home"} replace></Navigate>;
    }
  }

  return <Outlet></Outlet>;
};

export default ProtectedRoutes;
