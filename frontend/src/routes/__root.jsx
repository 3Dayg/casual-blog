import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '../components/Navbar';
import "../global.css";
import { ModalProvider } from '../context/ModalContext';

export const Route = createRootRoute({
    component: () => (
        <ModalProvider>
            <Navbar />
            <Outlet />
            <TanStackRouterDevtools />
        </ModalProvider>
    ),
})