import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent/>
      <Outlet/>
    </>
  );
}

export default App;
