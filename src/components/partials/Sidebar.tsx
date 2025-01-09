import { FC, useEffect, useState } from 'react';
import { NavMenuType } from '../../interfaces';
import NavMenu from './NavMenu';
import { useLayout } from '../layouts/MainLayout';

const menus: NavMenuType[] = [
    {
        name: "Dashboard",
        path: "/",
        icon: "mdi:monitor-dashboard"
    },
    {
        name: "Graph",
        path: "/graph",
        icon: "mage:chart-fill"
    },
    {
        name: "Topology",
        path: "/topology",
        icon: "iconoir:network-solid",
        iconClassName: "rotate-180"
    },
    {
        name: "Analytics",
        path: "/analytics",
        icon: "ion:analytics-sharp"
    },
    {
        name: "Speed Test",
        path: "/speed-test",
        icon: "clarity:dashboard-solid",
        subs: [
            {
                name: "Internet",
                path: "/speed-test/internet"
            },
            {
                name: "VPN",
                path: "/speed-test/vpn"
            },
        ]
    },
    {
        name: "Ticketing",
        path: "/ticketing",
        icon: "solar:ticket-bold"
    },
]
const accountMenus: NavMenuType[] = [
    {
        name: "Profile",
        path: "/profile",
        icon: "material-symbols:person-rounded"
    },
    {
        name: "Sign Out",
        path: "/sign-out",
        icon: "solar:logout-3-bold"
    },
]

const Sidebar: FC = () => {
    const { openSidebar } = useLayout()
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (openSidebar) {
            setTimeout(() => {
                setVisible(openSidebar)
            }, 200);
        } else {
            setVisible(openSidebar)
        }
    }, [openSidebar])

    return (
        <div className="h-full flex-shrink-0 pb-3">
            <nav className={`bg-glass h-full duration-300 ${openSidebar ? "w-[230px]" : "w-[88px]"} rounded-xl px-[10px] py-6 overflow-hidden flex flex-col items-center`}>
                <div className="flex items-center justify-center gap-3 w-max">
                    <img src="/assets/logo_tni_au.png" alt="logo_TNI_AU" className='w-7 flex-shrink-0' />
                    {visible && <img src="/assets/app_name.svg" alt="app_name" />}
                </div>
                <div className="line-h mt-6" />
                <div className="flex flex-col w-full mt-5 gap-1">
                    {menus.map(menu => (
                        <NavMenu key={menu.path} menu={menu} />
                    ))}
                </div>
                {openSidebar ? <div className="flex w-full ps-3">
                    <div className='text-xs font-medium text-white mt-5 mb-3 h-4 overflow-hidden select-none'>ACCOUNT PAGES</div>
                </div> : <div className="line-h mt-8 mb-[15px]" />}
                <div className="flex flex-col w-full gap-1">
                    {accountMenus.map(menu => (
                        <NavMenu key={menu.path} menu={menu} />
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;