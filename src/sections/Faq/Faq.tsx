import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@app/components/ui/accordion';
import React from 'react';

const data = [
  {
    title: 'What is Double Finance?',
    conent: 'Some restrictions and fees may apply.',
  },
  {
    title: 'How Double works?',
    conent: 'Some restrictions and fees may apply.',
  },
  {
    title: 'Is there a free trial coming soon?',
    conent: 'Some restrictions and fees may apply.',
  },
  {
    title: 'Is my data safe?',
    conent: 'Some restrictions and fees may apply.',
  },
];

const Faq = () => {
  return (
    <div className="container mx-auto flex justify-evenly py-[100px]">
      <div className="flex">
        <div className="font-reckless text-[44px] leading-[50px] text-[#163421]">
          Questions & <br />
          Answers
        </div>
      </div>
      <div className="flex w-[500px] flex-col gap-5">
        <Accordion type="single" collapsible>
          {data.map((elem, index) => (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{elem.title}</AccordionTrigger>
              <AccordionContent>{elem.conent}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export { Faq };
