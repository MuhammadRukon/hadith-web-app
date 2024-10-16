import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/Store.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import AppContextProvider from "./provider/AppContext.jsx";

function App() {
  return (
    <AuthProvider>
      <AppContextProvider>
        <Provider store={store}>
          <Toaster position="top-right" />
          <RouterProvider router={routes} />
        </Provider>
      </AppContextProvider>
    </AuthProvider>
  );
}

export default App;
