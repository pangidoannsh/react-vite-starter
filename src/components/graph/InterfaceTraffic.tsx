import { FC } from 'react';
import LineChart from '../ui/LineChart';

const InterfaceTraffic: FC = () => {
    return (
        <div>
            <div className="font-medium text-sm text-white mb-3">Interface Traffic</div>
            <LineChart
                displayGrid={false}
                color='white'
                displayTicks={{ x: true, y: false }}
                labels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
                legendType='dot'
                datasets={[
                    {
                        label: "Max Traffic",
                        data: [18, 49, 13, 47, 37, 50, 16, 40, 21, 52, 56, 25],
                        backgroundColor: "rgba(17, 138, 251, 0.5)",
                        fill: true,
                        legendColor: "#118AFB"
                    },
                    {
                        label: "Max Traffic",
                        data: [12, 45, 78, 23, 56, 89, 34],
                        backgroundColor: "rgba(156, 77, 255, 0.5)",
                        fill: true,
                        legendColor: "#9A4DFF"
                    }
                ]} />
        </div>
    );
};

export default InterfaceTraffic;