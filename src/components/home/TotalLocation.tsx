import { FC } from 'react';
import { Progress } from 'antd';
import { Icon } from '@iconify/react/dist/iconify.js';
const TotalLocation: FC = () => {
    return (
        <div className='w-max'>
            <div className="relative mt-6">
                <div className="flex justify-center w-full">
                    <Progress type='dashboard' percent={75} gapDegree={180} trailColor='#22234B' showInfo={false} strokeWidth={8}
                        strokeColor={{ "0%": "#00C3FF", "100%": "#0044BA" }} size={190} />
                    <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 p-2 rounded-full bg-primary-500">
                        <Icon icon="material-symbols:my-location-outline-rounded" className='text-2xl text-white' />
                    </div>
                </div>
                <div className="absolute w-full left-0 top-1/2 rounded-xl bg-gradient-to-b from-[#060B28]/75 to-[#060B28]/70 pt-3 pb-1.5 px-4 flex  justify-between">
                    <div className="flex-1 text-gray-400 text-xs">0%</div>
                    <div className=" w-max">
                        <div className="text-white font-bold text-2xl text-center">56</div>
                        <div className="text-gray-400 text-xs text-center">Jangkauan Lokasi</div>
                    </div>
                    <div className="flex-1 text-gray-400 text-xs text-end">100%</div>
                </div>
            </div>
            <div className="flex gap-6 -mt-4 w-max">
                <div className="flex-1 rounded-xl bg-gradient-to-b from-[#060B28]/75 to-[#060B28]/70 py-2 px-3 w-max">
                    <div className='text-gray-400 text-xs text-center font-medium w-max'>Router Nyala</div>
                    <div className="flex gap-2 items-center justify-center">
                        <img src='/assets/icons/router_on.svg' />
                        <span className='text-white text-xs font-bold'>20</span>
                    </div>
                </div>
                <div className="flex-1 rounded-xl bg-gradient-to-b from-[#060B28]/75 to-[#060B28]/70 py-2 px-3">
                    <div className='text-gray-400 text-xs text-center font-medium'>Router Mati</div>
                    <div className="flex gap-2 items-center justify-center">
                        <img src='/assets/icons/router_off.svg' />
                        <span className='text-white text-xs font-bold'>8</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalLocation;