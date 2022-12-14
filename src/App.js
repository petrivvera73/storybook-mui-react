import { Login } from "./components/Login";
import "./App.css";

export const App = () => {
  return (
    <div>
      <Login title={"Sign in"} question={"Forgot password?"} />
    </div>
  );
};
