import React from 'react';
import Image from 'next/image';

import { cn } from '@app/lib/utils';

const data = [
  {
    id: '0',
    title: 'Double can be Trusted',
    content: 'We’re a SEC Registered Financial Advisor and a Fiduciary',
  },
  {
    id: '1',
    title: 'No commissions on trades',
    content: 'Zero commissions on trades',
  },
  {
    id: '2',
    title: 'Transparent pricing',
    content: 'Simple fixed monthly subscription.',
  },
];

const Perks = () => {
  return (
    <div className="border-t border-[#DEDEE3]">
      <div className="container flex items-center justify-center">
        {data.map((elem) => (
          <div
            className={cn(
              'flex flex-1 flex-col border-r border-[#DEDEE3] pl-6',
              {
                'border-r-0': elem.id === '2',
              },
            )}
            key={elem.id}
          >
            <div className="flex gap-3 pb-12 pt-9">
              <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white">
                <Image
                  alt="check"
                  height={14}
                  width={14}
                  src={'/check.svg'}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-inter text-base font-semibold text-appBlack">
                  Double can be Trusted
                </div>
                <div className="font-inter text-sm font-normal text-[#7B7E7D]">
                  {elem.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Perks };
