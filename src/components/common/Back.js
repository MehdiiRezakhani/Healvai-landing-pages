import { useRouter } from 'next/router';
import { cn } from '@/utils/cn';

//assets
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Back({ url="", kind="", style="", disabled=false, color="gray_800"}) {
    const router = useRouter();
    const backHandler = () => {
        if(url) {
            if(kind === "replace") {
                router.replace(url)
            } else {
                router.push(url)
            }
        } else {
            router.back()
        }
    } 
    return (
        <button
            disabled={disabled}
            onClick={backHandler}
            className={cn(`flex justify-center items-center p-2 border-[1px] border-${color} rounded-[10px] cursor-pointer`,style)}
        >
            <ArrowBackIosNewIcon className={cn(`text-${color} text-sm`)}/>
        </button>
    )
}