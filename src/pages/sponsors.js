import Link from "next/link";

//data
import { sponsorsList } from "@/data/aboutUs/commonData";

//components
import SponsorCard from "@/components/cards/SponsorCard";

const AboutPage  = () => {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col w-full h-full px-4 lg:px-20 py-[100px] lg:py-[150px]">
                <p className="text-3xl lg:text-5xl text-gray_800 text-center font-extrabold mt-10">
                    <bdi>
                        {("Align your brand with innovation. Become a sponsor of")} <span className="text-primary">Healvai</span> {("and unlock new opportunities")}.
                    </bdi>
                </p>
                <Link
                    href='/support'
                    className="text-lg text-center text-white font-bold bg-primary w-auto px-10 py-5 mt-20 rounded-2xl"
                ><bdi>{("Become Our Sponsor")}</bdi>
                </Link>
                <div className='flex flex-col w-full mt-16'>
                    <p className="text-base lg:text-3xl text-gray_600 font-medium mt-5">
                        <bdi>{("Millions are seeking innovative ways to manage their health. By sponsoring our health digital platform, Healvai, you'll be aligning your brand with a passionate community actively seeking guidance and tools for well-being.  Become a partner in this exciting venture and make a significant impact.  Not only will you be supporting a future-focused approach to health, but you'll also gain valuable exposure to a health-conscious audience")}.</bdi>
                    </p>
                </div>
                {/* Team */}
                {sponsorsList?.length  
                ?
                <div className="w-full mt-20 px-5 lg:px-20">
                    <h5 className='text-3xl lg:text-6xl text-gray_800 lg:text-center font-extrabold leading-10 lg:leading-[70px]'>
                        <bdi>{("Our Sponsors")}</bdi>
                    </h5>
                    <div className="flex flex-wrap justify-center items-center w-full h-full mt-5">
                        {sponsorsList.map((item,index) => 
                            <SponsorCard key={index} data={item}/>
                        )}
                    </div>
                </div>
                :
                    null
                }
            </div>
        </div>
    );
};

export default  AboutPage;