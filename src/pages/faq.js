
//data
import { FaqList } from "@/data/common";

//components
import AccordionUsage from "@/components/partials/AcoordionUsage";

export default function FaqPage() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col w-full h-full px-5 pt-28 pb-10">
                {/* Heading */}
                <div className="flex flex-col lg:flex-row py-10 lg:px-20 lg:py-20">
                    <h3 className='text-4xl lg:text-6xl text-gray_800 font-extrabold leading-10 lg:leading-[70px]'>
                        <bdi>{"Frequently Asked Questions"}</bdi>
                    </h3>
                </div>
                <div className='px-5 py-10 lg:px-40 lg:py-20 my-5 bg-white rounded-2xl lg:rounded-3xl'>
                    <AccordionUsage list={FaqList}/>
                </div>
            </div>
        </div>
    );
};