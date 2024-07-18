import React from 'react';
import Image from 'next/image';

const sections = [
  {
    title: 'Get Started',
    items: ['Mission', 'Pricing', 'Contact'],
  },
  {
    title: 'Comparisons',
    items: [
      'Double vs. M1 Finance',
      'Double vs. Wealthfront',
      'Double vs. Vanguard',
    ],
  },
  {
    title: 'Learn',
    items: ['Blog', 'Help Center', 'Contact Us'],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col gap-16 bg-[#163421] py-[70px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex flex-1 flex-col gap-6">
            <Image
              src={'/footer-logo.svg'}
              height={19}
              width={117}
              alt="double-logo"
            />
            <div className="font-reckless text-2xl -tracking-[0.24px] text-white">
              A smarter investing account
            </div>
          </div>
        </div>
        <div className="mt-10 flex space-x-16 text-white">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="mb-4 font-inter text-xs font-semibold text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li className="font-inter text-sm text-[#949C99]" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-divider h-[1px] w-full" />
      <div className="container mx-auto flex items-center justify-between font-inter">
        <div className="flex items-center gap-6">
          <div className="text-xs font-normal leading-normal text-white opacity-50">
            Terms & Conditions
          </div>
          <div className="text-xs font-normal leading-normal text-white opacity-50">
            Privacy Policy
          </div>
        </div>
        <div className="text-xs font-normal leading-normal text-white opacity-50">
          © Double Finance, 2024
        </div>
      </div>
    </div>
  );
};

export { Footer };
