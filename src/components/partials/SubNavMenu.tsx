import { FC } from 'react';
import { NavMenuType } from '../../interfaces';
import { Link } from 'react-router-dom';

interface Props {
    menu: NavMenuType
    isActived: boolean
}
const SubNavMenu: FC<Props> = ({ menu, isActived }) => {
    return (
        <Link to={menu.path!} className={`truncate text-sm ps-8 py-2 border-l border-l-primary-500
            ${isActived ? "bg-primary-500/10 font-semibold text-white" : "bg-[#1A1F37]/50 font-medium text-white/50 hover:bg-primary-500/10 hover:text-white"} `}>
            {menu.name}
        </Link>
    );
};

export default SubNavMenu;