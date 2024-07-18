import Image from 'next/image';
import React from 'react';
import { AnimatedChart } from '../AnimatedChart';
import { ListItem } from '../ScrollableList';
import { cn } from '@app/lib/utils';

const StartegyCard: React.FC<ListItem> = ({
  desc,
  holdings,
  pathData,
  risk,
  title,
  yearReturn,
}) => {
  const strokeColor = yearReturn.percentage < 1 ? '#7B7E7D' : '#5DCA7B';

  return (
    <div className="strategy-card flex min-w-[350px] flex-col">
      {/* header */}
      <div className="flex flex-col gap-2">
        <div className="min-h-[48px] px-6 pt-4 font-reckless text-xl font-medium text-appBlack">
          {title}
        </div>
        <div className="px-6 pb-4">
          <div className="text-gray1 font-inter text-sm font-normal">
            {desc}
          </div>
        </div>
        <div className="flex items-center justify-between px-6 pb-4 font-inter">
          <div className="flex flex-col gap-[2px]">
            <div className="text-xs text-[#949C99]">Top Sector</div>
            <div className="text-sm font-semibold text-appBlack">
              Food & Drink
            </div>
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="text-xs text-[#949C99]">TOP companies</div>
            <div className="*:ring- flex -space-x-3 py-1">
              {['tesla', 'airbnb', 'careers', 'lucio', 'meta', 'nvidea'].map(
                (elem) => (
                  <Image
                    key={elem}
                    src={`/logos/${elem}.png`}
                    height={24}
                    width={24}
                    alt={elem}
                    className="object-contain"
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="holdings-box flex items-center justify-between px-6 py-4">
        <div className="flex flex-1 flex-col">
          <div className="text-xs text-[#949C99]">Holdings</div>
          <div className="flex items-center gap-1">
            <Image
              alt="shield-check"
              src={'/shield-check.svg'}
              height={16}
              width={16}
              className="object-contain"
            />
            <div className="text-sm font-semibold text-appBlack">
              {holdings}
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="text-xs text-[#949C99]">Risk</div>
          <div className="text-sm font-semibold text-appBlack">{risk}</div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="text-xs text-[#949C99]">Yield</div>
          <div className="flex items-center gap-1 font-inter">
            <Image
              src={'/up-arrow.svg'}
              alt="arrow-up"
              height={12}
              width={12}
              className="object-contain"
            />
            <div className="flex items-center gap-1">
              <div className="text-xs font-semibold text-[#5DCA7B]">
                ${yearReturn.value}
              </div>
              <div className="text-xs font-normal text-[#5DCA7B]">
                ({yearReturn.percentage}%)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 pb-4 pt-3">
        <div className="bg-chart-bg flex flex-col bg-cover bg-no-repeat">
          <AnimatedChart strokeColor={strokeColor} pathData={pathData} />
        </div>
        <div className="flex flex-col">
          <div className="text-xs text-[#949C99]">Year Return</div>
          <div className="flex items-center gap-1">
            <div
              className={cn('text-xs font-semibold text-[#5DCA7B]', {
                'text-gray1': yearReturn.percentage < 1,
              })}
            >
              ${yearReturn.value}
            </div>
            <div
              className={cn('text-xs font-normal text-[#5DCA7B]', {
                'text-gray1': yearReturn.percentage < 1,
              })}
            >
              ({yearReturn.percentage}%)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { StartegyCard };
