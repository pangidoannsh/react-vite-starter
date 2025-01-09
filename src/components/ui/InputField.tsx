import { FC, ReactNode } from 'react';

interface Props {
    value?: string
    onChange?: (value: string) => void
    label?: ReactNode
    className?: string
}

const InputField: FC<Props> = ({ value, onChange, label, className }) => {
    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            {label}
            <input value={value} onChange={(e) => onChange?.(e.target.value)}
                className='rounded-lg border border-secondary focus:outline-none bg-primary-600/10 px-2 py-2 text-white' />
        </div>
    );
};

export default InputField;