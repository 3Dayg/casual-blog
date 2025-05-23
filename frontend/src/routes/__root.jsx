import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '../components/Navbar';
import "../global.css";

export const Route = createRootRoute({
    component: () => (
        <>
            <Navbar />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})