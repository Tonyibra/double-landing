import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedChartProps {
  pathData: string;
  width?: number;
  height?: number;
  strokeColor?: string;
  animationDuration?: number;
  threshold?: number;
}

const AnimatedChart: React.FC<AnimatedChartProps> = ({
  pathData,
  width = 150,
  height = 29,
  strokeColor = '#5DCA7B',
  animationDuration = 2,
  threshold = 0.1,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };

  return (
    <div ref={ref}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.path
          d={pathData}
          stroke={strokeColor}
          variants={pathVariants}
          transition={{ duration: animationDuration, ease: 'easeInOut' }}
        />
      </motion.svg>
    </div>
  );
};

export { AnimatedChart };
