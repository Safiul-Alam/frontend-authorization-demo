import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Ducks from "./Ducks";
import Login from "./Login";
import MyProfile from "./MyProfile";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute"; // New import
import "./styles/App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Routes>
      {/* Wrap Ducks in ProtectedRoute and pass isLoggedIn as a prop. */}
      <Route
        path="/ducks"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Ducks />
          </ProtectedRoute>
        }
      />

      {/* Wrap MyProfile in ProtectedRoute and pass isLoggedIn as a prop. */}
      <Route
        path="/my-profile"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <MyProfile />
          </ProtectedRoute>
        }
      />

      {/* other routes */}
    </Routes>
  );
}

export default App;