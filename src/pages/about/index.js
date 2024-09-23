import Image from "next/image";
import Link from "next/link";

//data
import { teamList, advisorsList, awardsList, description} from "@/data/aboutUs/commonData";

//components
import AwardCard from "@/components/cards/AwardCard";
import MemberCard from "@/components/cards/MemberCard";

//assets
import award_banner1 from '@/assets/bannerBackground/award_banner1.png'

const AboutPage  = () => {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col w-full h-full py-[100px] lg:py-[150px]">
                {/* Heading */}
                <div className="flex flex-col items-center text-center uppercase px-5 py-20 bg-bg1 bg-center bg-no-repeat">
                    <p className='text-3xl lg:text-4xl text-gray_800 font-extrabold leading-10 mt-5'>
                        <bdi>{("Welcome To")}</bdi>
                    </p>
                    <h3 className='text-6xl lg:text-[108px] text-primary font-extrabold leading-10 my-20 lg:my-36'>Healvai</h3>
                    <p className='text-3xl lg:text-4xl text-gray_800 font-extrabold leading-10'>
                        <bdi>{("AI-Powered Posture Corrector")}</bdi>
                    </p>
                </div>
                {/* Core Value */}
                <div className='w-full mt-16 px-4 lg:px-5'>
                    <div className='flex flex-col lg:flex-row py-5 lg:px-20 bg-gray_800 notranslate rounded-2xl lg:rounded-3xl overflow-hidden'>
                        <div className='flex flex-col justify-center lg:w-1/2 px-5 py-5'>
                            <h4 className='text-3xl lg:text-6xl text-white font-extrabold leading-10 lg:leading-[70px] self-start'>
                                <bdi>{(description?.coreValue?.title)}</bdi>
                            </h4>
                            <p className="text-lg lg:text-2xl text-gray_200 font-medium mt-5">
                                <bdi>{(description?.coreValue?.text)}</bdi>
                            </p>
                        </div>
                        <div className='flex flex-col gap-5 lg:w-1/2 px-5 py-10 lg:ml-10'>
                            {description?.coreValue?.list?.map((item,index) => 
                                <div 
                                    key={index}
                                    className="flex flex-col lg:flex-row bg-gray_700 p-4 lg:py-10 rounded-2xl"
                                >
                                    <div className="lg:mt-5">
                                        <div className="flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 bg-gray_600 rounded-xl lg:rounded-2xl">
                                            <Image 
                                                src={item?.pic}
                                                alt={`${item?.title} icon`}
                                                className="w-6 h-6 lg:w-12 lg:h-12"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 lg:mt-0 lg:ml-5">
                                        <h6 className="text-xl lg:text-2xl text-white font-extrabold">
                                            <bdi>{(item?.title)}</bdi>
                                        </h6>
                                        <p className="text-lg text-gray_200 font-medium mt-2">
                                            <bdi>{(item?.text)}</bdi>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* mission */}
                <div className='flex flex-col w-full mt-16 px-4 lg:px-10'>
                    <h5 className='text-lg lg:text-5xl text-gray_800 font-extrabold leading-10'>    
                        <bdi>{(description?.mission?.title)}</bdi>
                    </h5>
                    <p className="text-base lg:text-3xl text-gray_600 font-medium mt-5">
                        <bdi>{(description?.mission?.text)}</bdi>
                    </p>
                </div>
                {/* award */}
                {awardsList.length ? 
                    <div className='w-full my-16 px-4 lg:px-5'>
                        <div className='flex flex-col lg:flex-row py-5 lg:px-20 bg-gray_800 notranslate rounded-2xl lg:rounded-3xl overflow-hidden'>
                            <div className='flex items-end justify-center lg:w-1/2'>
                                <div className='my-5 rounded-2xl lg:rounded-3xl overflow-hidden'> 
                                    <Image 
                                        src={award_banner1}
                                        alt={`Healvai Award Banner`}
                                        className='w-full h-full object-cover'
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col lg:w-1/2 px-5 py-10 lg:ml-10'>
                                <h4 className='text-3xl lg:text-6xl text-white font-extrabold leading-10 lg:leading-[70px] self-start'>
                                    <bdi>{("Awards & Recognitions")}</bdi>
                                </h4>
                                <div className="flex flex-col gap-3 mt-4">
                                    {awardsList.map((item,index) => 
                                        <AwardCard 
                                            key={index}
                                            title={item.title}
                                            logo={item.logo}
                                            subTitle={item.subTitle}
                                            link={item.link}
                                            description={item.description}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                : null}
                {/* Team */}
                <div className="w-full mt-20 px-5 lg:px-20">
                    <h5 className='text-3xl lg:text-6xl text-center lg:text-left text-gray_800 font-extrabold leading-10 lg:leading-[70px]'>
                        <bdi>{("Meet Our Team")}</bdi>
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full h-full mt-5">
                        {teamList.map((item,index) => 
                            <MemberCard key={index} data={item}/>
                        )}
                    </div>
                </div>
                {/* Advisors */}
                <div className="w-full mt-20 px-5 lg:px-20">
                    <h5 className='text-2xl lg:text-3xl text-center lg:text-left text-gray_800 font-extrabold leading-8 lg:leading-[70px]'>
                        <bdi>{("Advised by the Best in Tech, Business and Science")}</bdi>
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full h-full mt-5">
                        {advisorsList.map((item,index) => 
                            <MemberCard key={index} data={item}/>
                        )}
                    </div>
                </div>
                <div className='flex flex-col w-full mt-20 px-4 lg:px-10'>
                    <p className="text-base lg:text-3xl text-center text-gray_600 font-medium">
                        <bdi>{("Founded in 2024 by")} <a href="https://linkedin.com/in/mehdiirezakhani" target="_blank" className="underline">Mehdi Rezakhani</a></bdi>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default  AboutPage;