import { RoutesMain } from "./routes";
import "./styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <div className="App">
      <RoutesMain />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
