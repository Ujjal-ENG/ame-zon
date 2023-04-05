import App from '../App';
import Home from '../components/Home';
import Login from '../components/Login';
import Shop from '../components/Shop';
import OrderReview from '../components/OrderReview';

import { createBrowserRouter } from 'react-router-dom';
import { cartProductsLoader } from '../loaders/cartProductsLoaders';
import ErrorPage from '../ErrorPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
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
                element: <OrderReview />,
                loader: cartProductsLoader
            }
        ]
    }
]);
