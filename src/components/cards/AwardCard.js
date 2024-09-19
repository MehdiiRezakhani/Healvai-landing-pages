export default function AwardCard({key, title, logo, link, subTitle, description}) {
    return (
        <div key={key} className='flex w-full mt-5'>
            {/* {logo ? 
                <div className="w-16 h-16 mr-3 border-[1px] border-solid border-primary rounded-full overflow-hidden">
                    <Image src={logo} alt={`${title} + Logo`} className="w-full h-full object-cover"/>
                </div>
            : null} */}
            <div className="flex flex-col w-full">
                <h5 className='text-xs lg:text-lg text-white font-medium lg:font-extrabold leading-8'>
                    <bdi>{(title)}</bdi>
                </h5>
                {link ? 
                    <a 
                        href={link}
                        target='_blank'
                        className='text-xs lg:text-lg text-primary_500 font-medium lg:font-extrabold underline'
                    >
                        <bdi>{(subTitle)}</bdi>
                    </a>
                    :
                    <h6 
                        className='text-xs lg:text-lg text-white font-medium lg:font-extrabold'
                    >
                        <bdi>{(subTitle)}</bdi>
                    </h6>
                }
                <p className='text-xs lg:text-lg text-white font-medium lg:font-extrabold'>
                    <bdi>{(description)}</bdi>
                </p>
            </div>
        </div>
    )
}