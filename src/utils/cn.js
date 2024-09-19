import {twMerge} from 'tailwind-merge';
import clsx from 'clsx';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// example for use it
{/* <button className={cn('bg-red-400 text-center', extraStyle, {
    'bg-blue-400': isActive,
})}>

</button> */}