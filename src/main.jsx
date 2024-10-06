import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import BrowseRouter from "./utils/Router.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Provider store={store}>  {/*for subcribing or consuming the data from redux store  */}
      <RouterProvider router={BrowseRouter}> {/* For React router dom*/}
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
