'use client';
import React, { useState, useRef, useEffect } from 'react';
import { StartegyCard } from '../StartegyCard';

export interface ListItem {
  id: number;
  title: string;
  desc: string;
  holdings: number;
  risk: string;
  yield: { value: number; percentage: number };
  yearReturn: { value: number; percentage: number };
  pathData: string;
}

interface ScrollableListProps {
  items: Array<ListItem>;
}

const ScrollableList: React.FC<ScrollableListProps> = ({ items }) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollPosition(scrollPercentage);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="w-full">
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex space-x-4 overflow-x-auto scroll-smooth py-4"
      >
        {items.map((item) => (
          <StartegyCard {...item} key={item.id} />
        ))}
      </div>
      <div className="mx-auto mt-10 h-1 w-4/5 max-w-[800px] overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full bg-[#5DCA7B] transition-all duration-300 ease-out"
          style={{ width: `${scrollPosition}%` }}
        ></div>
      </div>
    </div>
  );
};

export { ScrollableList };
