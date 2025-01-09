import { FC } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import TotalLocation from '../components/home/TotalLocation';
import TotalDevice from '../components/home/TotalDevice';
import BandwithUtilization from '../components/home/BandwithUtilization';
import Topology from '../components/home/Topology';
import NetworkTraffic from '../components/home/NetworkTraffic';

const HomePage: FC = () => {
    return (
        <MainLayout pageTitle='Dashboard Resume'>
            <section className='grid grid-cols-12 gap-4 mt-6 pb-3'>
                <div className="col-span-6 card px-4 py-3 rounded-lg h-full">
                    <h3 className='card-title'>Lokasi dan Device Internet</h3>
                    <div className='flex items-center gap-8'>
                        <TotalLocation />
                        <TotalDevice label='Internet' />
                    </div>
                </div>
                <div className="col-span-6 card px-4 py-3 rounded-lg h-full">
                    <h3 className='card-title'>Lokasi dan Device VPN</h3>
                    <div className='flex items-center gap-8'>
                        <TotalLocation />
                        <TotalDevice label='VPN' />
                    </div>
                </div>
                <div className="col-span-4 card px-4 py-4 rounded-lg h-full">
                    <Topology />
                </div>
                <div className="col-span-8 card px-4 py-3 rounded-lg">
                    <BandwithUtilization />
                </div>
                <div className="col-span-6 card px-4 py-4 rounded-lg">
                    <NetworkTraffic label='Internet' />
                </div>
                <div className="col-span-6 card px-4 py-4 rounded-lg">
                    <NetworkTraffic label='VPN' />
                </div>
            </section>
        </MainLayout>
    );
}

export default HomePage;