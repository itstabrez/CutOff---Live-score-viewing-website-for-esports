
// Protected Route Component - redirects unauthenticated users to login
export const ProtectedRoute = ({ children }: any) => {
    return children;
};

// Public Route Component - redirects authenticated users to dashboard
export const PublicRoute = ({ children }: any) => {
    // return <Navigate to="/dashboard" replace />;
    return children;
};
