import AdminLayout from "../layouts/AdminLayout";
import DefaultAdmin from "../layouts/DefaultAdmin";
import Plantpots from "./Plantpots";
import Ceramics from "./Ceramics";
import Dashboard from "./Dashboard";
import Login from "./Login";

const adminConfig = [
    {
        element: <Dashboard />,
        path: "/admin",
        Layout: DefaultAdmin
    },
    {
        element: <Login />,
        path: "/admin/login",
        Layout: DefaultAdmin
    },
    {
        element: <Plantpots />,
        path: "/admin/plantpots",
        Layout: AdminLayout
    },
    {
        element: <Ceramics />,
        path: "/admin/ceramics",
        Layout: DefaultAdmin
    }
];

export default adminConfig