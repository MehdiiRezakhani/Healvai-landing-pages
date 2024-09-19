import { cn } from "@/utils/cn";

export default function Button({children, onClick, disabled, style, titleStyle, title, icon}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn("flex items-center justify-center gap-1 bg-primary rounded-xl",style)}
        >
            <bdi className={cn("text-white font-bold",titleStyle)}>{title}</bdi>
            {icon}
        </button>
    )
}