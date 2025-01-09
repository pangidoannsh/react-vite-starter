import { FC, useState } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import CardResult from '../../components/speedTest/CardResult';
import Spedometer from '../../components/speedTest/Spedometer';
import ActionCard from '../../components/speedTest/ActionCard';

const InternetSpeedTestPage: FC = () => {
    const [speed, setSpeed] = useState(0)
    const [isTesting, setIsTesting] = useState(false);

    function _startTest() {
        if (isTesting) return; // Cegah memulai simulasi jika sudah berjalan

        setIsTesting(true);
        setSpeed(0);

        let duration = 3000; // Durasi simulasi dalam milidetik (3 detik)
        let intervalTime = 300; // Waktu per update dalam milidetik (300ms)
        const steps = duration / intervalTime; // Hitung jumlah langkah animasi
        let count = 0;

        const interval = setInterval(() => {
            if (count >= steps) {
                clearInterval(interval); // Hentikan interval setelah 3 detik
                setIsTesting(false); // Atur status ke selesai
                return;
            }

            setSpeed((prevSpeed) => {
                // Tambahkan angka random (5-20 Mbps) agar tampak realistis
                const randomIncrement = Math.floor(Math.random() * 15) + 5;
                return prevSpeed + randomIncrement;
            });

            count++;
        }, intervalTime);
    }

    return (
        <MainLayout pageTitle='Speed Test/Internet' contentTitle='Speed Test Internet'>
            <div className="relative h-full">
                <div className="absolute w-96 top-6 right-6 ">
                    <CardResult />
                </div>
                <div className="mx-auto max-w-sm">
                    <div className="flex flex-col items-center w-full gap-6">
                        <Spedometer speed={speed} />
                        <ActionCard onStart={_startTest} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default InternetSpeedTestPage;