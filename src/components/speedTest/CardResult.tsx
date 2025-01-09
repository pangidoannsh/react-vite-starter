import { Icon } from '@iconify/react/dist/iconify.js';
import { FC } from 'react';

const CardResult: FC = () => {
    return (
        <div className='card p-4 rounded-xl'>
            <div className="flex justify-between items-end">
                <h3 className='card-title flex gap-2 items-center'>
                    <Icon icon="material-symbols:my-location-outline-rounded" className='text-lg' />
                    Gedung
                </h3>
                <span className='text-xs text-gray-400'>12/20/2024 10:59 PM</span>
            </div>
            <div className="flex justify-between items-center my-6">
                <div className="flex flex-col items-center gap-1">
                    <div className=' flex gap-1 items-end'>
                        <span className='text-white font-bold text-xl'>0</span>
                        <span className='text-gray-600 font-medium text-sm'>
                            Mbps
                        </span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='text-white font-medium text-sm'>Upload Speed</span>
                        <Icon icon="icons8:up-round" className={`text-lg text-primary-500`} />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className=' flex gap-1 items-end'>
                        <span className='text-white font-bold text-xl'>0</span>
                        <span className='text-gray-600 font-medium text-sm'>
                            Mbps
                        </span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='text-white font-medium text-sm'>Download Speed</span>
                        <Icon icon="icons8:up-round" className={`text-lg rotate-180 text-success`} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-2">
                <div className='text-sm font-medium text-white'>
                    Ping <span className='text-gray-600'>ms</span>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="/assets/icons/swap.svg" width={20} />
                    <span className='text-white text-sm font-medium'>-</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Icon icon="icons8:up-round" className='text-2xl text-primary-500' />
                    <span className='text-white text-sm font-medium'>-</span>
                </div>
                <div className='flex items-center gap-2'>
                    <Icon icon="icons8:down-round" className='text-2xl text-success' />
                    <span className='text-white text-sm font-medium'>-</span>
                </div>
            </div>
        </div>
    );
};

export default CardResult;