import React, { ReactNode } from 'react';

interface SectionsTitleProps {
  title: ReactNode;
  description?: string;
  titleStyle?: string;
  containerStyle?: string;
  descriptionStyle?: string;
}

const SectionsTitle: React.FC<SectionsTitleProps> = ({
  description,
  title,
  titleStyle,
  containerStyle,
  descriptionStyle,
}) => {
  return (
    <div
      className={`mb-[40px] flex flex-col gap-4 text-center ${containerStyle}`}
    >
      <div
        className={`text-center font-reckless text-responsive-section-title font-normal text-[#163421] ${titleStyle}`}
      >
        {title}
      </div>
      {!!description && (
        <div
          className={`mx-auto max-w-[450px] font-inter text-base font-normal text-[#7B7E7D] ${descriptionStyle}`}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export { SectionsTitle };
