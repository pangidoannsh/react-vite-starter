import { FC, useEffect, useState } from 'react';
import LineChart from '../ui/LineChart';
import { ChartDataSet } from '../../interfaces';
import { Select } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { Icon } from '@iconify/react/dist/iconify.js';

const areaOptions: DefaultOptionType[] = [
    { label: "Area 1", value: "1" },
    { label: "Area 2", value: "2" },
]

interface Props {
    label: string
}

const labels = Array.from({ length: 12 }, (_, index) => `${index * 5}`);
const NetworkTraffic: FC<Props> = ({ label }) => {
    const [data, setData] = useState<ChartDataSet<"line">[]>([])
    const [selectedArea, setSelectedArea] = useState<string | null>(null)

    useEffect(() => {
        setData([
            {
                label: "Max Traffic",
                data: [18, 49, 13, 47, 37, 50, 16, 40, 21, 52, 56, 25],
                borderColor: "rgba(255,0,0,0.5)",
                backgroundColor: "rgba(255,0,0,0.5)",
                legendColor: "#FF0000",
                segment: {
                    borderDash: [5, 5]
                }
            },
            {
                label: "Average Traffic",
                data: [33, 76, 38, 60, 48, 71, 45, 52, 35, 62, 69, 36],
                borderColor: "#42B1FF",
                backgroundColor: "#42B1FF",
                legendColor: "#42B1FF",
                pointRadius: 4
            },
            {
                label: "Min Traffic",
                data: [51, 95, 58, 75, 58, 90, 58, 71, 55, 78, 81, 53],
                borderColor: "rgba(66,255,173,0.5)",
                backgroundColor: "rgba(66,255,173,0.5)",
                legendColor: "#42FFAD",
                segment: {
                    borderDash: [5, 5]
                }
            },
        ])
    }, [])
    return (
        <div>
            <div className="flex items-start mb-6">
                <h3 className='card-title flex-1'>{label} Traffic</h3>
                <Select value={selectedArea} onChange={setSelectedArea} className='flex-1' placeholder="Select Area" options={areaOptions}
                    prefix={<Icon icon="material-symbols:my-location-outline-rounded" className='text-lg text-gray-400' />}
                    suffixIcon={<Icon icon="lucide:chevron-down" className='text-lg text-gray-400' />}
                />
            </div>
            <LineChart labels={labels} datasets={data} color='#56577A' legendLabelColor="white" />
        </div>
    );
};

export default NetworkTraffic;