"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _counterSlice = _interopRequireDefault(require("../features/counter/counterSlice"));

var _usersSlice = _interopRequireDefault(require("./../../src/features/users/usersSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    counter: _counterSlice["default"],
    users: _usersSlice["default"]
  }
});
exports.store = store;