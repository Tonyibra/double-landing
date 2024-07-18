import { Heading } from '@app/components/Heading';
import { SectionsTitle } from '@app/components/SectionsTitle';
import { Button } from '@app/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Message = () => {
  return (
    <div>
      <div className="message-container flex flex-col items-center justify-center pt-[100px]">
        <div className="relative mx-auto mb-[100px] flex w-full flex-col items-center justify-center gap-8 after:absolute after:bottom-[-400px] after:right-0 after:z-10 after:h-[400px] after:w-[200px] after:bg-[#163421] after:content-['']">
          <div className="message-btn mx-auto w-[200px] px-5 py-2 font-inter">
            <div className="text-center text-xs font-semibold text-white">
              Message from our CEO
            </div>
          </div>
          <div className="flex gap-16">
            <div className="relative h-[148px] w-[148px] overflow-hidden">
              <Image
                src={'/ceo.png'}
                alt="JJ Maxwell"
                fill
                className="rounded-[12px] object-contain"
              />
            </div>
            <div className="flex w-[470px] flex-col gap-6">
              <div className="font-reckless text-responsive-section-title leading-[50px] -tracking-[2.2px] text-white">
                “Double is building powerful tools to manage your wealth. ”
              </div>
              <div className="flex flex-col font-inter text-white">
                <div className="text-sm font-semibold">— JJ Maxwell</div>
                <div className="text-sm font-normal">
                  Founder of Double Finance
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white">
          <div className="smarter-container relative z-30 w-full py-[100px]">
            <SectionsTitle
              titleStyle="!leading-[72px] !text-[72px] text-appBlack"
              description="Some restrictions and fees may apply."
              descriptionStyle="!text-[#163421]"
              title={
                <>
                  A <span className="font-medium">smarter</span>
                  <br /> investing account.
                </>
              }
            />
            <div className="flex items-center justify-center">
              <Button className="h-[48px] w-[160px] bg-white">Apply</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Message };
