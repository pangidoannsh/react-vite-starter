import { Icon } from '@iconify/react/dist/iconify.js';
import Select, { DefaultOptionType } from 'antd/es/select';
import { FC, useState } from 'react';

const areaOptions: DefaultOptionType[] = [
    { label: "Area 1", value: "1" },
    { label: "Area 2", value: "2" },
]

interface Props {
    onStart?: () => void
}
const ActionCard: FC<Props> = ({ onStart }) => {
    const [selectedArea, setSelectedArea] = useState({
        from: null,
        to: null
    })

    return (
        <div className='card rounded-xl py-6 px-10 flex flex-col items-center gap-5 w-full'>
            <div className="card-title">Speed Test Location</div>
            <div className="flex flex-col gap-4 w-full">
                <Select value={selectedArea.from} onChange={value => setSelectedArea(prev => ({ ...prev, from: value }))} className='w-full' placeholder="From" options={areaOptions}
                    prefix={<Icon icon="material-symbols:my-location-outline-rounded" className='text-lg text-gray-400' />}
                    suffixIcon={<Icon icon="lucide:chevron-down" className='text-lg text-gray-400 ' />}
                />
                <Select value={selectedArea.to} onChange={value => setSelectedArea(prev => ({ ...prev, to: value }))} className='w-full' placeholder="To" options={areaOptions}
                    prefix={<Icon icon="material-symbols:my-location-outline-rounded" className='text-lg text-gray-400' />}
                    suffixIcon={<Icon icon="lucide:chevron-down" className='text-lg text-gray-400' />}
                />
            </div>
            <div className="flex items-center gap-6 justify-center w-full">
                <button onClick={onStart} className=" flex-1 w-full rounded-xl py-2 font-bold text-sm bg-primary-700 hover:bg-primary-800 duration-200 text-white">
                    Start
                </button>
                <button className=" flex-1 w-full rounded-xl py-2 font-bold text-sm bg-gray-400 text-white">
                    Restart
                </button>
            </div>
        </div>
    );
};

export default ActionCard;