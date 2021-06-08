// 路由懒加载
import { lazy } from 'react';
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const PublishNews = lazy(() => import("@/pages/Article/news"));
const PublishJobs = lazy(() => import("@/pages/Article/jobs"));
const Notification = lazy(() => import("@/pages/Notification"));
const Error_404 = lazy(() => import("@/pages/ErrorPages/error_404"));
const Error_500 = lazy(() => import("@/pages/ErrorPages/error_500"));
const About = lazy(() => import("@/pages/About"));
const Login = lazy(() => import("@/pages/Login"));

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/article/publishnews', component: PublishNews },
    { path: '/article/publishjobs', component: PublishJobs },
    { path: '/notification', component: Notification },
    { path: '/errorPage/404', component: Error_404 },
    { path: '/errorPage/500', component: Error_500 },
    { path: '/about', component: About },
    { path: '/login', component: Login },
];

export default routes;
