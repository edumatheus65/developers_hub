import { useContext } from "react";
import { RoutesMain } from "./routes";
import "./styles/index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./providers/UserContext";

export const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <div className="App">
      {loading ? <p>Carregando...</p> : <RoutesMain />}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
