import { FC, useState } from 'react';
import InputField from '../components/ui/InputField';
import Label from '../components/ui/Label';
import CTAButton from '../components/ui/CTAButton';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Checkbox } from 'antd';

interface LoginForm {
    username: string,
    password: string
    checked: boolean
}
const LoginPage: FC = () => {
    const [form, setForm] = useState<LoginForm>({
        username: "",
        password: "",
        checked: false
    })
    return (
        <>
            <div className="fixed inset-0 bg-cover opacity-60 z-0" style={{ backgroundImage: 'url("/assets/auth_bg.jpg")' }} />
            <div className='fixed inset-0 bg-cover overflow-hidden -z-10' style={{ backgroundImage: 'url("/assets/main_bg.jpg")' }} />
            <div className="h-screen p-12">
                <div className="h-full relative z-10 me-auto max-w-xl rounded-2xl bg-[#0165F5]/25 p-10 flex flex-col items-center">
                    <div className="flex gap-2 items-center mt-12">
                        <img src='/assets/logo_tni_au.webp' alt="logo_TNI_AU" className='w-7' />
                        <img src="/assets/koopsudnas.webp" alt="koopsudnas" className='w-7' />
                    </div>
                    <h1 className="mt-3 font-bold text-white text-xl">LOGIN NMS</h1>
                    <div className='text-sm text-white font-light mt-6 text-center mb-12'>
                        Silakan masukkan username dan password <br /> Anda untuk memulai
                    </div>
                    <InputField label={<Label icon='mdi:user' color='white' text="Username" />}
                        value={form.username} onChange={(e) => setForm({ ...form, username: e })}
                        className='w-full'
                    />
                    <InputField label={<Label icon='mdi:password' color='white' text="Password" />}
                        value={form.password} onChange={(e) => setForm({ ...form, password: e })}
                        className='w-full mt-5'
                    />
                    <div className="flex items-center gap-3 w-full mt-6">
                        <Checkbox onChange={e => setForm({ ...form, checked: e.target.checked })}><span className='text-sm text-white'>I agree to the platform accessing my <span className='text-[#45B9FF]'>information</span></span></Checkbox>
                    </div>
                    <CTAButton className='w-full mt-12 '>
                        <div className="flex gap-2 items-center justify-center">
                            <Icon icon="solar:login-bold" className='text-xl' />
                            <span className='text-shadow'>Start Now</span>
                        </div>
                    </CTAButton>
                </div>
            </div>
        </>
    );
};

export default LoginPage;