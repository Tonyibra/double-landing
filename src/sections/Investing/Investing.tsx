import React from 'react';
import Image from 'next/image';

import { SectionsTitle } from '@app/components/SectionsTitle';
import { InfiniteMovingCards } from '@app/components/ui/infinte-moving-card';

const trackingData = [
  {
    name: 'My Awesome Strategy ...',
    from: '22.8%',
    to: '31%',
    logos: ['a', 'ford', 'amc', 'airbnb', 'tesla', 'amazon', 'disney'],
  },
  {
    name: 'Jess’s Best Collection',
    from: '27.4%',
    to: '36%',
    logos: ['a', 'ford', 'airbnb', 'amc', 'disney', 'airbnb', 'amazon'],
  },
  {
    name: 'Let’s Make some $$$',
    from: '12%',
    to: '15%',
    logos: ['a', 'ford', 'airbnb', 'amazon', 'disney', 'ford', 'a', 'amc'],
  },
];

const Investing = () => {
  return (
    <div className="mx-auto max-w-[1000px]">
      <SectionsTitle
        title={
          <>
            Sophisticated investing{' '}
            <span className="font-medium">made simple</span>
          </>
        }
      />
      <div className="flex flex-col">
        <div className="bg-investing-bg-1 relative flex h-[390px] flex-1 overflow-hidden bg-cover bg-no-repeat pl-[70px]">
          <div className="flex flex-[0.4] flex-col gap-3 py-[90px]">
            <div className="font-reckless text-3xl text-appBlack">
              Double is always working for you
            </div>
            <div className="font-inter text-base text-[#7B7E7D]">
              We know you can&apos;t check your portfolio every day. We monitor
              stock splits and dividends and analyzing the drift in your
              portfolio. If there are trades that will improve your after xtax
              performance, we&apos;ll make them.
            </div>
          </div>
          <div className="relative flex-[0.6] flex-col items-end justify-end overflow-hidden pt-11">
            <div>
              <div className="relative h-[370px] w-full">
                <Image
                  src={'/investing-pic-1.png'}
                  fill
                  className="relative z-10 object-contain"
                  alt="monitor-stock"
                />
                <div className="absolute bottom-[-50px] right-0 z-[10] h-[150px] w-[760px] rounded-[44px] bg-[#F3F5EB] blur-[44px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="dca-container pt-[50px]">
          <SectionsTitle
            containerStyle="gap-3"
            title="Dollar Cost Average Between Strategies"
            description="Double makes it dead simple to move money between various active or passive strategies. This gives you deep control and lets you spread out risk"
          />
          <div className="relative h-[270px] w-full">
            <Image
              src={'/allocation-pic.png'}
              fill
              className="object-contain"
              alt="portfolio-allocation"
            />
          </div>
        </div>
        <div className="bg-track-idea-bg mb-[100px] bg-cover bg-no-repeat py-[50px]">
          <div className="flex items-center justify-center px-[70px]">
            <SectionsTitle
              descriptionStyle="text-left mx-0  w-full"
              containerStyle="gap-3 text-left items-start"
              title="Keep Track of Ideas with Collections"
              description="Build your own collections of your favorite stocks or ETFs and allocate a small or large amount of your portfolio against them. Double will help you stay balance"
            />
          </div>
          <InfiniteMovingCards items={trackingData} />
        </div>
      </div>
    </div>
  );
};

export { Investing };
