"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.incrementIfOdd = exports.selectUsers = exports.changeUserAge = exports.addUser = exports.multiplication = exports.incrementByAmount = exports.increment = exports.decrement = exports.usersSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

// import { fetchCount } from "./counterAPI";
var initialState = {
  value: 0,
  status: "idle",
  users: [{
    id: 1,
    name: "Leo",
    surname: "Paganonni",
    age: 43,
    budget: 200000
  }, {
    id: 2,
    name: "Carl",
    surname: "Gellatino",
    age: 32,
    budget: 500000
  }, {
    id: 3,
    name: "Artur",
    surname: "Furzetto",
    age: 16,
    budget: 80000
  }]
}; // The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   "users/fetchCount",
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

var usersSlice = (0, _toolkit.createSlice)({
  name: "users",
  initialState: initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: function increment(state) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: function decrement(state) {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: function incrementByAmount(state, action) {
      state.value += action.payload;
    },
    multiplication: function multiplication(state, action) {
      state.value *= action.payload;
    },
    addUser: function addUser(state, action) {
      state.push(action.payload);
    },
    changeUserAge: function changeUserAge(state, action) {
      state.users.map(function (user) {
        if (user.name === action.payload || user.id === action.payload) {
          user.age = 1000;
        }

        return user;
      });
    } // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(incrementAsync.pending, (state) => {
    //       state.status = "loading";
    //     })
    //     .addCase(incrementAsync.fulfilled, (state, action) => {
    //       state.status = "idle";
    //       state.value += action.payload;
    //     });

  }
});
exports.usersSlice = usersSlice;
var _usersSlice$actions = usersSlice.actions,
    decrement = _usersSlice$actions.decrement,
    increment = _usersSlice$actions.increment,
    incrementByAmount = _usersSlice$actions.incrementByAmount,
    multiplication = _usersSlice$actions.multiplication,
    addUser = _usersSlice$actions.addUser,
    changeUserAge = _usersSlice$actions.changeUserAge; // The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

exports.changeUserAge = changeUserAge;
exports.addUser = addUser;
exports.multiplication = multiplication;
exports.incrementByAmount = incrementByAmount;
exports.increment = increment;
exports.decrement = decrement;

var selectUsers = function selectUsers(state) {
  return state.users;
}; // We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


exports.selectUsers = selectUsers;

var incrementIfOdd = function incrementIfOdd(amount) {
  return function (dispatch, getState) {
    var currentValue = selectUsers(getState());

    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };
};

exports.incrementIfOdd = incrementIfOdd;
var _default = usersSlice.reducer;
exports["default"] = _default;