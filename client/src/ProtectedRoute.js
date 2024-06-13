import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthenticationContext } from './AuthProvider';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;