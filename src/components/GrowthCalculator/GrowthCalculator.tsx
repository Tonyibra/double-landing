'use client';
import React, { useEffect, useState } from 'react';

import { AppSlider } from '../AppSlider';
import numeral from 'numeral';
const GrowthCalculator = () => {
  const [portfolioValue, setPortfolioValue] = useState(500); // Default min value
  const [timeframe, setTimeframe] = useState(1); // Default min value
  const [calculatedValue, setCalculatedValue] = useState(0);

  useEffect(() => {
    // Calculate the portfolio value based on the formula
    const newValue = portfolioValue * Math.pow(1.07, timeframe);
    setCalculatedValue(+newValue.toFixed(2));
  }, [portfolioValue, timeframe]);

  return (
    <div className="calculator-container flex w-[1100px] flex-1 bg-white">
      <div className="flex flex-1 flex-col gap-[57px] p-[45px]">
        <AppSlider
          prefix="$"
          min={500}
          step={500}
          max={1000000}
          onValueChange={(value) => setPortfolioValue(value[0])}
          label="Portfolio value"
        />
        <AppSlider
          suffix="Years"
          min={1}
          step={1}
          max={25}
          onValueChange={(value) => setTimeframe(value[0])}
          label="Timeframe"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="my-3 mr-3 flex flex-1 flex-col gap-3 rounded-[8px] bg-[#F7F9F9] p-[45px]">
          <div className="font-inter text-sm text-appBlack">
            <span className="font-semibold">In {timeframe} years</span>, your
            portfolio <span className="font-semibold">with Double</span> could
            be worth
          </div>
          <div className="result-container p-4 text-center">
            <div className="font-reckless text-6xl font-medium text-[#5DCA7B]">
              ${numeral(calculatedValue).format('0,0')}
            </div>
          </div>
          <div className="mb-2 flex flex-col gap-3 border-b border-b-[#DEDEE3] pb-5 font-inter">
            <div className="text-xs text-appBlack">Comparing with others</div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-[#7B7E7D]">
                Wealthfront
              </div>
              <div className="text-xs font-semibold text-[#7B7E7D]">
                ${numeral((calculatedValue * 0.71).toFixed(2)).format('0,0')}{' '}
                {/* Example comparison value */}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-[#7B7E7D]">
                M1 Finance
              </div>
              <div className="text-xs font-semibold text-[#7B7E7D]">
                ${numeral((calculatedValue * 0.68).toFixed(2)).format('0,0')}{' '}
                {/* Example comparison value */}
              </div>
            </div>
          </div>
          <div>
            <p className="font-inter text-[10px] font-normal text-[#7B7E7D]">
              Daily tax loss harvesting can capture up to $19 in incremental tax
              savings for every $100 deposited and tack on an incremental 2% per
              year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GrowthCalculator };
