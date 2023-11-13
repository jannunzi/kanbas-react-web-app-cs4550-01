import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as client from "./napster-service";
import { Navigate, Route, Routes } from "react-router-dom";
import NapsterSearch from "./napster-search";
import NapsterAlbum from "./napster-album";
import UserList from "./users/list";
import UserDetails from "./users/details";

function Project() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/project/napster-search" />} />
      <Route path="/napster-search" element={<NapsterSearch />} />
      <Route path="/napster-album/:id" element={<NapsterAlbum />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default Project;
