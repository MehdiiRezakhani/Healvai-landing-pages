import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage({list}) {
  return (
    <div className='flex flex-col gap-5'>
      {list?.map((item,index) => 
        <Accordion 
          key={index}
          className='p-4 bg-gray_100 border-[0px] last-of-type:border-[0px] first-of-type:border-[0px] rounded-2xl shadow-none'
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='text-primary'/>}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            className='text-base lg:text-lg text-gray_800 font-bold border-[0px] last-of-type:border-[0px] first-of-type:border-[0px]'
          >
            <bdi>{(item?.summary)}</bdi>
          </AccordionSummary>
          <AccordionDetails
            className='text-base lg:text-lg text-gray_600 font-medium border-[0px]'
          >
            {(item?.details)}
          </AccordionDetails>
          {item?.actions?.length ? 
            <AccordionActions className='border-[0px]'>
              <Button className='grayscale'>{t(item?.action?.[0]?.title)}</Button>
              <Button className="grayscale">{t(item?.action?.[1]?.title)}</Button>
            </AccordionActions>
          :null}
        </Accordion>
      )}
    </div>
  );
}
