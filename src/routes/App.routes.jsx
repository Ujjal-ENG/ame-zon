import App from '../App';
import Home from '../components/Home';
import Home from '../components/Shop';

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
                path: '/shop',
                element: <Shop />
            }
        ]
    }
]);
