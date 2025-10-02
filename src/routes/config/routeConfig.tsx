
import {
    HomePage,
    PointsTable
} from "../components/LazyLoadingComponent"
// Routes configuration - Easy to modify and extend
export const ROUTES_CONFIG = [
    {
        path: '/home',
        element: HomePage,
        type: 'public',
        title: 'Home',
    },
    {
        path: '/points-table',
        element: PointsTable,
        type: 'public',
        title: 'Points Table',
    },
];

// Default redirects configuration
export const DEFAULT_REDIRECTS = [
    {
        path: '/',
        redirectTo: '/home',
    },
    {
        path: '*',
        redirectTo: '/home',
    },
];
