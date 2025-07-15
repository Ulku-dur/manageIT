import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Step {
  number: number;
  title: string;
  description: string;
  color?: string;
}

interface OnboardingStepsProps {
  badgeText?: string;
  mainHeadline?: string;
  imgUrl?: string;
  steps?: Step[];
  ctaText?: string;
  showcaseTitle?: string;
  showcaseValue?: string;
  showcaseSubtitle?: string;
  showcasePercentage?: number;
  showcaseIcon?: React.ReactNode;
  onCtaClick?: () => void;
}

export default function HowItWorks1({
  imgUrl = "/bolt_stack_image.png",
  badgeText = "How It Works",
  mainHeadline = "Three Easy Steps",
  steps = [
    {
      number: 1,
      title: "Connect your data",
      description:
        "Lorem ipsum dolor amet adipiscing or elit. Volutpat tempor mentum.",
    },
    {
      number: 2,
      title: "Customize your app",
      description:
        "Lorem ipsum dolor sit amet sectetur adipiscing elit. Volutpat tempor style & condimentum.",
    },
    {
      number: 3,
      title: "Share with a link",
      description:
        "Lorem ipsum dolor amet adipiscing Volutpat tempor with anyone.",
    },
  ],
  ctaText = "Start Today",
  onCtaClick = () => {},
}: OnboardingStepsProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto p-6  ">
      <div className="flex-1">
        <Badge variant={"secondary"}>{badgeText}</Badge>
        <h1 className="text-4xl font-bold mb-8  mt-10">{mainHeadline}</h1>

        <div className="space-y-8 mt-14 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start mt-8">
              <div
                className={` rounded-full border  w-7 h-7 p-6 flex justify-center items-center  
                    text-primary
                  font-semibold text-xl   text-center`}
              >
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-lg  ">{step.title}</h3>
                <p className="text-gray-500 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full ">
          <Button
            onClick={onCtaClick}
            className="mt-8  h-12  px-10 max-lg:mx-6   py-3 rounded-lg font-medium"
          >
            {ctaText}
          </Button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center max-lg:hidden">
        <Image
          src={imgUrl}
          alt={imgUrl.toString()}
          width={800}
          height={600}
          className="h-full rounded-md w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
