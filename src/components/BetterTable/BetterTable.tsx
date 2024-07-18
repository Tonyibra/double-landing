import React from 'react';
import Image from 'next/image';

import { cn } from '@app/lib/utils';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const data = [
  {
    feature: 'Build a Truly Custom Direct Indexed Portfolio',
    desc: 'Select from 10s of popular starting points',
    double: true,
    m1Finance: true,
    wealthfront: true,
  },
  {
    feature: 'Daily tax loss harvesting of individual stocks',
    double: true,
    m1Finance: true,
    wealthfront: true,
  },
  {
    feature: 'Customize your index by adding or removing stocks and sectors',
    double: true,
    m1Finance: true,
    wealthfront: true,
  },
  {
    subHeader: 'Stocks and ETF’s',
    feature: 'Automated portfolio rebalancing',
    desc: 'No subscription fees',
    double: true,
    m1Finance: true,
    wealthfront: true,
  },
  {
    feature: 'Dollar Cost Average into and between Strategies',
    double: true,
    m1Finance: true,
    wealthfront: false,
  },
  {
    feature: 'Invest in your own Custom Collections',
    desc: 'Collections',
    double: true,
    m1Finance: false,
    wealthfront: false,
  },
  {
    feature: "Doesn't charge AUM Fees",
    desc: 'Other fees may apply',
    double: true,
    m1Finance: false,
    wealthfront: false,
  },
];

const BetterTable = () => {
  return (
    <div className="why-table-container mx-auto flex w-full max-w-[1000px] flex-col px-[2px] pb-[2px]">
      <div className="py-2 text-center font-inter text-xs font-semibold text-[#5DCA7B]">
        Opening account with Double is free for everyone!
      </div>
      <div
        className="why-table-container flex flex-1 flex-col"
        style={{
          background: 'white',
        }}
      >
        <Table className="mt-[6px]">
          <TableHeader>
            <TableRow
              className="flex items-center p-0"
              style={{
                borderBottomWidth: 0,
              }}
            >
              <TableHead className="w-[350px] p-5 px-7">
                <div className="font-inter text-xl font-semibold text-appBlack">
                  Features
                </div>
              </TableHead>
              <TableHead className="flex flex-1 items-center justify-center rounded-t-[8px] bg-[#5DCA7B]">
                <Image
                  src={'/white-logo.svg'}
                  alt="double-logo"
                  width={104}
                  height={17}
                  className="object-contain"
                />
              </TableHead>
              <TableHead className="flex flex-1 items-center justify-center rounded-t-[8px] bg-[white]">
                <Image
                  src={'/financeM1.svg'}
                  alt="finance-m1-logo"
                  width={104}
                  height={17}
                  className="object-contain"
                />
              </TableHead>
              <TableHead className="flex flex-1 items-center justify-center rounded-t-[8px] bg-[white]">
                <Image
                  src={'/wealthfront.svg'}
                  alt="wealthfront-logo"
                  width={104}
                  height={17}
                  className="object-contain"
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                className="flex p-0"
                key={index}
                style={{
                  borderBottom: '1px solid rgba(113, 113, 113, 0.1)',
                }}
              >
                <TableCell
                  className={cn(
                    'min-h-[65px] w-[350px] p-0 py-3 pl-8 font-inter text-sm font-medium',
                    {
                      'py-7': !!row.subHeader,
                    },
                  )}
                >
                  <div className="flex w-[275px] flex-1 flex-col gap-3 font-inter text-appBlack">
                    <div>
                      {!!row.subHeader && (
                        <div className="text-base font-semibold">
                          {row.subHeader}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div>
                        <div className="text-sm font-normal">{row.feature}</div>
                      </div>
                      {!!row.desc && (
                        <div className="text-[10px] font-normal text-[#7B7E7D]">
                          {row.desc}
                        </div>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="flex min-h-[65px] flex-1 items-center justify-center bg-[#5DCA7B] p-0 text-center">
                  {row.double ? (
                    <div>
                      <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white">
                        <Image
                          alt="check"
                          height={14}
                          width={14}
                          src={'/check.svg'}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      alt="dash"
                      height={14}
                      width={14}
                      src={'/dash.svg'}
                      className="object-contain"
                    />
                  )}
                </TableCell>
                <TableCell className="flex min-h-[65px] flex-1 items-center justify-center p-0 text-center">
                  {row.m1Finance ? (
                    <div>
                      <Image
                        alt="check"
                        height={14}
                        width={14}
                        src={'/grey-check.svg'}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <Image
                      alt="dash"
                      height={14}
                      width={14}
                      src={'/dash.svg'}
                      className="object-contain"
                    />
                  )}
                </TableCell>
                <TableCell className="flex min-h-[65px] flex-1 items-center justify-center p-0 text-center">
                  {row.wealthfront ? (
                    <div>
                      <Image
                        alt="check"
                        height={14}
                        width={14}
                        src={'/grey-check.svg'}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <Image
                      alt="dash"
                      height={14}
                      width={14}
                      src={'/dash.svg'}
                      className="object-contain"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export { BetterTable };
