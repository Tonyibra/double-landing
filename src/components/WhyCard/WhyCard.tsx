import React from 'react';
import Image from 'next/image';

interface WhyCardProps {
  image: string;
  title: string;
  content: string;
}

const WhyCard: React.FC<WhyCardProps> = ({ content, image, title }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[485px] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="mb-4 rounded object-contain"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-reckless text-xl font-medium text-appBlack">
          {title}
        </h2>
        <p className="font-inter text-sm font-normal text-[#7B7E7D]">
          {content}
        </p>
      </div>
    </div>
  );
};

export { WhyCard };
