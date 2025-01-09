import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartDataSet } from '../../interfaces';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
interface AxisBoolean {
    y: boolean
    x: boolean
}
interface Props {
    labels: string[],
    datasets: ChartDataSet<"line">[]
    color?: string
    legendLabelColor?: string
    yAxisTitle?: string
    displayGrid?: AxisBoolean | boolean
    displayTicks?: AxisBoolean | boolean
    legendType?: "box" | "dot"
}
const LineChart: FC<Props> = ({ labels, datasets, color, yAxisTitle, legendLabelColor, displayGrid = true, legendType = "box", displayTicks = true }) => {
    return (
        <div className='relative'>
            {
                legendType === "box" ?
                    <div className="absolute top-0 right-4 bg-white/50 border border-gray-100 rounded-sm p-1">
                        {datasets.map((data, i) => (
                            <div key={i} className='flex gap-1.5 items-center'>
                                <div className='w-4 h-2' style={{ backgroundColor: data.legendColor }} />
                                <div style={{ color: legendLabelColor ?? color }} className='font-medium text-xs'>{data.label}</div>
                            </div>
                        ))}
                    </div> :
                    <div className='flex items-center gap-4 mb-3'>
                        {datasets.map((data, i) => (
                            <div key={i} className='flex gap-2 items-center'>
                                <div className='circle' style={{ backgroundColor: data.legendColor }} />
                                <div style={{ color: legendLabelColor ?? color }} className='font-medium text-xs'>{data.label}</div>
                            </div>
                        ))}
                    </div>
            }

            <Line
                className='!w-full'
                data={{
                    labels,
                    datasets: datasets.map(({ label, data, backgroundColor, borderColor, borderWidth, tension, pointRadius, segment, fill }) => ({
                        label,
                        data,
                        backgroundColor,
                        borderColor,
                        borderWidth,
                        tension: tension ?? 0,
                        pointRadius: pointRadius ?? 0,
                        segment,
                        fill
                    })),
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            labels: {
                                color: "white"
                            },
                            display: false,
                            position: 'bottom',
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
                                display: typeof displayGrid === "boolean" ? displayGrid : displayGrid.y,
                                drawTicks: typeof displayTicks === "boolean" ? displayTicks : displayTicks.y
                            },
                            ticks: {
                                color,
                                display: typeof displayTicks === "boolean" ? displayTicks : displayTicks.y
                            },
                            title: {
                                color,
                                display: true,
                                text: yAxisTitle
                            }
                        },
                        x: {
                            ticks: {
                                color,
                                display: typeof displayTicks === "boolean" ? displayTicks : displayTicks.x
                            }
                        },
                    },
                }}
            />
        </div>
    );
};

export default LineChart;