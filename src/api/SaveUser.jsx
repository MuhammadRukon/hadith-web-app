import axios from "axios";
import { route } from "../routes/Routes";

async function SaveUser(user) {
  const response = await axios.post(`${route}/users`, user, {
    withCredentials: true,
  });
  return response;
}

export default SaveUser;
