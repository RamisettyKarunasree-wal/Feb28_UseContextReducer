import { useReducer, useState } from "react";
import ManageHobbies from "./ManageHobbies";

const Hobbies = () => {
  const [hobby, setHobby] = useState("");
  const initialHobbies = ["Initial Hobby 1", "Initial Hobby 2"];
  const [state, dispatch] = useReducer(ManageHobbies, initialHobbies);
  return (
    <div className="item">
      <h2>Hobbies App</h2>
      <input
        type="text"
        name="hobby"
        placeholder="Enter Hobby"
        value={hobby}
        onInput={(event) => {
          setHobby(event.target.value);
        }}
      />
      <br />
      <button
        className="prime_btn"
        onClick={() => {
          dispatch({ type: "add", hobbyVal: hobby });
          setHobby("");
        }}
      >
        Add Hobby
      </button>
      <button
        className="del_btn"
        onClick={() => {
          setHobby("");
          dispatch({ type: "removeAll" });
        }}
      >
        Clear All Hobbies
      </button>
      <table>
        {state.map((value, index) => {
          return (
            <tr>
              <td>{value} </td>
              <td>
                <button
                  onClick={() => {
                    dispatch({ type: "removeHobby", ind: index });
                  }}
                >
                  Remove Hobby
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Hobbies;
