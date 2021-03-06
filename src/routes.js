import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";
import Test from "./Teste/test";
//Rota para o core dos Passa Portes
import Location from "./views/pages/Location";
import PassaPorteCore from "./views/pages/Modules/passaporte";

var routes = [{
        path: "/test",
        name: "Test",
        rltName: "القيادة",
        icon: "tim-icons icon-chart-pie-36",
        component: Test,
        layout: "/admin"
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        rtlName: "لوحة القيادة",
        icon: "tim-icons icon-chart-pie-36",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/icons",
        name: "Icons",
        rtlName: "الرموز",
        icon: "tim-icons icon-atom",
        component: Icons,
        layout: "/admin"
    },
    {
        path: "/map",
        name: "Map",
        rtlName: "خرائط",
        icon: "tim-icons icon-pin",
        component: Map,
        layout: "/admin"
    },
    {
        path: "/listagem-passaporte",
        name: "Passa Porte",
        icon: "tim-icons icon-bell-55",
        component: PassaPorteCore,
        layout: "/admin"
    },
    {
        path: "/registrar-passaporte",
        name: "Passa Porte",
        icon: "tim-icons icon-bell-55",
        component: PassaPorteCore,
        layout: "/admin"
    },
    {
        path: "/notifications",
        name: "Notifications",
        rtlName: "إخطارات",
        icon: "tim-icons icon-bell-55",
        component: Notifications,
        layout: "/admin"
    },
    {
        path: "/location",
        name: "Localização",
        rltName: "Localização",
        icon: "tim-icons icon-square-pin",
        component: Location,
        layout: "/admin"
    },
    {
        path: "/user-profile",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        icon: "tim-icons icon-single-02",
        component: UserProfile,
        layout: "/admin"
    },
    {
        path: "/tables",
        name: "Table List",
        rtlName: "قائمة الجدول",
        icon: "tim-icons icon-puzzle-10",
        component: TableList,
        layout: "/admin"
    },
    {
        path: "/typography",
        name: "Typography",
        rtlName: "طباعة",
        icon: "tim-icons icon-align-center",
        component: Typography,
        layout: "/admin"
    }
];
export default routes;