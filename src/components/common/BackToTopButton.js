import Image from "next/image"
//assets
import backToTop_Icon from "@/assets/icons/doubleTop_Icon.svg";

export default function BackToTopButton() {
    const clickHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return(
        <button
            onClick={clickHandler}
            className='flex items-center justify-center gap-3 px-8 py-4 bg-gray_600 rounded-xl'
        >
            <p className='text-lg text-white font-bold'>
                <bdi>{("Back To Top")}</bdi>
            </p>
            <div className='w-5 h-5'>
                <Image 
                    src={backToTop_Icon}
                    alt="Download Icon"
                    className='w-full h-full object-cover'
                    loading="lazy"
                />
            </div>
        </button>
    )
}