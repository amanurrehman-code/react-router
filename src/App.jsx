import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

import User from "./components/User";
import Users from "./components/Users";

import DashBoard from "./components/DashBoard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

import ProtectedRoutes from "./components/ProtectedRoutes";
import RoleBasedRoute from "./components/RoleBasedRoutes";
import AdminDashboard from "./components/AdminDashboard";
import Unauthorized from "./components/Unauthorized";

import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Normal Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Users */}
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />

        {/* Nested Routes and protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <DashBoard />
            </ProtectedRoutes>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
         
        </Route>

        {/* Role based routes */}
        <Route
          path="/admin"
          element={
            <RoleBasedRoute allowedRole="admin">
              <AdminDashboard />
            </RoleBasedRoute>
          }
        />

        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
