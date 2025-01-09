import { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: FC = () => {
    return (
        <Doughnut
            style={{ width: "200px", height: "200px" }}
            data={{
                labels: ["Red"],
                datasets: [{
                    label: '# of Votes',
                    data: [33, 7, 60],
                    backgroundColor: [
                        'rgba(46, 204, 113, 1)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(231, 76, 60, 1)',
                    ],
                    // borderWidth: 4
                }]
            }}
            options={{
                rotation: 270,
                circumference: 180,
            }}
        />
    );
};

export default DoughnutChart;