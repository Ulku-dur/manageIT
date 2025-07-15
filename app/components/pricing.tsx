"use client";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bolt, LucideIcon, MoveRight, ThumbsUpIcon, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PricingStatProps {
  value: string;
  label: string;
}

interface PricingPlanProps {
  badge?: string;
  title: string;
  description: string;
  price: number;
  period?: string;
  icon?: LucideIcon;
  highlight?: boolean;
  onClickButton?: () => void;
}

const PricingStat: React.FC<PricingStatProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );
};

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  description,
  price,
  period = "Month",
  icon: Icon = ThumbsUpIcon,
  highlight = false,
  onClickButton,
}) => {
  return (
    <Card
      className={`border-0 shadow-sm ${
        highlight ? "bg-primary text-white" : "border"
      }`}
    >
      <CardContent className="p-11">
        <div
          className={`mb-4 p-3 w-11 h-11 flex items-center justify-center rounded  ${
            highlight ? "bg-white text-primary" : " border"
          }`}
        >
          <Icon />
        </div>
        <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
        <CardDescription
          className={`mb-6 ${highlight ? "text-white/90" : "text-gray-600"}`}
        >
          {description}
        </CardDescription>
        <Button
          onClick={onClickButton && onClickButton}
          variant={highlight ? "default" : "outline"}
          className={`w-full justify-between h-11 shadow-none ${
            highlight ? "bg-white text-primary hover:bg-white/90" : "    "
          }`}
        >
          ${price} / {period}
          <MoveRight size={16} />
        </Button>
      </CardContent>
    </Card>
  );
};

interface PricingSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  plans?: PricingPlanProps[];
  stats?: PricingStatProps[];
}

const PricingSection1: React.FC<PricingSectionProps> = ({
  badge = "Plans & Pricing",
  title = "Flexible solutions for every business",
  subtitle = "Choose the perfect plan for your needs. Scale up or down as your business evolves.",
  plans = [
    {
      title: "Starter Package",
      description:
        "Perfect for small businesses getting started with essential features to boost your operations.",
      price: 29,
      icon: Bolt,
      highlight: false,
      onClickButton: () => {
        console.log("clicked");
      },
    },
    {
      title: "Professional Suite",
      description:
        "Advanced tools for growing businesses that need more power and customization options.",
      price: 79,
      icon: User,
      highlight: true,
      onClickButton: () => {
        console.log("clicked pack 2");
      },
    },
  ],
  stats = [
    { value: "24/7", label: "Customer Support" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "500+", label: "Happy Clients" },
    { value: "30+", label: "Features Included" },
  ],
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <Badge variant={"secondary"}>{badge}</Badge>
        <h2 className="text-4xl font-bold mb-4 mt-4">{title}</h2>
        <p className="text-gray-600 max-w-lg mx-auto">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {plans.map((plan, index) => (
          <PricingPlan key={index} {...plan} />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <PricingStat key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection1;
