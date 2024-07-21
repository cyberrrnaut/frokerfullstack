import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Accordionui({ title, description, expanded, handleChange, panel }) {
  return (
    <div
      className='h-auto rounded-3xl'
      style={{
        boxShadow: expanded === panel ? '0px 4px 20px rgba(255, 165, 0, 0.5)' : '0px 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${panel}bh-content`}
          id={`${panel}bh-header`}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <h1 className='font-bold'>{title}</h1>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
