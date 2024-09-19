import Image from 'next/image';
import Link from 'next/link';

//data
import {profitsList, workStepList, appDownloadList} from "@/data/common";

// assets
import banner_Screenshot from '@/assets/screenshots/intro_shot.png';
import download_Icon from '@/assets/icons/download_Icon.svg';



const HomePage = () => {
    return (
        <div className='flex flex-col w-full h-full overflow-x-hidden bg-light dark:bg-black dark:text-white'> 
            {/*Main*/}
            <div className='flex flex-col w-full h-full mt-24 lg:mt-40'>
                {/* Intro */}
                <div className='flex flex-col lg:flex-row lg:gap-10 justify-center items-center px-4 lg:px-12'>
                    <div className='flex flex-col justify-center lg:w-1/2 my-5 lg:px-10'>
                        <h1 className='text-primary text-5xl sm:text-8xl font-extrabold leading-10 lg:leading-[80px] notranslate'>
                            <bdi>Healvai</bdi>
                        </h1>
                        <p className='text-4xl sm:text-5xl text-gray_800 font-bold lg:leading-[50px] mt-4'>
                            <bdi>
                                {"Your AI-Powered Posture Corrector"}
                            </bdi>
                        </p>
                        
                        <p className='text-lg sm:text-xl text-gray_600 font-medium leading-6 mt-4'>
                            {"Desk job got you sore? Do you experience chronic neck pain, back pain, shoulder pain, and knee pain? 🤕 Get back to the things you love, pain-free!✌️"}
                        </p>
                        <Link 
                            href={"/app"} 
                            className='text-2xl text-center text-white font-bold px-8 py-4 lg:px-20 mt-5 bg-primary rounded-xl lg:rounded-2xl'
                        >
                            <bdi>{"Get Started Free"}</bdi>
                        </Link>
                    </div>
                    <div className='flex items-end justify-center lg:w-1/2 mt-10 lg:mt-0'>
                        <div className='lg:w-[600px]'> 
                            <Image 
                                src={banner_Screenshot}
                                alt={`Healvai Screenshots`}
                                className='w-full h-full'
                            />
                        </div>
                    </div>
                </div>
                {/* Commercial Video */}
                <div className='w-full mt-10 px-4 lg:px-5'>
                    <div className='flex flex-col lg:flex-row-reverse items-center justify-between lg:gap-20 w-full px-5 lg:px-20 py-7 lg:py-10 bg-gray_800 rounded-2xl lg:rounded-3xl'>
                        <div className='lg:w-1/2'>
                            <h2 className='text-3xl lg:text-5xl text-white font-extrabold leading-10 lg:leading-[60px]'>
                                <bdi>
                                    {"Take Control of Your Physical Health Today!"}
                                </bdi>
                            </h2>
                            <p className='text-lg lg:text-xl text-gray_200 font-medium mt-5'>
                                <bdi>
                                    {"Body Anomaly Detection uses AI to analyze your posture in photos and suggests personalized exercises. It helps improve posture, balance, and address issues like uneven shoulders or misaligned hips."}
                                </bdi>
                            </p>
                        </div>
                        <div className='w-full lg:w-1/2 my-5 bg-gray_800 rounded-3xl overflow-hidden'>
                            <video width="320" height="320" controls className='w-full h-full'>
                                <source src="https://media.healvai.com/media/Healvai-Teaser.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div> 
                        
                    </div>
                </div>
                {/* Profits */}
                <div className='w-full mt-24 px-4 lg:px-40'>
                    <h3 className='text-2xl xs:text-3xl sm:text-5xl text-center text-gray_800 font-extrabold leading-10'>
                        <bdi>{"Why choose Healvai?"}</bdi>
                    </h3>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full mt-12'>
                        {profitsList.map((item,index) =>
                            <div key={index} className='flex flex-col w-full p-6 bg-white dark:bg-black rounded-2xl lg:rounded-3xl'>
                                <div className='flex items-center justify-center w-14 h-14 rounded-2xl bg-primary_100'>
                                    <Image src={item.pic} alt={item.title+" Service"} className='w-4 h-4 object-cover'/>
                                </div>
                                <h4 className='text-2xl text-gray_800 font-extrabold leading-7 mt-6 mb-2'><bdi>{item.title}</bdi></h4>
                                <p className='text-base text-gray_600 font-medium leading-6'><bdi>{item.description}</bdi></p>
                            </div>
                        )}
                    </div>
                </div>
                {/* How it is work */}
                <div className='w-full mt-24 px-4 lg:px-20'>
                    <h3 className='text-2xl xs:text-3xl sm:text-6xl text-center text-gray_800 font-extrabold leading-10'>
                        <bdi>{"How our app works?"}</bdi>
                    </h3>
                    <div className='flex flex-col justify-center w-full gap-10 lg:gap-5 mt-12'>
                        {workStepList?.map((item,index) => 
                            <div 
                                key={index}
                                className='flex flex-col lg:flex-row lg:items-center bg-white p-5 lg:p-8 rounded-3xl' 
                            >
                                
                                <div className='flex flex-col items-start lg:w-1/2'>
                                    <h5 className='text-2xl lg:text-4xl text-gray_800 font-extrabold mt-2 lg:mt-0'>
                                        {item?.title}
                                    </h5>
                                    <p className='text-lg lg:text-xl text-gray_700 font-medium mt-2 lg:mt-4'>
                                        <bdi>{item?.description}</bdi>
                                    </p>
                                </div>
                                <div className='self-center lg:w-1/2 mt-10 lg:mt-0 bg-gray_100 rounded-xl lg:rounded-2xl overflow-hidden'>
                                    <div> 
                                        <Image 
                                            src={item?.pic}
                                            alt={`${item?.title}`}
                                            className='scale-125 translate-y-[-10%]'
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Download App */}
                <div className='w-full my-16 px-4 lg:px-5'>
                    <div className='flex flex-col lg:flex-row-reverse lg:px-20 bg-primary rounded-2xl lg:rounded-3xl'>
                        <div className='flex flex-col lg:w-1/2 px-5 py-16'>
                            <div className='flex items-center'>
                                <div className='w-2 h-2 bg-primary_300 rounded-sm mr-3'></div>
                                <h4 className='text-lg text-white font-bold'>
                                    {"Download The App"}
                                </h4>
                            </div>
                            <h3 className='text-3xl lg:text-5xl text-white font-extrabold leading-10 lg:leading-[60px] mt-5'>
                                <bdi>
                                    {"Smart Therapy For Stronger You :)"}
                                </bdi>
                            </h3>
                            <div className='flex flex-col lg:flex-row lg:flex-wrap gap-3 mt-5 lg:items-center'>
                                {appDownloadList?.map((item,index) => 
                                    <Link
                                        key={index}
                                        href={item?.link}
                                        className='flex items-center justify-center gap-3 px-8 py-4 border-white border-[1px] rounded-xl'
                                    >
                                        <p className='text-lg text-white font-bold'>
                                            <bdi>{item?.title}</bdi>
                                        </p>
                                        <div className='w-5 h-5'>
                                            <Image 
                                                src={download_Icon}
                                                alt="Download Icon"
                                                className='w-full h-full object-cover'
                                            />
                                        </div>
                                        
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className='flex items-end justify-center lg:w-1/2 mt-10 lg:mt-0'>
                            <div className=''> 
                                <Image 
                                    src={banner_Screenshot}
                                    alt={`Healvai Screenshots`}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;