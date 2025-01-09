import { Progress } from 'antd';
import { FC } from 'react';

interface Props {
    label: string
    percent: number
    total: number
    size?: number
}
const TotalDeviceChart: FC<Props> = ({ label, percent, total, size }) => {
    return (
        <div className="relative w-max">
            <div className="relative rotate-180 flex justify-center">
                <Progress type='circle' strokeColor="#05CD99" percent={percent} showInfo={false} strokeWidth={8} size={size} />
                <div className="absolute top-0 left-0 w-full h-full rotate-[42.5deg]">
                    <Progress type='circle' strokeColor="#FF4B4B" percent={100} showInfo={false} strokeWidth={8} gapDegree={360 * (percent / 100) + 25} gapPosition='right' size={size} />
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col gap-1 w-max">
                <span className='font-bold text-white text-2xl'>{total}</span>
                <span className='font-medium text-gray-400 text-xs'>Device {label}</span>
            </div>
        </div>
    );
};

export default TotalDeviceChart;