import React from 'react';

import { GrowthCalculator } from '@app/components/GrowthCalculator';
import { SectionsTitle } from '@app/components/SectionsTitle';
import { Button } from '@app/components/ui/button';

const Calculator = () => {
  return (
    <div
      className="mb-[100px] h-screen bg-calc-bg bg-cover bg-no-repeat pt-[100px]"
      style={{
        borderBottomLeftRadius: 168,
        overflow: 'hidden',
      }}
    >
      <SectionsTitle
        titleStyle="text-white max-w-[1000px] mx-auto"
        title="How much more could your portfolio grow with Tax Loss Harvesting and a 0% AUM Fee?"
      />
      <div className="flex flex-col items-center justify-center gap-12">
        <GrowthCalculator />
        <Button className="mx-auto h-[56px] w-[140px]">Get Started</Button>
      </div>
    </div>
  );
};

export { Calculator };
