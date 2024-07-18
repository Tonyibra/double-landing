import React from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import initials from 'initials';

interface TestimonialCardProps {
  content: string;
  name: string;
  position: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  image,
  name,
  position,
}) => {
  return (
    <div className="flex flex-1 flex-col rounded-[16px] border border-[#DEDEE3] bg-white p-6">
      <div className="flex flex-col gap-8">
        <p className="font-inter text-lg text-appBlack">{content}</p>
        <div className="flex items-center gap-4">
          <Avatar className="flex items-center justify-center bg-[#E9EDE1]">
            <AvatarImage src={image} />
            <AvatarFallback className="bg-[#E9EDE1]">
              {initials(name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-[2px] font-inter">
            <div className="text-base font-semibold text-appBlack">{name}</div>
            <div className="text-gray1 text-sm font-normal">{position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TestimonialCard };
