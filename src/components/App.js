import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" Component={Home} />

            {/* <Route path="/*" element={<PublicRoute />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="/*" element={<PrivateRoute />}>
              <Route path="quiz" element={<Quiz />} />
              <Route path="result" element={<Result />} />
            </Route> */}

            <Route path="/*" element={<PublicOutlet />}>
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="quiz" element={<Quiz />} />
              <Route path="result" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;