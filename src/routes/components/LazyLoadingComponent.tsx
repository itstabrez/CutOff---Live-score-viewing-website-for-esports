import { Suspense, lazy } from 'react';
import { Box, CircularProgress } from '@mui/material';

// Simple loading component
const LoadingSpinner = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: `url('/images/bgImg.png') center center / cover no-repeat`,
        }}
    >
        <CircularProgress size={60} sx={{ color: '#ffffff' }} />
    </Box>
);

// Simple lazy loading wrapper
const createLazyComponent = (importFunc: any) => {
    const LazyComponent = lazy(importFunc);

    return (props: any) => (
        <Suspense fallback={<LoadingSpinner />}>
            <LazyComponent {...props} />
        </Suspense>
    );
};

// Lazy load page components
export const HomePage = createLazyComponent(
    () => import('../../pages/homePage/HomePage')
);
