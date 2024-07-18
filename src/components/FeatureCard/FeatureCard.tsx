import { cn } from '@app/lib/utils';
import Image from 'next/image';
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  additionalInfo?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  description,
  title,
  additionalInfo,
}) => {
  return (
    <div
      className={cn('flex flex-col gap-2 border-r border-[#DEDEE3] px-6', {
        'border-0': title === "We're technologies not bankers",
      })}
    >
      <div className="flex flex-col gap-8">
        <Image
          src={'/shield-check.svg'}
          alt="shield-check"
          height={48}
          width={48}
          className="object-contain"
        />
        <h3 className="max-w-[310px] font-reckless text-2xl font-normal text-appBlack">
          {title}
        </h3>
      </div>
      <div className="flex flex-col gap-6 font-inter text-sm text-[#7B7E7D]">
        <p>{description}</p>
        {additionalInfo && <p className="">{additionalInfo}</p>}
      </div>
    </div>
  );
};

export { FeatureCard };
