import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  return <div className="py-[80px]">{children}</div>;
};

export { SectionWrapper };
