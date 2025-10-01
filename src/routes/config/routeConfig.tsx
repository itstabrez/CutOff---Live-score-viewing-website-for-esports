
import {
    HomePage
} from "../components/LazyLoadingComponent"
// Routes configuration - Easy to modify and extend
export const ROUTES_CONFIG = [
    {
        path: '/home',
        element: HomePage,
        type: 'public',
        title: 'Home',
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
