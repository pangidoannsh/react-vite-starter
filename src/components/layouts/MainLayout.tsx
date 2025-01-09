import { createContext, FC, ReactNode, useContext, useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import { SIDEBAR_OPEN } from '../../const';

interface Props {
    pageTitle?: string
    contentTitle?: string
    children?: ReactNode
    scroll?: boolean
}
type LayoutContextType = {
    openSidebar: boolean
    setOpenSidebar: (open: boolean) => void
}
const LayoutContext = createContext<LayoutContextType | null>(null)

const MainLayout: FC<Props> = ({ pageTitle, children, scroll = true, contentTitle }) => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(() => {
        const _isOpen = localStorage.getItem(SIDEBAR_OPEN) ?? "1"
        return _isOpen === "1"
    })

    function _handleClickMenu() {
        setOpenSidebar(!openSidebar)
        localStorage.setItem(SIDEBAR_OPEN, !openSidebar ? "1" : "0")
    }
    return (
        <LayoutContext.Provider value={{ openSidebar, setOpenSidebar }}>
            <div className='h-screen ps-3 pt-3 flex'>
                <Sidebar />
                <div className='ps-4 h-full flex-1 flex flex-col overflow-hidden'>
                    <Header onClickMenu={_handleClickMenu} pageTitle={pageTitle} contentTitle={contentTitle} />
                    <div className={`flex-1 pe-6 ${scroll ? "overflow-auto v-scroll" : ''}`}>
                        {children}
                    </div>
                </div>
            </div>
            <div className='fixed inset-0 bg-cover overflow-hidden -z-10' style={{ backgroundImage: 'url("/assets/main_bg.jpg")' }} />
        </LayoutContext.Provider>

    );
};

export const useLayout = () => {
    const layout = useContext(LayoutContext)
    if (!layout) {
        throw new Error('useLayout must be used within a LayoutProvider')
    }
    return layout
}
export default MainLayout;