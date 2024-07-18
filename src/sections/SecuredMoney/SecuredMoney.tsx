import { FeatureCard } from '@app/components/FeatureCard';
import { SectionsTitle } from '@app/components/SectionsTitle';
import { Button } from '@app/components/ui/button';
import React from 'react';

const SecuredMoney = () => {
  return (
    <div className="bg-[#F7F7F7] py-[80px]">
      <SectionsTitle
        title={
          <>
            Your money is{' '}
            <span className="font-reckless font-medium">safe and secured</span>
          </>
        }
        description="Safety & Privacy are at the core of what we do. "
      />
      <div className="mx-auto mb-[60px] max-w-[1000px] rounded-lg border border-[#DEDEE3] bg-white p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <FeatureCard
            title="You always own your Assets"
            description="Your funds are held in your name at Apex Clearing, one of the largest US Custodians holding over $114B in funds."
            additionalInfo="In the unlikely event that something happens to Double, your assets are safe."
          />
          <FeatureCard
            title="We're a SEC Registered Fiduciary"
            description="Double is a Registered Investment Advisor, meaning we are legally bound to do what is in your best interest."
          />
          <FeatureCard
            title="We're technologies not bankers"
            description="We hold your money with established financial institutions, so it's separate from our own."
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button className="h-14">Try Double Now</Button>
      </div>
    </div>
  );
};

export { SecuredMoney };
