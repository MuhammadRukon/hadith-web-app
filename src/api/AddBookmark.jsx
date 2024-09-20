import axios from "axios";
import { route } from "../routes/Routes";

async function AddBookmark(data) {
  const response = await axios.post(`${route}/bookmarks`, data, {
    withCredentials: true,
  });
  return response;
}

export default AddBookmark;
