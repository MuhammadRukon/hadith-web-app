import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { route } from "../routes/Routes";
import { AuthContext } from "../provider/AuthProvider";

const useGetRole = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setEmail(user?.email);
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`${route}/users/${email}`);
      if (response) {
        setRole(response.data.role);
      }
    };
    email ? fetchData() : setRole("");
  }, [email]);
  return role;
};

export default useGetRole;
