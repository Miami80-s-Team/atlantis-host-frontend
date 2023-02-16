import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from '@mui/material';

import './App.css';
import { MainPage, LoginPage, RegisterPage } from './modules';
import AppBarComponent from './modules/AppBar';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
]);
const App = () => {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <AppBarComponent />
            <Container>
                <RouterProvider router={router} />
            </Container>
        </QueryClientProvider>
    );
};

export default App;
