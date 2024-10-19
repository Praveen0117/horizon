"use client"; // This ensures the component is treated as a Client Component

import React from 'react';
import CountUp from 'react-countup';

const AnimatedCount = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
      <CountUp
        decimal=","
        duration={1}
        decimals={2}
        prefix="₹"
        end={amount}
      />
    </div>
  );
};

export default AnimatedCount;
