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
        <div className="flex flex-col m-2.5 p-4 bg-white rounded-3xl shadow-[0px_16px_32px_0px_rgba(36,46,73,0.05)]">
            <h4 className="text-xl text-gray_800 font-extrabold mt-2">
                <bdi>{data?.name}</bdi>
            </h4>
            {data?.position && 
                <p className="text-sm text-gray_600 font-extrabold"><bdi>{data?.position}</bdi></p>
            }
            <div className='flex items-center gap-2 mt-2'>
                {data?.links?.Linkedin && 
                    <a 
                        href={`https://au.linkedin.com/in/${data?.links?.Linkedin}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <LinkedInIcon className='text-xl text-gray_800'/>
                    </a>
                }
                {data?.links?.Instagram && 
                    <a 
                        href={`https://instagram.com/${data?.links?.Instagram}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <InstagramIcon className='text-xl text-gray_800'/>
                    </a>
                }
                {data?.links?.Twitter && 
                    <a 
                        href={`https://twitter.com/${data?.links?.Twitter}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <TwitterIcon className='text-xl text-gray_800'/>
                    </a>
                }
                {data?.links?.Website && 
                    <Link href={`/about/${data?.links?.Website}`}>
                        <LanguageIcon className='text-xl text-gray_800'/>
                    </Link>
                }
                {data?.links?.Email && 
                    <a 
                        href={`mailto:${data?.links?.Email}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <MailOutlineIcon className='text-xl text-gray_800'/>
                    </a>
                }
                {data?.links?.Phone && 
                    <a 
                        href={`https://wa.me/${data?.links?.Phone}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <PhoneEnabledIcon className='text-xl text-gray_800'/>
                    </a>
                }
            </div>
            <div className="self-center relative w-60 h-72 lg:w-48 lg:h-68 mt-5 rounded-xl lg:rounded-3xl overflow-hidden">
                <Image 
                    src={data?.pic}
                    alt={`${data?.name} Pic`} 
                    className="w-full h-full object-cover hover:scale-105 ease-linear duration-200"
                />
                <div className="bg-primary/30 absolute inset-0">
                </div>
            </div>
        </div>
    )
}