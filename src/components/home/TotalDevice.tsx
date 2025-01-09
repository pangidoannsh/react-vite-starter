import { FC } from 'react';
import TotalDeviceChart from './TotalDeviceChart';

interface Props {
    label: string
}
const TotalDevice: FC<Props> = ({ label }) => {
    return (
        <div>
            {/* <h3 className='card-title'>Total Device</h3>
            <div className='text-gray-400 text-xs'>Yang terkoneksi ke router</div> */}
            <div className="flex items-center mt-6 gap-6">
                <div className='flex-shrink-0'>
                    <div className="rounded-xl bg-gradient-to-b from-[#060B28]/75 to-[#060B28]/70 py-2 px-3">
                        <div className="flex gap-2 items-center">
                            <div className="circle bg-success" />
                            <span className='text-gray-400'>Device On</span>
                        </div>
                        <div className='ms-8 text-white font-bold text-lg'>110</div>
                    </div>
                    <div className="mt-4 rounded-xl bg-gradient-to-b from-[#060B28]/75 to-[#060B28]/70 py-2 px-3">
                        <div className="flex gap-2 items-center">
                            <div className="circle bg-danger" />
                            <span className='text-gray-400'>Device On</span>
                        </div>
                        <div className='ms-8 text-white font-bold text-lg'>110</div>
                    </div>
                </div>
                <div className="flex-1">
                    <TotalDeviceChart label={label} percent={75} total={125} size={160} />
                </div>
            </div>
        </div>
    );
};

export default TotalDevice;