import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import "../global.css";
import ModalProvider from '../providers/ModalProvider/ModalProvider';
import Navbar from '../features/navigation/components/Navbar/Navbar';

export const Route = createRootRoute({
    component: () => (
        <ModalProvider>
            <Navbar />
            <Outlet />
            <TanStackRouterDevtools />
        </ModalProvider>
    ),
})