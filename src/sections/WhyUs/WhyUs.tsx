import React from 'react';

import { SectionsTitle } from '@app/components/SectionsTitle';
import { SectionWrapper } from '@app/components/SectionWrapper';
import { WhyCard } from '@app/components/WhyCard';

const data = [
  {
    id: '0',
    title: 'Custom Direct Indexing',
    image: '/whyus/Block 1.png',
    content:
      'Direct indexing into the component pieces of popular ETFs like SPY or QQQ. We take it a step further by letting you deeply customize your exposure by sector or factor and let you combine Strategies in one account.',
  },
  {
    id: '1',
    title: 'Tax Loss Harvest like a Pro',
    image: '/whyus/Block 2.png',
    content:
      'By direct indexing, the number of opportunities to harvest losses goes up considerably compared to an ETF based strategy. Our portfolio optimizer is built to make you more money.',
  },
  {
    id: '2',
    title: 'No AUM Fees',
    image: '/whyus/Block 3.png',
    content:
      'Unlike most financial advisor and Robo advisors out there, Double doesn’t charge AUM fees. That means more money in your pocket.',
  },
];

const WhyUs = () => {
  return (
    <div className="mx-auto flex max-w-[1000px] flex-col gap-12">
      <SectionWrapper>
        <SectionsTitle title="Why People Love Double" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.map((elem) => (
            <WhyCard key={elem.id} {...elem} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export { WhyUs };
