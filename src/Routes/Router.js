import {createBrowserRouter} from 'react-router-dom';
import Topics from '../components/Topics/Topics';
import Statistics from '../components/Statistics/Statistics';
import Blog from '../components/Blogs/Blog';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import Main from '../layouts/Main';
import QuizContainer from '../components/QuizContainer/QuizContainer';

const Router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Topics />,
                loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')
            },
            {
                path:':id',
                element: <QuizContainer></QuizContainer>,
                loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
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