import Image from 'next/image';
import Link from 'next/link';

//assets
import Error_Icon from '@/assets/common/errorRed_Icon.png';

export default function ErrorViewer({heading, errorMessage, CTA, link, handler, variant}) {
    return (
        <div className="flex flex-col items-center self-center justify-center w-full h-full">
            <div className='w-40 h-40 lg:w-56 lg:h-56'>
                <Image src={Error_Icon} alt="Error Icon" className='w-full h-full object-cover'/>
            </div>
            <h5 className='text-5xl text-[#E13F06] text-center font-bold'><bdi>{heading}</bdi></h5>
            {typeof errorMessage === "string" ? 
                <p className='text-[#E13F06] text-center text-lg font-bold mt-5'><bdi>{errorMessage}</bdi></p>
                : typeof errorMessage === "object" ?
                <div className='flex flex-col mt-5'>
                    {Object?.keys(errorMessage)?.map(function(key) {
                        return <p className='text-[#E13F06] text-sm font-bold my-2' key={key}><bdi>{`${key}: ${errorMessage[key]}`}</bdi></p>
                    })}
                </div>
            :null}
            {variant === "link" && 
                <Link
                    href={link}
                    className=''
                >
                    <bdi>{CTA}</bdi>
                </Link>
            }
            {variant === "button" &&
                <button
                    onClick={handler}
                    className='text-lg text-center text-white font-medium bg-[#E13F06] px-10 py-3 mt-5 rounded-xl'
                >
                    <bdi>{CTA}</bdi>
                </button>
            }
            {variant === "reset" &&
                <button
                    type="reset"
                    onClick={handler}
                    className='text-lg text-center text-white font-medium bg-[#E13F06] px-10 py-3 mt-5 rounded-xl'
                >
                    <bdi>{CTA}</bdi>
                </button>
            }
        </div>
    )
}