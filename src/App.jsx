import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/Store.jsx";

function App() {
  return (
    <>
    <Provider store={store}>
      <Toaster position="top-right" />
      <RouterProvider router={routes}/>
      </Provider>
    </>
  );
}

export default App;
