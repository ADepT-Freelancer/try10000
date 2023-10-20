import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeUserAge,
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectUsers,
} from "./usersSlice";

export function Users() {
  const { users } = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("12");
  const usersMap = users.map((user) => {
    return (
      <div className="user__container">
        <span>{user.name}</span> <span>{user.age}</span> age{" "}
        <span>{user.budget}</span>$
      </div>
    );
  });
  // console.log("userMap", usersMap);
  const incrementValue = incrementAmount || 0;
  // console.log("users", users);
  return (
    <div>
      222222222222222222222
      <div>
        {usersMap}
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(changeUserAge(incrementValue))}>
          Change age
        </button>
      </div>
    </div>
  );
}
