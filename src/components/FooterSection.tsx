import React from "react";

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="font-semibold dark:text-white">{title}</h1>
      <ul className="flex flex-col gap-y-2 text-slate-400">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
