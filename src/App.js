import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './style.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Profile from './pages/Profile';
import Scanned from './Scanned';

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          {/* <Route path="profile" element={<Profile />} /> */}
          currentUser? <Route path="profile" element={<Profile />} />: "Please
          first login or register yourself";
          <Route path="register" element={<Register />} />
          <Route path="/profile/:id" element={<Scanned />} />: "This is not a
          standard page!"
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
