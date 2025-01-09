import { FC } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { Pagination } from 'antd';
import BuildingItem from '../components/graph/BuildingItem';

const buildings = ["Gedung A", "Gedung B", "Gedung C", "Gedung D"]

const GraphPage: FC = () => {
    return (
        <MainLayout pageTitle='Dashboard Grafik' scroll={false}>
            <section className="h-full flex flex-col pb-3">
                <div className="flex-1 grid grid-cols-2 gap-4 py-6 h-full">
                    {buildings.map(building => (
                        <BuildingItem key={building} label={building} />
                    ))}
                </div>
                <div className="flex-shrink-0 flex justify-end">
                    <Pagination defaultCurrent={1} total={30} />
                </div>
            </section>
        </MainLayout>
    );
};

export default GraphPage;