import { FC } from 'react';
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartDataSet } from '../../interfaces';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    labels: string[],
    datasets: ChartDataSet<"bar">[]
    color?: string
    yAxisTitle?: string
}
const BarChart: FC<Props> = ({ labels, datasets, color, yAxisTitle }) => {
    return (
        <div className='relative'>
            <div className="absolute bg-gray-400 h-[2px] bottom-7 left-7" style={{ width: `calc(100% - 30px)` }} />
            <div className="absolute bg-gray-400 w-[2px] bottom-7 left-7" style={{ height: `calc(100% - 50px)` }} />
            <div className="absolute top-0 right-4 bg-white/50 border border-gray-100 rounded-sm p-1">
                {datasets.map((data, i) => (
                    <div key={i} className='flex gap-1.5 items-center'>
                        <div className='w-4 h-2' style={{ backgroundColor: data.legendColor }} />
                        <div style={{ color }} className='font-medium text-xs'>{data.label}</div>
                    </div>
                ))}
            </div>
            <Bar className='!w-full !h-max'
                data={{
                    labels,
                    datasets: datasets.map(({ label, data, backgroundColor, borderColor, borderWidth }) => ({
                        label,
                        data,
                        backgroundColor,
                        borderColor,
                        borderWidth
                    }))
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            labels: {
                                color
                            },
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            border: {
                                dash: [8, 8],
                            },
                            grid: {
                                color,
                                lineWidth: 1,
                                z: 10
                            },
                            ticks: {
                                color
                            },
                            title: {
                                color,
                                display: true,
                                text: yAxisTitle
                            }
                        },
                        x: {
                            ticks: {
                                color
                            }
                        }
                    },
                }} />
        </div>
    );
};

export default BarChart;