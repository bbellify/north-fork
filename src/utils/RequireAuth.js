import { Navigate } from 'react-router-dom'

export default function RequireAuth({ children, redirectTo }) {
    let isAuthenticated = localStorage.getItem('token');
    return isAuthenticated ? children : <Navigate to={redirectTo} />
  }
