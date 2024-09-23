import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';

//data
import { socialList } from '@/data/aboutUs/commonData';
import { appDownloadList } from '@/data/common';

//components
import BackToTopButton from '@/components/common/BackToTopButton';

//assets
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';
import download_Icon from '@/assets/icons/download_Icon.svg';
import { YouTube } from '@mui/icons-material';

const Footer = () => {
    const {pathname} = useRouter();
    const footerMenu = [
        {
            section:"Product", 
            list: [
                {title:"AI Body Anomaly Detection", link:'https://app.healvai.com/workout/ai-powered-body-anomaly-detection'},
                {title:"Workout", link:'https://app.healvai.com/workout'},
                {title:'Blog', link:'https://app.healvai.com/blog'},
            ]   
        },
        {
            section:"Company", 
            list: [
                {title:"About Us", link:"/about"},
                {title:"Contact Us", link:"/contact"},
                {title:"Support Us", link:"/support"},
                {title:"Our Sponsors", link:"/sponsors"},
                {title:"Submit Feedback", link:"https://Healvai.formaloo.co/feedback"},
            ]
        },
        {
            section:"Resources", 
            list: [
                {title:"User Agreement", link:"/user-agreement"},
                {title:"Privacy Policy", link:"/privacy-policy"},
                {title:"FAQ", link:"/faq"},
            ]
        }
    ]

    const footerMustBeHidden = () => {
        if( 
               pathname.includes('/auth') 
            || pathname == '/onboarding' 
            || pathname == '/soon' 
            || pathname.includes('/cooking') 
            || pathname == '/workout/ai-powered-body-anomaly-detection' 
            || pathname == '/lab' 
            || pathname == '/lab/process-control'
            || pathname == '/workout/plan/create'
            || pathname == '/workout/plan/edit'
            || pathname.includes("/app")
            // || pathname == '/workout/plan/select'
            || pathname == '/workout/runner'
            || (pathname.includes("/about/") && pathname !== "/about" && pathname !== "/about/")
        ) {
        return 'none'
        } else return 'show'
    }
    return (
        <>
            {footerMustBeHidden() === 'none' ? null : 
                <footer className='w-full p-4 pt-0 lg:p-5 lg:pt-0'>
                    <div className='w-full p-5 lg:p-10 text-white notranslate rounded-2xl lg:rounded-3xl overflow-hidden bg-gray_800'>
                        <div className='flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between'>
                            <div className='flex flex-col'>
                                <Link href='/'>
                                    <h3 className='text-4xl text-white font-extrabold'>
                                        Healvai
                                    </h3>
                                </Link>
                                <h6 className='text-lg text-white font-medium'>{("AI-Powered Posture Corrector")}</h6>
                                <div className='flex items-center my-1'>
                                    {socialList?.Linkedin && 
                                        <a 
                                            href={`https://linkedin.com/company/${socialList?.Linkedin}`} 
                                            target="_blank" 
                                            rel='noreferrer'
                                        >
                                            <LinkedInIcon className='text-xl text-gray_400 mx-1'/>
                                        </a>
                                    }
                                    {socialList?.Instagram && 
                                        <a 
                                            href={`https://instagram.com/${socialList?.Instagram}`} 
                                            target="_blank" 
                                            rel='noreferrer'
                                        >
                                            <InstagramIcon className='text-xl text-gray_400 mx-1'/>
                                        </a>
                                    }
                                    {socialList?.Twitter && 
                                        <a 
                                            href={`https://twitter.com/${socialList?.Twitter}`} 
                                            target="_blank" 
                                            rel='noreferrer'
                                        >
                                            <TwitterIcon className='text-xl text-gray_400 mx-1'/>
                                        </a>
                                    }
                                    {socialList?.Telegram && 
                                        <a 
                                            href={`https://t.me/${socialList?.Telegram}`} 
                                            target="_blank" 
                                            rel='noreferrer'
                                        >
                                            <TelegramIcon className='text-xl text-gray_400 mx-1'/>
                                        </a>
                                    }
                                    {socialList?.Youtube && 
                                        <a 
                                            href={`https://www.youtube.com/${socialList?.Youtube}`} 
                                            target="_blank" 
                                            rel='noreferrer'
                                        >
                                            <YouTube className='text-xl text-gray_400 mx-1'/>
                                        </a>
                                    }
                                    {socialList?.Email && 
                                        <a 
                                            href={`mailto:${socialList?.Email}`} 
                                            target="_blank" 
                                            rel='noreferrer'
                                        >
                                            <MailOutlineIcon className='text-xl text-gray_400 mx-1'/>
                                        </a>
                                    }
                                    {socialList?.Phone && 
                                        <a 
                                            href={`https://wa.me/${socialList?.Phone}`} 
                                            target="_blank" 
                                            rel='noreferrer'
                                        >
                                            <PhoneEnabledIcon className='text-xl text-gray_400 mx-1'/>
                                        </a>
                                    }
                                </div>
                                <p>COPYRIGHT © 2024</p>
                            </div>
                            {footerMenu?.map((item,index) => 
                                <div key={index} className='flex flex-col gap-2'>
                                    <p className='text-base text-gray_400 font-medium'>
                                        <bdi>{(item?.section)}</bdi>
                                    </p>
                                    {item?.list?.map((item,index) => 
                                        <Link 
                                            href={item?.link} 
                                            key={index} 
                                            passHref
                                            className='text-xl text-white font-medium'
                                        >
                                            <h5>
                                                <bdi>{(item?.title)}</bdi>
                                            </h5>
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mt-10 lg:mt-24'>
                            <div className='flex flex-col lg:flex-row lg:flex-wrap gap-3 lg:items-center'>
                                {appDownloadList?.map((item,index) => 
                                    <a
                                        key={index}
                                        href={item?.link}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='flex items-center justify-center gap-3 px-8 py-4 border-white border-[1px] rounded-xl'
                                    >
                                        <p className='text-lg text-white font-bold'>
                                            <bdi>{(item?.title)}</bdi>
                                        </p>
                                        <div className='w-5 h-5'>
                                            <Image 
                                                src={download_Icon}
                                                alt="Download Icon"
                                                className='w-full h-full object-cover'
                                                loading='lazy'
                                            />
                                        </div>
                                    </a>
                                )}
                            </div>
                            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3'>
                                <BackToTopButton/>
                            </div>
                        </div>
                    </div>
                </footer>
            }
        </>
    );
};

export default Footer;