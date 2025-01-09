import { FC, useEffect, useState } from 'react';
import { NavMenuType } from '../../interfaces';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useLocation, useNavigate } from 'react-router-dom';
import SubNavMenu from './SubNavMenu';
import { useLayout } from '../layouts/MainLayout';

interface Props {
    menu: NavMenuType
    onClick?: () => void
}
const NavMenu: FC<Props> = ({ menu, onClick }) => {
    const navigate = useNavigate()
    const { openSidebar, setOpenSidebar } = useLayout()
    const location = useLocation()

    const isOnLocation: boolean =
        menu.path === location.pathname ||
        (menu.subs && menu.subs.some(sub => sub.path === location.pathname)) ||
        false;

    const [openMenu, setOpenMenu] = useState(isOnLocation)

    function linkClick(path?: string) {
        if (menu.subs) {
            setOpenMenu(prev => !prev)
            if (!openMenu) {
                setOpenSidebar(true)
            }
        } else {
            if (!path) return
            navigate(path)
        }
    }

    useEffect(() => {
        setOpenMenu(openSidebar && (openMenu || isOnLocation));
    }, [openSidebar])

    return (
        <div className='group w-full'>
            <button onClick={onClick ?? (() => linkClick(menu.path))} className={`w-full py-3 ps-4 pe-2 rounded-xl flex items-center gap-4 cursor-pointer relative  
                ${(openMenu || isOnLocation) && openSidebar ? "bg-white/5" : ""}`}
            >
                <div className={`absolute duration-300 rounded-lg ${(openMenu || isOnLocation) ? " bg-primary-500" : " bg-white/5"} top-3 left-4 w-8 h-8
                    ${!(openMenu || isOnLocation) ? "group-hover:rounded-xl group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:left-0" : ""}`}
                />
                <div className={`relative z-10 p-2 rounded-lg ${(openMenu || isOnLocation) ? "text-white " : " text-primary-500"}`}>
                    <Icon icon={menu.icon ?? ""} className={`text-base ${menu.iconClassName}`} />
                </div>
                {openSidebar && <div className='flex w-full overflow-hidden items-center'>
                    <span className="text-white font-medium text-sm truncate flex-1 text-start">{menu.name}</span>
                    {menu.subs && <Icon icon="eva:arrow-up-fill" className={` duration-200 ${openMenu ? "rotate-180 text-primary-500" : "text-gray-400"}`} />}
                </div>}
            </button>
            {menu.subs &&
                <div className='flex flex-col ps-8 duration-300 mt-1 overflow-hidden' style={{ height: openMenu ? `${menu.subs.length * 36}px` : "0px" }}>
                    {menu.subs.map(sub => (
                        <SubNavMenu key={sub.path} menu={sub} isActived={sub.path === location.pathname} />
                    ))}
                </div>
            }
        </div>
    );
};

export default NavMenu;