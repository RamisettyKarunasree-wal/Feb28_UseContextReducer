import { useReducer } from "react";
import UseReducer from "./UseReducer";
import CreateContext from "./CreateContext";
import ShowCount from "./ShowCount";
import Buttons from "./Buttons";

const UseContextUseReducer = () => {
  const initialValue = { count: 0 };
  const [state, dispatch] = useReducer(UseReducer, initialValue);
  const reducerValue = { state, dispatch };
  return (
    <div className="item">
      <h2>Counter App</h2>
      <CreateContext.Provider value={reducerValue}>
        <ShowCount />
        <Buttons />
      </CreateContext.Provider>
    </div>
  );
};
export default UseContextUseReducer;
