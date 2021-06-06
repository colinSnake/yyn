import Dashboard from "@/pages/Dashboard";
import PublishNews from "@/pages/Article/news";
import PublishJobs from "@/pages/Article/jobs";
import Error_404 from '@/pages/ErrorPages/error404'; 
import Error_500 from '@/pages/ErrorPages/error500'; 
import About from '@/pages/About'; 
import Login from "@/pages/Login";

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/article/publishnews', component: PublishNews },
    { path: '/article/publishjobs', component: PublishJobs },
    { path: '/errorPage/404', component: Error_404 },
    { path: '/errorPage/500', component: Error_500 },
    { path: '/about', component: About },
    { path: '/login', component: Login },
];

export default routes;
