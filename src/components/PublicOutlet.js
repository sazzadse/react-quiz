import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicOutlet() {
  const { currentUser } = useAuth();

  // return !currentUser ? (
  //   <Route {...rest}>{(props) => <Component {...props} />}</Route>
  // ) : (
  //   <Navigate to="/" />
  // );

  return !currentUser ? <Outlet /> : <Navigate to="/" />;
}
