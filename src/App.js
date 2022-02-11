import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Logout from "./containers/Auth/Logout/Logout";
import Auth from "./containers/Auth/Auth";
import User from "./containers/Users/User";
import React, { createContext } from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./containers/Home/home";
import Program from "./containers/Program/Program";
import AddUser from "./containers/AddUser/AddUser";
import AddProgram from "./containers/AddProgram/AddProgram";
import Signout from "./containers/Signout/Signout";
import  Provider  from "./context/Provider";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/program" element={<Program />} />
          <Route path="/users" element={<User />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/add-program" element={<AddProgram />} />
          <Route path="/sign-out" element={<Signout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
