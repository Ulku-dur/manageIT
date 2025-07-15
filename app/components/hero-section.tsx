
 import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  badgeText?: string;
  announcementText?: string;
  mainHeading?: string;
  subText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const HeroSection1: React.FC<HeroSectionProps> = ({
  badgeText,
  announcementText,
  mainHeading = "Visualize Your Data Like Never Before",
  subText = "Unlock powerful insights with our intuitive data visualization tools. Start your free trial today!",
  primaryButtonText = "Start Free Trial",
  secondaryButtonText = "Explore Features",
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 text-center">
      {/* Optional badge and announcement */}
      {(badgeText || announcementText) && (
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1">
            {badgeText && (
              <span className="mr-2 rounded-sm bg-primary px-2 py-0.5 text-xs font-semibold text-white">
                {badgeText}
              </span>
            )}
            {announcementText && (
              <span className="text-sm font-medium">{announcementText}</span>
            )}
            {announcementText && <ArrowRight className="ml-2 h-4 w-4" />}
          </div>
        </div>
      )}

      {/* Main heading */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 max-w-4xl mx-auto">
        {mainHeading}
      </h1>

      {/* Subtext */}
      <div className="max-w-3xl mx-auto mb-12 text-lg text-gray-600">
        <p className="flex flex-wrap justify-center items-center gap-2">
          {subText}
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button className=" px-8 py-6 text-base" onClick={onPrimaryButtonClick}>
          {primaryButtonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        {secondaryButtonText && (
          <Button
            variant="ghost"
            className="text-base h-12"
            onClick={onSecondaryButtonClick}
          >
            {secondaryButtonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeroSection1;

