import { Navigate, Outlet, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const dataUser = JSON.parse(localStorage.getItem("datosUser"));
  const currentPath = window.location.pathname;

  if (dataUser === null) {
    return <Navigate to={"/home"} replace></Navigate>;
  }

  if (currentPath.split("/")[1] === "usuarios-form") {
    routesUserOne.push(
      "/" + currentPath.split("/")[1] + "/" + dataUser?.id_usuario
    );
  }

  if (
    currentPath.split("/")[1] === "compras" &&
    currentPath.split("/")[2] === "usuario"
  ) {
    routesUserOne.push(
      "/" +
        currentPath.split("/")[1] +
        "/" +
        currentPath.split("/")[2] +
        "/" +
        dataUser?.id_usuario
    );
  }

  if (dataUser?.tipo_usuario === 1) {
    if (routesUserOne.indexOf(currentPath) < 0) {
      return <Navigate to={"/home"} replace></Navigate>;
    }
  } else if (dataUser?.tipo_usuario === 2) {
    if (currentPath === "/roles-dashboard") {
      return <Navigate to={"/home"} replace></Navigate>;
    }
  }

  return <Outlet></Outlet>;
};

export default ProtectedRoutes;
