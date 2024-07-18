import React from 'react';
import Image from 'next/image';

import { GetStarted } from '@app/components/GetStarted';

const Hero = () => {
  return (
    <div className="rounded-bl-[170px] bg-[#F5F5EB]">
      <div className="bg-hero-bg-1 min-h-screen bg-contain bg-no-repeat pb-11 pt-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="backedBy duration-[2000] flex w-fit animate-pulse items-center gap-2 rounded-full bg-white transition-all">
            <div className="relative h-[21px] w-[21px]">
              <Image src={'/y-vector.svg'} fill alt="Y Combinator" />
            </div>
            <div className="text-[10px] font-semibold text-[#7B7E7D]">
              Backed by <span className="text-[#F26625]">Y Combinator</span>
            </div>
          </div>
          <GetStarted />
          <div className="relative mx-auto max-w-[980px]">
            <Image
              alt="double-dashboard"
              src={'/hero-bg.png'}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={500}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
