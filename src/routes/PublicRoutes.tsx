import { Routes, Route, Navigate } from 'react-router-dom';
import { DEFAULT_REDIRECTS, ROUTES_CONFIG } from './config/routeConfig';
import { ProtectedRoute, PublicRoute } from './guards/RouteGuards';

const MyRoutes = () => {
    return (
        <Routes>
            {/* Dynamic routes from configuration */}
            {ROUTES_CONFIG.map((route: any) => {
                const { path, element: Element, type } = route;
                const elementToRender = <Element />;

                // Render route based on type
                if (type === 'protected') {
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={<ProtectedRoute>{elementToRender}</ProtectedRoute>}
                        />
                    );
                }

                if (type === 'public') {
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={<PublicRoute>{elementToRender}</PublicRoute>}
                        />
                    );
                }

                // Default route without guards
                return <Route key={path} path={path} element={elementToRender} />;
            })}

            {/* Default redirects */}
            {DEFAULT_REDIRECTS.map(({ path, redirectTo }) => (
                <Route
                    key={path}
                    path={path}
                    element={<Navigate to={redirectTo} replace />}
                />
            ))}
        </Routes>
    );
};

export default MyRoutes;
