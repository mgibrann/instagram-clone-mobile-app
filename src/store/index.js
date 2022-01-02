import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth";

const store = configureStore(authSlice);

export default store;
