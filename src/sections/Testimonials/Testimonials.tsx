import { SectionsTitle } from '@app/components/SectionsTitle';
import { TestimonialCard } from '@app/components/TestimonialCard';
import React from 'react';

const data = [
  {
    content: `It feels like a waste of a meeting if Double isn't pulling together its summary to share knowledge with others.`,
    name: 'Jesse McCratney',
    position: 'CEO at Forum Inc.',
    image: '',
  },
  {
    content: `Gone are the days of frantically scribbling notes down mid sentence. An incredibly helpful tool.`,
    name: 'Jesse McCratney',
    position: 'CEO at Forum Inc.',
    image: '',
  },
  {
    content: `I literally haven’t taken a call without Double for months. It’s become indispensable in my workflow`,
    name: 'Jesse McCratney',
    position: 'CEO at Forum Inc.',
    image: '',
  },
];

const Testimonials = () => {
  return (
    <div className="py-[100px]">
      <div>
        <SectionsTitle
          title={
            <>
              Built for people with <br /> back-to-back meetings
            </>
          }
        />
        <div className="mx-auto flex max-w-[1000px] items-center justify-center space-x-4">
          {data.map((elem) => (
            <TestimonialCard {...elem} key={elem.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Testimonials };
