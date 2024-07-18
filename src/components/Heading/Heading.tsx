import React from 'react';

const Heading = () => {
  return (
    <div
      className="text-appBlack text-responsive-title font-reckless text-center"
      style={{
        lineHeight: 'clamp(2.5rem, 5vw, 4.5rem)',
        letterSpacing: 'clamp(-1.5px, -0.15vw, -2.16px)',
      }}
    >
      <span className="font-normal">A </span>
      <span className="font-medium">smarter</span>
      <span className="font-normal">
        {' '}
        <br />
        investment account.
      </span>
    </div>
  );
};

export { Heading };
