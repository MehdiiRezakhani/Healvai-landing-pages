import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

//components
import AvatarBox from '@/components/dashboard/AvatarBox';

//assets
import MainLogo from '@/assets/Logo/HLogo.svg';
import DarkLogo from '@/assets/Logo/HLogo-white.svg';
import Drawer from '@/components/common/Drawer';

export default function Header() {
    const {pathname} = useRouter()
    const mainMenu =  [
        {title:'Home', name:'home', link:'/'},
        {title:"About Us", name:'about', link:"/about"},
        {title:"Support Us", name:'support', link:"/support"},
        {title:"Sponsors", name:'sponsors', link:"/sponsors"},
        {title:"FAQ", name:'faq', link:"/faq"},

    ]
    const routerFinder = () => {
        if(pathname == '/' || pathname.includes('/features') || pathname.includes('/blog') || pathname.includes('/about') || pathname.includes('/support') || pathname.includes('/sponsors') ||  pathname.includes('/faq') ||  pathname.includes('/app/profile') ) {
        return pathname
        } else return 'none'
    }
    const headerMustBeHidden = () => {
        if( 
            pathname == '/soon' 
            || pathname.includes('/cooking') 
            || pathname.includes("/app")
            || (pathname.includes("/about/") && pathname !== "/about" && pathname !== "/about/")
        ) {
        return 'none'
        } else return 'show'
    }
    return (
        <>
            {headerMustBeHidden() === 'none' ? null : 
                <div className='w-full max-w-[1400px] fixed z-10 top-3.5 left-1/2 -translate-x-1/2 px-3 lg:px-5'>
                    <div className='flex items-center justify-between w-full p-5 rounded-2xl overflow-hidden bg-white dark:bg-black backdrop-blur-xl shadow-[0px_16px_32px_0_rgba(9,14,29,0.05)]'>
                        <Link href='/' className='w-7 h-7 lg:w-[50px] lg:h-[50px] hover:scale-[1.05]'>
                            <Image src={MainLogo} alt='Healvai Logo' className='w-full h-full object-cover'/>
                        </Link>
                        <div className='hidden lg:flex items-center justify-between'>
                            {mainMenu.map((item,index) => 
                                <Link
                                    className={clsx('text-lg text-gray_400 font-bold mx-2.5 hover:scale-[1.05]', {
                                        'text-gray_800' : item.link == routerFinder()
                                    })}
                                    key={index}
                                    href={item.link}
                                ><h2>
                                    <bdi>{(item.title)}</bdi>
                                </h2>
                                </Link>
                            )}
                        </div>
                        <div className='lg:hidden'>
                            <Drawer/>
                        </div>
                        <div className='hidden lg:block'>
                            <AvatarBox/>
                        </div>
                    </div>
                </div>
            }
        </>      
    );
};