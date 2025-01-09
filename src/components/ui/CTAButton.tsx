import { FC } from 'react';

interface Props {
    children?: React.ReactNode
    className?: string
}
const CTAButton: FC<Props> = ({ children, className }) => {
    return (
        <button className={`py-3 rounded-lg bg-[#0075FF] text-white font-semibold shadow-xl ${className}`}>
            {children}
        </button>
    );
};

export default CTAButton;