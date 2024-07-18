'use client';
import React from 'react';
interface ListButtonProps {
  href: string;
  children: React.ReactNode;
}
const ListButton: React.FC<ListButtonProps> = ({ children, href }) => {
  return (
    <div className="cool-link inline-block cursor-pointer text-xs font-semibold tracking-tight text-appBlack no-underline">
      {children}
    </div>
  );
};

export { ListButton };
