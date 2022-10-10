import {createBrowserRouter} from 'react-router-dom';
import Topics from '../components/Topics/Topics';
import Statistics from '../components/Statistics/Statistics';
import Blog from '../components/Blogs/Blog';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Main from '../layouts/Main';

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Topics />
            },
            {
                path:'/statistics',
                element:<Statistics />
            },
            {
                path:'/blogs',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path:'*',
        element: <PageNotFound />
    }
]
);

export default Router;