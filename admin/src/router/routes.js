// 路由懒加载
import { lazy } from 'react';
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const PublishNews = lazy(() => import("@/pages/Publish/news"));
const PublishJobs = lazy(() => import("@/pages/Publish/jobs"));
const LineChart = lazy(() => import("@/pages/Chart/lineChart"));
const PieChart = lazy(() => import("@/pages/Chart/pieChart"));
const HistogramChart = lazy(() => import("@/pages/Chart/histogramChart"));
const Notification = lazy(() => import("@/pages/Notification"));
const Error_404 = lazy(() => import("@/pages/ErrorPages/error_404"));
const Error_500 = lazy(() => import("@/pages/ErrorPages/error_500"));
const About = lazy(() => import("@/pages/About"));
const Login = lazy(() => import("@/pages/Login"));

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/publish/publishnews', component: PublishNews },
    { path: '/publish/publishjobs', component: PublishJobs },
    { path: '/chart/line', component: LineChart },
    { path: '/chart/pie', component: PieChart },
    { path: '/chart/histogram', component: HistogramChart },
    { path: '/notification', component: Notification },
    { path: '/errorPage/404', component: Error_404 },
    { path: '/errorPage/500', component: Error_500 },
    { path: '/about', component: About },
    { path: '/login', component: Login },
];

export default routes;
