import Image from "next/image"
import Link from "next/link"

//assets
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

export default function MemberCard({data}) {
    return(
        <div className="flex flex-col justify-between gap-2 p-4 bg-white rounded-3xl shadow-[0px_16px_32px_0px_rgba(36,46,73,0.05)]">
            <div>
                <h4 className="text-xl text-gray_800 font-extrabold"><bdi>{data?.name}</bdi></h4>
                {/* {data?.subPosition && 
                    <p className="text-xs text-center font-medium">
                        <bdi>{(data?.subPosition)}</bdi>
                    </p>
                } */}
                {data?.position && 
                    <p className="text-sm text-gray_600 font-extrabold">
                        <bdi>{(data?.position)}</bdi>
                    </p>
                }
            </div>
            <div className='flex items-center gap-2'>
                {data?.links?.Linkedin && 
                    <a 
                        href={`https://linkedin.com/in/${data?.links?.Linkedin}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <LinkedInIcon className='text-2xl text-gray_800'/>
                    </a>
                }
                {data?.links?.Instagram && 
                    <a 
                        href={`https://instagram.com/${data?.links?.Instagram}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <InstagramIcon className='text-2xl text-gray_800'/>
                    </a>
                }
                {data?.links?.Twitter && 
                    <a 
                        href={`https://twitter.com/${data?.links?.Twitter}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <TwitterIcon className='text-2xl text-gray_800'/>
                    </a>
                }
                {data?.links?.Website && 
                    <Link href={`/about/${data?.links?.Website}`}>
                        <LanguageIcon className='text-2xl text-gray_800'/>
                    </Link>
                }
                {data?.links?.Email && 
                    <a 
                        href={`mailto:${data?.links?.Email}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <MailOutlineIcon className='text-2xl text-gray_800'/>
                    </a>
                }
                {data?.links?.Phone && 
                    <a 
                        href={`https://wa.me/${data?.links?.Phone}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <PhoneEnabledIcon className='text-2xl text-gray_800'/>
                    </a>
                }
            </div>
            <div className="self-center relative w-full h-72 lg:w-full lg:h-68 rounded-xl lg:rounded-3xl overflow-hidden">
                <Image 
                    src={data?.pic}
                    alt={`${data?.name} Pic`} 
                    className="w-full h-full object-cover hover:scale-105 ease-linear duration-200"
                    loading="lazy"
                />
                <div className="bg-primary/30 absolute inset-0">
                </div>
            </div>
        </div>
    )
}