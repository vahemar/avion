import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "./Home";
import Login from "./Login";


const config = [
    {
        element: <Home />,
        path: "/",
        Layout: AuthLayout
    },
    {
        element: <Login />,
        path: "/login",
        Layout: DefaultLayout
    }
];

export default config