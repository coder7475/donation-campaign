import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            }, 
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
        ],
    }
]);

export default myRouter;