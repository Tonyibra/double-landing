import React from 'react';

import { BetterTable } from '@app/components/BetterTable';
import { Perks } from '@app/components/Perks';
import { SectionsTitle } from '@app/components/SectionsTitle';

const WhyBetter = () => {
  return (
    <div className="z-10 min-h-screen bg-why-better-bg bg-cover bg-no-repeat pt-[100px]">
      <SectionsTitle
        title={
          <>
            Why <span className="font-medium">Double </span>is better than rest?
          </>
        }
        description="We let you Direct Index, Dollar Cost Average and Tax Loss Harvest a custom portfolio, all within one account."
      />
      <div className="flex flex-col gap-20">
        <BetterTable />
        <Perks />
      </div>
    </div>
  );
};

export { WhyBetter };
