import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import Library from "../pages/Library/Library";
import Movie from "../pages/Movie/Movie";



const Router = () => {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="library" element={<Library />} />
            <Route path="movie" element={<Movie />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default Router;
