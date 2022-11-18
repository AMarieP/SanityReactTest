// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from "./AllPosts.js";
import OnePost from "./OnePost.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<AllPosts/>} path="/" exact />
        <Route element={<OnePost/>} path="/:slug" />
    </Routes>
    </BrowserRouter>
  );
}
export default App;