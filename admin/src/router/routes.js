// 路由懒加载
import { lazy } from 'react';
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const PublishNews = lazy(() => import("@/pages/Publish/news"));
const PublishJobs = lazy(() => import("@/pages/Publish/jobs"));
const NewsTable = lazy(() => import("@/pages/Table/newsTable"));
const JobsTable = lazy(() => import("@/pages/Table/jobsTable"));
const AccountTable = lazy(() => import("@/pages/Table/accountTable"));
const LineChart = lazy(() => import("@/pages/Chart/lineChart"));
const PieChart = lazy(() => import("@/pages/Chart/pieChart"));
const HistogramChart = lazy(() => import("@/pages/Chart/histogramChart"));
const Notification = lazy(() => import("@/pages/Notification"));
const Error_404 = lazy(() => import("@/pages/ErrorPages/error_404"));
const Error_500 = lazy(() => import("@/pages/ErrorPages/error_500"));
const Personal = lazy(() => import("@/pages/Account/personal"));
const AddAccount = lazy(() => import("@/pages/Account/addAccount"));
const About = lazy(() => import("@/pages/About"));
const Login = lazy(() => import("@/pages/Login"));

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/publish/publishNews', component: PublishNews },
    { path: '/publish/publishJobs', component: PublishJobs },
    { path: '/table/news', component: NewsTable },
    { path: '/table/jobs', component: JobsTable },
    { path: '/table/account', component: AccountTable },
    { path: '/chart/line', component: LineChart },
    { path: '/chart/pie', component: PieChart },
    { path: '/chart/histogram', component: HistogramChart },
    { path: '/notification', component: Notification },
    { path: '/errorPage/404', component: Error_404 },
    { path: '/errorPage/500', component: Error_500 },
    { path: '/about', component: About },
    { path: '/account/peronal', component: Personal },
    { path: '/account/add', component: AddAccount },
    { path: '/login', component: Login },
];

export default routes;
