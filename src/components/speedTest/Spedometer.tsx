import { Progress } from 'antd';
import { FC } from 'react';

const Needle = () => (
    <svg width="105" height="25" viewBox="0 0 105 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.233154 17.575L0.233154 7.97502L104.233 0.775023V24.775L0.233154 17.575Z" fill="url(#paint0_linear_499_3562)" />
        <defs>
            <linearGradient id="paint0_linear_499_3562" x1="0.233154" y1="12.775" x2="94.3268" y2="14.3406" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
)

interface Props {
    type?: "upload" | "download"
    speed: number
}
const Spedometer: FC<Props> = ({ type = "download", speed }) => {
    const color = type === "download" ? { "0%": "#0DBEFD", "30%": "#4BEAF5", "60%": "#6FFFBA", "100%": "#79FF7B" } : { "0%": "#6F00FF", "30%": "#9D4BF5", "60%": "#E357FF", "100%": "#FF49F0" }
    const spin = 315 * ((speed > 100 ? 100 : speed) / 100) - 65
    return (
        <div className='relative w-max'>
            <Progress type="dashboard" percent={speed} gapDegree={45} strokeWidth={10} size={284} trailColor="#121F5E" showInfo={false}
                strokeColor={color} />
            <div className={`absolute top-0 left-0 w-full h-full`} >
                <div className="relative w-full h-full duration-300" style={{ rotate: `${spin}deg` }}>
                    <div className="absolute top-1/2 right-1/2 translate-x-4 -translate-y-1/2 ">
                        <Needle />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 flex flex-col items-center w-max text-white">
                <div className='font-medium text-2xl'>{speed}</div>
                <div className='text-sm '>Mbps</div>
            </div>
        </div>
    );
};

export default Spedometer;
//  style={{ rotate: `${spin}deg` }}