import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Users } from "./features/users/users";

function App() {
  // const camelize = (text) => {
  //   const arrWords = text.split("-");
  //   const arrBigLitters = arrWords.map((item, index) =>
  //     index
  //       ? (item = item
  //           .split("")
  //           .map((current, index) => {
  //             if (index === 0) {
  //               current = current.toUpperCase();
  //             }
  //             return current;
  //           })
  //           .join(""))
  //       : item
  //   );

  //   return arrBigLitters.join("");
  // };
  // console.log("1", camelize("background-color-redux"));
  // console.log("1", camelize("background-color"));
  // console.log("1", camelize("list-style-image"));
  // console.log("1", camelize("-webkit-transition"));

  // const camelize2 = (text) => {
  //   const arrWords = text.split("-");
  //   const arrBigLitters = arrWords.map((item, index) =>
  //     index
  //       ? (item = [
  //           item[0].toUpperCase(),
  //           item.split("").splice(1, item.length).join(""),
  //         ].join(""))
  //       : item
  //   );
  //   return arrBigLitters.join("");
  // };
  // console.log("2", camelize2("background-color-redux"));
  // console.log("2", camelize2("background-color"));
  // console.log("2", camelize2("list-style-image"));
  // console.log("2", camelize2("-webkit-transition"));

  // const filterRange = (arr, a, b) => {
  //   let result = arr.filter((item) => a <= item && item <= b);

  //   return result;
  // };

  // let arr = [5, 3, 8, 1, 2];

  // let filtered = filterRange(arr, 1, 3);

  // const filterRangeInPlace = (arr, a, b) => {
  //   arr.filter((item) => a <= item && item <= b);
  // };
  // console.log(filtered);
  // console.log(filterRangeInPlace(arr));

  // let arr2 = [5, 2, 1, -10, 8];
  // arr2.sort((a, b) => b - a);
  // console.log(arr2);

  // let arr3 = ["HTML", "JavaScript", "CSS"];
  // const copySorted = (arr) => {
  //   let result = arr.slice().sort((a, b) => a.localeCompare(b));
  //   return result;
  // };

  // let sorted = copySorted(arr3);

  // console.log("sorted", sorted); // CSS, HTML, JavaScript
  // console.log("arr3", arr3);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Users />
        <Counter />
      </header>
    </div>
  );
}

export default App;
