import { useContext } from "react";
import CreateContext from "./CreateContext";
const Buttons = () => {
  const reducerValue = useContext(CreateContext);
  return (
    <div>
      <button
        className="prime_btn"
        onClick={() => {
          reducerValue.dispatch({ type: "increase" });
        }}
      >
        Increase
      </button>
      <button
        className="prime_btn"
        onClick={() => {
          reducerValue.dispatch({ type: "decrease" });
        }}
      >
        Decrease
      </button>
    </div>
  );
};
export default Buttons;
