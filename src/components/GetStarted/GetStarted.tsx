import React from 'react';

import { Heading } from '../Heading';
import { Button } from '../ui/button';

const GetStarted = () => {
  return (
    <div className="flex flex-col gap-4">
      <Heading />
      <div className="font-inter text-appBlack text-center text-xl font-normal">
        Double makes it dead simple to replace your <br /> Financial Advisor
      </div>
      <div className="mb-6 flex items-center justify-center gap-4">
        <Button className="h-[56px] px-6 py-3">Get Started</Button>
        <Button className="h-[56px] px-6 py-3" variant={'outline'}>
          Explore
        </Button>
      </div>
    </div>
  );
};

export { GetStarted };
