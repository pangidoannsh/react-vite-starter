import { FC, Fragment } from 'react';
import { Icon } from '@iconify/react';

interface Props {
    pageTitle?: string
    contentTitle?: string
    onClickMenu?: () => void
}
const Header: FC<Props> = ({ onClickMenu, pageTitle, contentTitle }) => {
    const titleSplit = pageTitle ? pageTitle.split("/") : [""];

    return (
        <header className='flex-shrink-0 h-max flex gap-3 py-2 pe-7 mt-4 items-start'>
            <button onClick={onClickMenu}>
                <Icon icon="ion:menu" className='text-2xl text-gray-500' />
            </button>
            <div className="flex-1 flex justify-between items-center">
                <div className='flex-shrink-0 w-max'>
                    <div className='text-white text-sm font-medium flex items-center gap-2 select-none'>
                        <span className='text-slate-500 font-normal'>Pages</span>
                        {titleSplit.map((title, i) => (
                            <Fragment key={i}>
                                /
                                <span>{title}</span>
                            </Fragment>
                        ))}
                    </div>
                    <div className='text-white font-medium mt-2'>{contentTitle ?? titleSplit[titleSplit.length - 1]}</div>
                </div>
                <div className='flex gap-4 items-center'>
                    <label htmlFor="search" className='flex rounded-lg border items-center bg-[#0F1535] border-gray-700 px-3 py-3 gap-3'>
                        <Icon icon="iconamoon:search-bold" className='text-gray-700 flex-shrink-0 text-lg' />
                        <input className='focus:outline-none text-gray-500 bg-transparent text-sm' placeholder='Type here...' />
                    </label>
                    <button className='flex gap-1 items-center text-gray-500'>
                        <Icon icon="ion:person" className='' />
                        <span className='text-sm'>Sign In</span>
                    </button>
                    <button>
                        <Icon icon="ion:settings-sharp" className='text-gray-500' />
                    </button>
                    <button>
                        <Icon icon="ion:notifcations" className='text-gray-500' />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;