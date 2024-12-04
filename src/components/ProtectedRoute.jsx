import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

export default function ProtectedRoute({
  // isLoggedIn, // because context is being used
  children,
  anonymous = false,
}) {
  const location = useLocation();
  const from = location.state?.from || "/";

  const { isLoggedIn } = useContext(AppContext);
  // If you can visit without authorization, but you are already authorized
  if (anonymous && isLoggedIn) {
    // ...then go back the the path you came from
    return <Navigate to={from} />;
  }

  // If you need to be authorize to visit this path but you aren't logged in yet
  if (!anonymous && !isLoggedIn) {
    // ...then go to login page
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // if ok show the content
  return children;
}