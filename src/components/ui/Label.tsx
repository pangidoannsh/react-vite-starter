import { Icon } from '@iconify/react/dist/iconify.js';
import { FC, ReactNode } from 'react';

interface Props {
    icon?: string
    color?: string
    text?: ReactNode
}
const Label: FC<Props> = ({ icon, text, color }) => {
    return (
        <div className='flex items-center gap-1.5' style={{ color: color }} >
            {icon && <Icon icon={icon} />}
            <span className='text-sm'>{text}</span>
        </div>
    );
};

export default Label;