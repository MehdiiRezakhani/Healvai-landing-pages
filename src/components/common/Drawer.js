import React, { useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

//data
import { socialList } from '@/data/aboutUs/commonData';

//assets
import InfoIcon from '@mui/icons-material/Info';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export default function Drawer() {
  const [entry, setEntry] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setEntry({ ...entry, [anchor]: open });
  };
  const menuList = [
    {title:"Home", link:'', name:'home', icon:<HomeIcon/>},
    {title:"About Us", link:'about', name:'about', icon:<InfoIcon/>},
    {title:"Support Us", link:'support', name:'support', icon:<CardGiftcardIcon/>},
    {title:"Sponsors", link:'sponsors', name:'sponsors', icon:<AccountBalanceIcon/>},
    {title:"FAQ", link:'faq', name:'faq', icon:<QuestionMarkIcon/> },
  ];
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='flex flex-col justify-between w-full h-screen relative bg-light dark:bg-black p-5 z-30'>
        <a 
            href={"https://app.healvai.com"} 
            target="_blank"
            rel='noreferrer'
            className='text-sm text-center text-white font-bold p-2 bg-primary rounded-lg'
        >
            <bdi>{"Get Started Free"}</bdi>
        </a>
        <div className='flex flex-col w-full h-full mt-10'>
          {menuList.map((item, index) => (
            <Link 
              key={index} 
              href={`/${item.link}`}
              passHref
              className='flex items-center my-2 hover:scale-[1.05]'
            >
              <div className='text-xl text-primary mr-2'>
                {item?.icon}
              </div>
              <h4 className='text-sm text-primary font-bold opacity-80'>
                <bdi>{(item.title)}</bdi>
              </h4>
            </Link>
          ))}
        </div>
            <div className='flex justify-center items-center my-1'>
                {socialList?.Linkedin && 
                    <a 
                        href={`https://linkedin.com/company/${socialList?.Linkedin}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <LinkedInIcon className='text-xl text-primary mx-1'/>
                    </a>
                }
                {socialList?.Instagram && 
                    <a 
                        href={`https://instagram.com/${socialList?.Instagram}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <InstagramIcon className='text-xl text-primary mx-1'/>
                    </a>
                }
                {socialList?.Twitter && 
                    <a 
                        href={`https://twitter.com/${socialList?.Twitter}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <TwitterIcon className='text-xl text-primary mx-1'/>
                    </a>
                }
                {socialList?.Telegram && 
                    <a 
                        href={`https://t.me/${socialList?.Telegram}`} 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <TelegramIcon className='text-xl text-primary mx-1'/>
                    </a>
                }
            </div>
      </div>
    </Box>
  );

  return (
    <div className='w-full h-full'>
        <React.Fragment key={'right'}>
          <button onClick={toggleDrawer('right', true)} className='w-full h-full'>
            <MenuIcon className="text-primary"/>
          </button>
          <SwipeableDrawer
            anchor={'right'}
            open={entry['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}