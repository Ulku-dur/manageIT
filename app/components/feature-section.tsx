

"use client"

import React from "react";

import { ListChecks, ChartBar, Workflow, AppWindow } from "lucide-react"; // More icons
import { Badge } from "@/components/ui/badge";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Revolutionary Projectview",
    description:
      "Plan and structure work how you want. Quickly organizing tasks.",
    icon: <ListChecks />,
  },
  {
    title: "App Integrations",
    description:
      "Bring all your tools and data together. Also join with hundreds of other apps.",
    icon: <AppWindow />, // Example of a custom SVG icon
  },
  {
    title: "Data Reporting",
    description:
      "Get real time insight into progress and allows teams to track their work habits.",
    icon: <ChartBar />,
  },
  {
    title: "Workflow Builder",
    description:
      "Automated processes to coordinate your teams and increase communication.",
    icon: <Workflow />,
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-center p-6     text-center ">
      <div
        className="w-20 h-20 text-3xl flex items-center justify-center rounded-md 
      bg-primary/5 text-primary mb-4"
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

function FeatureSection1({
featureBadge = "Explore Our Features",
  title = "Unlock Powerful Capabilities",
  description = "Discover how our features can help you achieve your goals and streamline your workflow.",
  featuresArray = features,
}: {
  featureBadge?: string;
  title?: string;
  description?: string;
  featuresArray?: Feature[];
}) {
  return (
    <div className="py-12 ">
      <div className="max-w-7xl flex justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Badge variant={"secondary"}>{featureBadge}</Badge>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-lg text-gray-600">{description}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresArray.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection1;

