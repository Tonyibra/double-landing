import React from 'react';
import Image from 'next/image';

import { Button } from '../ui/button';
import { ListButton } from '../ListButton';

const navbarList = [
  {
    label: 'Mission',
    id: 'mission',
  },
  {
    label: 'Pricing',
    id: 'pricing',
  },
  {
    label: 'Blog',
    id: 'blog',
  },
  {
    label: 'Help',
    id: 'help',
  },
  {
    label: 'Contact',
    id: 'contact',
  },
];

const NavBar = () => {
  return (
    <nav className="bg-[#F5F5EB]">
      <div className="flex flex-row items-center justify-between px-responsive-x py-8">
        <div className="relative h-[19px] w-[117px]">
          <Image
            src={'/logo.svg'}
            fill
            alt="double_logo"
            className="object-contain"
          />
        </div>
        <ul className="flex items-center gap-8">
          {navbarList.map(({ id, label }) => (
            <ListButton>{label}</ListButton>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button className="w-full" variant={'outline'}>
            Sign In
          </Button>
          <Button className="w-full">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
