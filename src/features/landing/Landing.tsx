import React from 'react';

import { Calculator, Hero, Message, SecuredMoney, WhyUs } from '@app/sections';
import { Investing } from '@app/sections/Investing';
import { WhyBetter } from '@app/sections/WhyBetter';

import { Explore } from '@app/sections/Explore';
import { Testimonials } from '@app/sections/Testimonials';
import { Faq } from '@app/sections/Faq';

const Landing = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <WhyBetter />
      <Calculator />
      <Investing />
      <SecuredMoney />
      <Explore />
      <Testimonials />
      <Message />
      <Faq />
    </>
  );
};

export { Landing };
