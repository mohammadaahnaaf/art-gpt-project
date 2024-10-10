import React, { createContext, useContext, useState, ReactNode } from 'react';

type MenuContextType = {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(prevState => !prevState);

    return (
        <MenuContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};
