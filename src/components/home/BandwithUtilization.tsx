import { FC, useEffect, useState } from 'react';
import BarChart from '../ui/BarChart';
import { ChartDataSet } from '../../interfaces';
import { barChartColorGradient } from '../../utils';

const BandwithUtilization: FC = () => {
    const [routers, setRouters] = useState<string[]>([])
    const [data, setData] = useState<ChartDataSet<"bar">[]>([])

    useEffect(() => {
        setData([
            {
                label: "Bandwidth Used (Mbps)",
                data: [40, 70, 60, 90, 60],
                backgroundColor: barChartColorGradient("rgba(44,217,255,1)", "rgba(26,130,153,1)"),
                legendColor: "#2CD9FF"
            },
            {
                label: "Users",
                data: [100, 120, 110, 95, 80],
                backgroundColor: barChartColorGradient("rgba(146,46,234,1)", "rgba(82,26,132,1)"),
                legendColor: "#922EEA"
            },
        ])
        setRouters(["Router 1", "Router 2", "Router 3", "Router 4", "Router 5"])
    }, [])

    return (
        <div>
            <h3 className='card-title'>Bandwith Utilization</h3>
            <BarChart labels={routers} datasets={data} color='white' yAxisTitle='Value' />
        </div>
    );
};

export default BandwithUtilization;