import { useReducer, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';


//component
import Back from '@/components/common/Back';
import Spinner from '@/components/common/Spinner';

//data
import { getMemberData } from '@/data/aboutUs/memberData';

//assets
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const initState = {
    data : {},
    loading: true,
    error: '',
}
const reducer = (state,action) => {
    switch(action.type) {
        case "SUCCESS": 
            return {
                data : action.payload,
                loading : false,
                error : '',
            }
        case "FAIL" :
            return {
                data : {},
                loading: false,
                error: action.error,
            }
        default :
            return state;
    }
}
export default function TeamMemberPage({}) {
    const router = useRouter()
    const {memberName} = router.query
    const data = getMemberData(memberName)
    const [member,dispatch] = useReducer(reducer,initState);
    useEffect(() => {
        if(data) {
                dispatch({type:"SUCCESS", payload:data})
        } else {
            dispatch({type:"FAIL", error:"We have some trouble!"})
        }
    },[data])
    return (
        <div className='absolute inset-0 bg-light dark:bg-black w-full h-full px-5 pt-20 lg:px-20 lg:pt-10'>
            <div className='flex flex-col items-center w-full h-full'>  
                <div className='flex items-center justify-between w-full absolute top-5 index-0 z-10 px-5'>
                    <Back url='/about' color='primary'/>
                </div>
                <div className='w-full h-full'>
                    {member.loading ? 
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <Spinner size="h-12 w-12" color="bg-blue-500" />
                                <p className="text-xl text-primary font-medium mt-2">Please Wait...</p>
                            </div>
                        : !member.loading && !member.error ? 
                            <div className='flex flex-col w-full h-full lg:mt-20'>
                                {/* Summary */}
                                <div className='flex flex-col items-center'>
                                    <div className='w-40 h-40 border-[1px] border-primary rounded-full overflow-hidden shadow-first'>
                                        <Image 
                                            src={member?.data?.summery?.avatar} 
                                            alt={`${member?.data?.summery?.name} Profile Picture`}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <h1 className='text-3xl text-center text-primary font-bold mt-1'>{member?.data?.summery?.name}</h1>
                                    <h2 className='text-base text-center text-opacity-80 font-medium'>{member?.data?.summery?.position}</h2>
                                    <div className='flex items-center my-2'>
                                        {member?.data?.summery?.Linkedin && 
                                            <a 
                                                href={`https://au.linkedin.com/in/${member?.data?.summery?.Linkedin}`} 
                                                target="_blank" 
                                                rel='noreferrer'
                                            >
                                                <LinkedInIcon className='text-2xl text-primary mx-1'/>
                                            </a>
                                        }
                                        {member?.data?.summery?.Github && 
                                            <a 
                                                href={`https://github.com/${member?.data?.summery?.Github}`} 
                                                target="_blank" 
                                                rel='noreferrer'
                                            >
                                                <GitHubIcon className='text-2xl text-primary mx-1'/>
                                            </a>
                                        }
                                        {member?.data?.summery?.Email && 
                                            <a 
                                                href={`mailto:${member?.data?.summery?.Email}`} 
                                                target="_blank" 
                                                rel='noreferrer'
                                            >
                                                <MailOutlineIcon className='text-2xl text-primary mx-1'/>
                                            </a>
                                        }
                                        {member?.data?.summery?.phone && 
                                            <a 
                                                href={`https://wa.me/${member?.data?.summery?.phone}`} 
                                                target="_blank" 
                                                rel='noreferrer'
                                            >
                                                <PhoneEnabledIcon className='text-2xl text-primary mx-1'/>
                                            </a>
                                        }
                                    </div>
                                    <p className='text-sm text-center text-opacity-50 lg:w-1/2'>{member?.data?.summery?.summery}</p>
                                    {/* <a 
                                        href={member?.data?.summery?.resumeFile} 
                                        target="_blank" 
                                        rel='noreferrer'
                                        className='text-sm text-center text-primary hover:text-white px-5 py-2 mt-5 border-[1px] border-primary hover:bg-primary rounded-3xl'
                                    >Download My Resume</a> */}
                                </div>
                                {/* Work Experience */}
                                {member?.data?.WorkExData?.length ? 
                                    <div className='flex flex-col w-full mt-20'>
                                        <h2 className='text-2xl text-center font-bold my-5'>Work Experience</h2>
                                        <div className='flex flex-col w-full'>
                                            {member?.data?.WorkExData.map((item,index) => 
                                                <div key={index} className='flex w-full p-5 my-2 shadow-first rounded-3xl overflow-hidden'>
                                                    <div>
                                                        <div className='w-20 h-20 rounded-full overflow-hidden'>
                                                            <Image 
                                                                className='w-full h-full object-cover'
                                                                src={item.companyLogo} 
                                                                alt={item.company}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='w-full ml-5'>
                                                        <h4 className='text-xl font-bold'>{item.position}</h4>
                                                        <h5>
                                                            <a 
                                                                href={item.companyLink} 
                                                                target="_blank" 
                                                                rel="noreferrer"
                                                                className='text-base font-semibold underline'
                                                            >{item.company}</a>
                                                            <span className='text-sm text-opacity-50'> - {item.kind}</span>
                                                        </h5>
                                                        <h6 className='text-sm'>{item.date}</h6>
                                                        <p className='text-xs text-opacity-40'>{item.description}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                :null}
                                {/* My Skills */}
                                {member?.data?.SkillsData?.length ?
                                    <div className='flex flex-col w-full mt-20'>
                                        <h2 className='text-2xl text-center font-bold my-5'>My Skills</h2>
                                        <div className='flex flex-wrap items-center justify-center w-full'>
                                            {member?.data?.SkillsData.map(item =>  
                                                <div key={item.name} className='flex flex-col items-center p-4 m-5 rounded-3xl shadow-first'>
                                                    <div className='w-20 h-20'>
                                                        <Image 
                                                            src={item.image} 
                                                            alt={item.name}
                                                            className='w-full h-full object-cover'
                                                        />
                                                    </div>
                                                    <h4 className='text-sm'>{item.name}</h4>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                :null}

                                {/* My Projects */}
                                {member?.data?.ProjectsData?.length ?
                                    <div className='flex flex-col items-center w-full mt-20'>
                                        <h2 className='text-2xl text-center font-bold my-5'>My Projects</h2>
                                        <div className='flex flex-col w-full'>
                                            {member?.data?.ProjectsData.map((item) => (
                                                <div key={item.name} className='flex flex-col lg:flex-row w-full p-5 my-2 shadow-first rounded-3xl overflow-hidden'>
                                                    <div>
                                                        <div className='w-full h-40 sm:w-40 sm:h-20 border-[2px] border-primary rounded-3xl overflow-hidden'>
                                                            <Image src={item.image} alt={item.name} className='w-full h-full object-cover'/>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col mt-5 lg:ml-5 lg:mt-0'>
                                                        <h4 className='text-xl font-bold'>{item.name}</h4>
                                                        <p className='text-sm text-opacity-50'>
                                                            {item?.description 
                                                                ? item.description
                                                                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo consequat"
                                                            }
                                                        </p>
                                                        <div className='flex items-center mt-1'>
                                                            {item?.link ?
                                                                <a 
                                                                    href={item.link} 
                                                                    target="_blank" 
                                                                    rel="noreferrer"
                                                                    className="text-center text-sm text-white px-5 py-3 mr-1 bg-primary rounded-3xl"
                                                                >
                                                                    View
                                                                </a>
                                                            :null}
                                                            {item.source ? (
                                                                <a 
                                                                    href={item.source} 
                                                                    target="_blank" 
                                                                    rel="noreferrer"
                                                                    className="text-center text-sm text-white px-5 py-3 bg-primary rounded-3xl"
                                                                >
                                                                    Source
                                                                </a>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                : null}

                                {/* Education */}
                                {member?.data?.EducationData.length  ?
                                    <div className='flex flex-col items-center w-full mt-20'>
                                        <h2 className='text-2xl text-center font-bold my-5'>Education</h2>
                                        <div>
                                            {member?.data?.EducationData.map((item,index) => 
                                                <div key={index} className='flex items-center p-5 my-2 shadow-first rounded-3xl overflow-hidden'>
                                                    <div>
                                                        <div className='w-20 h-20 rounded-full overflow-hidden'>
                                                            <Image 
                                                                src={item.logo} 
                                                                alt="item.institution"
                                                                className='w-full h-full object-cover'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col ml-5'>
                                                        <h5 className='text-base font-bold'>{item.institution}<span> ({item.date})</span></h5>
                                                        <h6 className='text-sm'>{item.degree} - {item.field}</h6>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                : null}
                            </div>
                        :
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <p className="text-xl text-red-400 font-medium mt-2">{member.error}</p>
                            </div>
                        }
                </div>
            </div>
        </div>
    );
};