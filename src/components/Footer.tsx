import React from "react";
import FooterSection from "./FooterSection";

const footerData = [
  {
    title: "Getting Started",
    items: [
      "Installation",
      "Editor Setup",
      "Using with Preprocessors",
      "Optimizing for Productions",
      "Browser Support",
      "Upgrade Guide",
    ],
  },
  {
    title: "Core Concepts",
    items: [
      "Utility-First Fundamentals",
      "Handling Hover, Focus, and Other States",
      "Responsive Design",
      "Dark Mode",
      "Reusing Styles",
      "Adding Custom Styles",
      "Functions & Directives",
    ],
  },
  {
    title: "Customization",
    items: [
      "Configuration",
      "Content Configuration",
      "Customizing Screens",
      "Customizing Colors",
      "Customizing Spacing",
      "Plugins",
      "Presets",
    ],
  },
  {
    title: "Community",
    items: ["Github", "Discord", "Twitter", "Youtube"],
  },
];

const Footer: React.FC = () => {
  return (
    <div className="grid gap-y-6 lg:gap-y-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10 gap-x-6">
      {footerData.map((section, index) => (
        <FooterSection key={index} title={section.title} items={section.items} />
      ))}
    </div>
  );
};

export default Footer;
