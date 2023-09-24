import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
    }
]);

export default myRouter;