import { Icon } from '@iconify/react/dist/iconify.js';
import { FC } from 'react';
import WanTrafficChart from './WanTrafficChart';
import InterfaceTraffic from './InterfaceTraffic';

interface Props {
    label: string
}
const BuildingItem: FC<Props> = ({ label }) => {
    const percent = 50
    const average = 40
    return (
        <div className='card rounded-xl py-5 px-4'>
            <div className="flex justify-between items-center">
                <h3 className="card-title flex items-center gap-2">
                    <Icon icon="material-symbols:my-location-outline-rounded" className='text-lg' />
                    {label}
                </h3>
                <button className='bg-white/10 hover:bg-white/20 duration-200 rounded-md p-1.5'>
                    <Icon icon="ic:round-close" className='text-xl text-white' />
                </button>
            </div>
            <div className="flex gap-3 items-center mt-4">
                <div className="flex-1 flex flex-col w-full flex-shrink-0 items-center">
                    <div className="flex items-center gap-4 w-full">
                        <WanTrafficChart label='Upload' average={average} percent={percent} color='#0075FF' />
                        <WanTrafficChart label='Download' average={average} percent={percent} color='#19CA3F' />
                    </div>
                    <div className='-mt-14 bg-[#060B28]/70 rounded-2xl p-4 flex flex-col gap-2 items-center text-white w-full'>
                        <div className='flex gap-2 items-center '>
                            <Icon icon="mdi:user" className='text-lg' />
                            <span className='font-semibold text-sm'>User Online Total</span>
                        </div>
                        <div className="font-bold text-2xl text-glow">56</div>
                        <div className="flex w-full items-center">
                            <div className="flex-1 w-full flex flex-col items-center">
                                <div className="flex items-center gap-3">
                                    <div className="circle bg-success" />
                                    <span className='text-sm'>User Active</span>
                                </div>
                                <div className="font-bold text-glow">52</div>
                            </div>
                            <div className="flex-1 w-full flex flex-col items-center">
                                <div className="flex items-center gap-3">
                                    <div className="circle bg-danger" />
                                    <span className='text-sm'>User Inactive</span>
                                </div>
                                <div className="font-bold text-glow">52</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <InterfaceTraffic />
                    {/* <div className="flex-1 h-full">
                        <InterfaceTraffic />
                    </div>
                    <div className="flex-1 h-full">
                        <InterfaceTraffic />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BuildingItem;