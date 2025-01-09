import { FC, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Select } from 'antd';
import { DefaultOptionType } from 'antd/es/select';

const areaOptions: DefaultOptionType[] = [
    { label: "Area 1", value: "1" },
    { label: "Area 2", value: "2" },
]
const Topology: FC = () => {
    const [selectedArea, setSelectedArea] = useState<string | null>(null)

    return (
        <div>
            <Select value={selectedArea} onChange={setSelectedArea} className='w-full' placeholder="Select Area" options={areaOptions}
                prefix={<Icon icon="material-symbols:my-location-outline-rounded" className='text-lg text-gray-400' />}
                suffixIcon={<Icon icon="lucide:chevron-down" className='text-lg text-gray-400' />}
            />
        </div>
    );
};

export default Topology;