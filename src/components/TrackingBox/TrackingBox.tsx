import React from 'react';

import { Avatar, AvatarImage } from '../ui/avatar';
import Image from 'next/image';

interface TrackingBoxProps {
  name: string;
  from: string;
  to: string;
  logos: string[];
}

const TrackingBox: React.FC<TrackingBoxProps> = ({ from, logos, name, to }) => {
  return (
    <div className="flex flex-col rounded-[12px] border border-[#dedee3] bg-white px-5 py-[18px]">
      <div className="flex flex-col gap-2 font-inter">
        <div className="flex flex-col gap-[2px]">
          <div className="text-base font-semibold">{name}</div>
          <div className="flex items-center gap-1">
            <div className="text-sm font-normal">{from}</div>
            <div className="text-sm text-[#7B7E7D]">{'->'}</div>
            <div className="text-sm font-semibold">{to}</div>
          </div>
        </div>
        <div className="*:ring- flex -space-x-3 py-1">
          {logos.map((elem) => (
            <div>
              <Image
                alt={name}
                height={32}
                width={32}
                className="rounded-full object-cover"
                src={`/logos/${elem}.png`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { TrackingBox };
