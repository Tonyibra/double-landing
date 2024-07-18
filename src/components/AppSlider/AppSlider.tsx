'use client';
import React, { useCallback, useState } from 'react';
import Image from 'next/image';

import { SliderProps } from '@radix-ui/react-slider';

import { Slider } from '../ui/slider';

interface AppSliderProps extends SliderProps {
  label: string;
  suffix?: string;
  prefix?: string;
}

const AppSlider: React.FC<AppSliderProps> = ({
  label,
  suffix,
  prefix,
  onValueChange,
  ...rest
}) => {
  const [value, setValue] = useState<number[]>([rest.min || 0]);

  const handleSliderChange = useCallback(
    (value: number[]) => {
      setValue(value);
      if (onValueChange) {
        onValueChange(value);
      }
    },
    [onValueChange],
  );

  const handleDecrease = useCallback(() => {
    const newValue = Math.max(rest.min!, value[0] - rest.step!);
    handleSliderChange([newValue]);
  }, [rest.min, rest.step, value, handleSliderChange]);

  const handleIncrease = useCallback(() => {
    const newValue = Math.min(rest.max!, value[0] + rest.step!);
    handleSliderChange([newValue]);
  }, [rest.max, rest.step, value, handleSliderChange]);

  return (
    <div className="flex flex-col gap-4">
      <div className="font-inter text-base font-semibold text-appBlack">
        {label}
      </div>
      <div className="flex items-center gap-[6px]">
        <button
          onClick={handleDecrease}
          className="cursor-pointer rounded-full border border-[#eee] p-[2px]"
        >
          <Image
            alt="dash"
            height={14}
            width={14}
            src={'/dash.svg'}
            className="object-contain"
          />
        </button>
        <Slider
          {...rest}
          value={value}
          onValueChange={(val) => handleSliderChange(val)}
        />
        <button
          onClick={handleIncrease}
          className="cursor-pointer rounded-full border border-[#eee] p-[2px]"
        >
          <Image
            alt="plus"
            height={14}
            width={14}
            src={'/plus.svg'}
            className="object-contain"
          />
        </button>
      </div>
      <div className="font-reckless text-3xl font-medium text-appBlack">
        {`${prefix || ''} ${value[0].toLocaleString()} ${suffix || ''}`}
      </div>
    </div>
  );
};

export { AppSlider };
