import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Details from "../pages/Details/Details";

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/:donateId',
                element: <Details></Details>,
                loader: () => fetch("/Data/donation.json"),
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