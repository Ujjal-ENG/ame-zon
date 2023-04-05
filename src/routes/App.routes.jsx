import App from '../App';
import Home from '../components/Home';
import Login from '../components/Login';
import Shop from '../components/Shop';
import OrderReview from '../components/OrderReview';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/order-review',
                element: <OrderReview />
            }
        ]
    }
]);
