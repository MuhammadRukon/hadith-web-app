import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useGetRole from "../hooks/useGetRole";

const AdminRoute = ({ children }) => {
  const { loading } = useContext(AuthContext);

  const role = useGetRole();
  console.log(role, "role");
  if (loading || role == "") return <p>Loading...</p>;
  if (role === "admin") return children;
  return <Navigate to="/" />;
};

export default AdminRoute;
