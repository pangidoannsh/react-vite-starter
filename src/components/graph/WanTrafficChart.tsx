import { Icon } from '@iconify/react/dist/iconify.js';
import { Progress } from 'antd';
import { FC } from 'react';

interface Props {
    percent: number
    average: number
    color?: string
    label: string
}
const screenWidth = window.innerWidth

const WanTrafficChart: FC<Props> = ({ percent, average, color, label }) => {
    return (
        <div className="relative w-max">
            <div className="relative flex justify-center">
                <Progress type='dashboard' strokeLinecap='butt' gapDegree={180} strokeColor={color ?? "#FFFFFF"} trailColor='#36434E' percent={percent}
                    showInfo={false} strokeWidth={16} size={screenWidth > 1400 ? 200 : 120} />
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="relative w-full h-full " style={{ rotate: 180 * (average / 100) + "deg" }}>
                        <div className={`absolute top-1/2 left-[1px] bg-white ${screenWidth > 1400 ? "w-8" : "w-[25px]"} h-1`} />
                    </div>
                </div>
                <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col gap-1 text-white">
                    <span className='font-semibold text-2xl '>{percent}%</span>
                    <div className='text-xs flex gap-1 items-center'>
                        <span>{label}</span>
                        <Icon icon="icons8:up-round" className={`text-lg ${label === 'Download' ? 'rotate-180' : ''}`} color={color ?? "#FFFFFF"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WanTrafficChart;